export const fetchFriendRequests = () => {
  return $.ajax({
    type: 'GET',
    url: `api/friendships`
  });
}

export const fetchFriendship = (id) => {
  return $.ajax({
    type: 'GET',
    url: `api/friendships/${id}`
  })
}

export const fetchFriendships = (id) => {
  return $.ajax({
    type: 'GET',
    url: `api/users/${id}/friendships`
  })
}

export const createFriendRequest = (receiverId) => {
  return $.ajax({
    type: 'POST',
    url: `api/users/${receiverId}/friendships`
  });
}

export const updateFriendRequest = (friendship) => {
  return $.ajax({
    type: 'PATCH',
    url: `api/friendships/${friendship.id}`,
    data: { friendship }
  });
}

export const deleteFriend = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `api/friendships/${id}`
  });
}
