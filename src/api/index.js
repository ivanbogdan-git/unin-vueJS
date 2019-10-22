import http from './http';

const getUsers = () => http.get('/users')
  .then(res => res.data)
  .catch(err => console.error(err));

const postUser = user => http.post('/users', user)
  .then(res => res.data)
  .catch(err => console.error(err));

const putUser = ({ _id: id, ...user }) => http.put(`/users/${id}`, user)
  .then(res => res.data)
  .catch(err => console.error(err));

const deleteUser = id => http.delete(`/users/${id}`)
  .then(res => res.data)
  .catch(err => console.error(err));

export default {
  getUsers,
  postUser,
  putUser,
  deleteUser,
};
