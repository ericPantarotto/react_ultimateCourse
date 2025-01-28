import { useEffect, useReducer } from 'react';
import './App.css';
import Error from './components/Error';
import Header from './components/Header';
import Loader from './components/Loader';
import Main from './components/Main';
import StartScreen from './components/StartScreen';

const initialState = { questions: [], status: 'loading' };

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error' };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions.length;

  useEffect(() => {
    setTimeout(() => {
      fetch('http://192.168.76.83:8000/questions')
        .then((res) => res.json())
        .then((data) => dispatch({ type: 'dataReceived', payload: data }))
        .catch((err) => dispatch({ type: 'dataFailed', payload: err.message }));
    }, 500);
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuestions={numQuestions} />}
      </Main>
    </div>
  );
}

export default App;
