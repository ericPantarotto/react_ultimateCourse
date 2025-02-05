import { useContext } from 'react';
import { CitiesContext } from './CitiesProvider';

export function useCities() {
  const ctxValue = useContext(CitiesContext);
  if (ctxValue === undefined)
    throw new Error('useCities must be used within a CitiesProvider');

  return ctxValue;
}
