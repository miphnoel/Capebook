import React from 'react';
import { Link } from 'react-router-dom';
import values from 'lodash/values';

import CommentForm from './comment_form';
import PostMenu from './post_menu';


const Post = ({ post, currentUser }) => {
  if (!post.comments) {
    return <div></div>
  }

  const recipientText = (post.author_id === post.recipient_id
    ? ""
    : (<div>
        &nbsp; ▶︎ &nbsp;
        <Link to={`/profile/${post.recipient_id}`}>
          {post.recipient_name}
        </Link>
      </div> ));

  const menu = (post.author_id === currentUser.id
    ? <PostMenu post={post}/>
    : <div></div> );

  let commentList = <div></div>;
  if (post.comments.commentIds.length > 0) {
    const comments = values(post.comments.entities).map(comment => (
      <li key={comment.id}>
        <img src={comment.author_pic} />
        <div className="comment-content">
          <span>
            <Link to={`/profile/${comment.author_id}`}>
              {comment.author_name}
            </Link>
            {comment.body}
          </span>
          <span className="time-string">{comment.time_string}</span>
        </div>
      </li>
    ));

    commentList = (
      <ul className="comment-list">
        {comments}
      </ul>
    );
  }

  return (
    <li className="post">
      <div className="post-header">
        <img src={post.author_pic} />
        <div className="post-header-info">
          <div className="post-usernames">
            <Link to={`/profile/${post.author_id}`}>
              {post.author_name}
            </Link>
            {recipientText}
          </div>
          <div className="time-string">
            {post.time_string}
          </div>
        </div>
        {menu}
      </div>
      <div className="post-content">
        {post.body}
      </div>
      <div className="post-comments">
        {commentList}
        <CommentForm parentId={post.id}/>
      </div>
    </li>
  );
}


export default Post;
