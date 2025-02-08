import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

const SECS_PER_QUESTION = 30;

const QuizContext = createContext();

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

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );

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
    <QuizContext.Provider
      value={{
        status,
        questions,
        numQuestions,
        highscore,
        dispatch,
        index,
        answer,
        points,
        maxPossiblePoints,
        secondsRemaining,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizProvider };

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
