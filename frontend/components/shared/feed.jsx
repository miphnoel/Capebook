import React from 'react';

import PostForm from './post_form';
import PostsIndex from './posts_index';

const Feed = (props) => {
  return (
    <div className="feed">
      <PostForm />
      <PostsIndex />
    </div>
  );
}

export default Feed;
