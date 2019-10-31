import http from './http';

/* eslint no-underscore-dangle: 0 */

const getUsers = (db = 'mongodb') => http.get(`${db}/users`)
  .then(res => res.data)
  .catch(err => console.error(err));

const postUser = (user, db = 'mongodb') => http.post(`${db}/users`, user)
  .then(res => res.data)
  .catch(err => console.error(err));

const putUser = ({ _id: id, ...user }, db = 'mongodb') => http.put(`${db}/users/${id}`, user)
  .then(res => res.data)
  .catch(err => console.error(err));

const deleteUser = (id, db = 'mongodb') => http.delete(`${db}/users/${id}`)
  .then(() => console.log(`${db}/users/${id}`))
  .catch(err => console.error(err));

export default {
  getUsers,
  postUser,
  putUser,
  deleteUser,
};
