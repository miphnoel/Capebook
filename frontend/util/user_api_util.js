export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
}

export const fetchFriends = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/friends`,
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

export const fetchAllUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  })
}
