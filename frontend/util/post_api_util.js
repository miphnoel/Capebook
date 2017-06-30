
export const fetchTimeline = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/timeline/${id}`
  });
}

export const fetchNewsFeed = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/newsfeed'
  });
}

export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: { post }
  });
}

export const updatePost = (post) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/posts/${post.id}`,
    data: { post }
  });
}

export const deletePost = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`
  });
}
