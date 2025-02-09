import { useContext } from 'react';
import { PostContext } from './PostProvider';

export function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('usePost must be used within a PostProvider');
  }
  return context;
}
