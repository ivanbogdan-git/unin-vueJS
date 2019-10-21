import http from './http';

const getUsers = () => {
  http.get('/users')
    .then(res => res.json())
    .catch(err => console.error(err));
};

export default {
  getUsers,
};
