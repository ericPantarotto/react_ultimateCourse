import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

export function useQuiz() {
  const ctxValue = useContext(QuizContext);
  if (ctxValue === undefined)
    throw new Error('useQuiz must be used within a QuizProvider');

  return ctxValue;
}
