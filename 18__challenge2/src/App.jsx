import { useEffect, useReducer } from 'react';
import './App.css';
import Error from './components/Error';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import Main from './components/Main';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import Question from './components/Question';
import StartScreen from './components/StartScreen';
import Timer from './components/Timer';

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived': {
      const { questions, highscore } = action.payload;
      return {
        ...state,
        questions: questions,
        highscore: highscore.score,
        status: 'ready',
      };
    }
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: SECS_PER_QUESTION * state.questions.length,
      };
    case 'newAnswer': {
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case 'finish':
      fetch('http://localhost:9000/highscore', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ score: state.points }),
      });

      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
        highscore: state.highscore,
      };
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('http://localhost:9000/questions')
  //       .then((res) => res.json())
  //       .then((data) => dispatch({ type: 'dataReceived', payload: data }))
  //       .catch((err) => dispatch({ type: 'dataFailed', payload: err.message }));
  //   }, 500);
  // }, []);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const resQuestions = await fetch('http://localhost:9000/questions');
        const dataQuestions = await resQuestions.json();
        const resHighscore = await fetch('http://localhost:9000/highscore');
        const dataHighscore = await resHighscore.json();

        dispatch({
          type: 'dataReceived',
          payload: { questions: dataQuestions, highscore: dataHighscore },
        });
      } catch (err) {
        console.error(err);
        dispatch({ type: 'dataFailed' });
      }
    }, 500);
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen
            numQuestions={numQuestions}
            dispatch={dispatch}
            highscore={highscore}
          />
        )}
        {status === 'active' && (
          <>
            <Progress
              numQuestions={numQuestions}
              index={index}
              answer={answer}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === 'finished' && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
