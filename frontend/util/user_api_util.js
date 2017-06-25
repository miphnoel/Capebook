export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
}

export const fetchFriends = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/'
  });
}

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user }
  });
}

export const updateProfile = (id, profile) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}/profile`,
    data: { profile }
  });
}
