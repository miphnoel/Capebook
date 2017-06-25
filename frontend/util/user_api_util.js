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

export const updateUser = (id, formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: formData,
    processData: false,
    contentType: false
  });
}

export const updateProfile = (id, profile) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}/profile`,
    data: { profile }
  });
}
