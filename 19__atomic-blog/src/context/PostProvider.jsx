import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { createRandomPost } from '../data/fakerPosts';

const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [isFakeDark, setIsFakeDark] = useState(false);

  //NOTE: Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onClearPosts: handleClearPosts,
        onAddPost: handleAddPost,
        searchQuery,
        setSearchQuery,
        isFakeDark,
        setIsFakeDark,
      }}
    >
      {children}
    </PostContext.Provider>
  );

  // const value = useMemo(() => {
  //   return {
  //     posts: searchedPosts,
  //     onClearPosts: handleClearPosts,
  //     onAddPost: handleAddPost,
  //     searchQuery,
  //     setSearchQuery,
  //     isFakeDark,
  //     setIsFakeDark,
  //   };
  // }, [isFakeDark, searchQuery, searchedPosts]);

  // return (
  //   <PostContext.Provider value={value}>{children}</PostContext.Provider>);
}

export { PostContext, PostProvider };

PostProvider.propTypes = {
  children: PropTypes.node,
};
