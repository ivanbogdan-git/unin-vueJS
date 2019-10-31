import mutationTypes from './mutationTypes';
import api from '../api';

/* eslint no-underscore-dangle: 0 */

export default {
  getUsers: async ({ commit }, db) => {
    try {
      commit(mutationTypes.ADD_USERS, await api.getUsers(db));
    } catch (err) {
      console.log(err);
    }
  },
  postUser: async ({ dispatch }, { user, db }) => {
    try {
      await api.postUser(user, db);
      dispatch('getUsers', db);
    } catch (err) {
      console.log(err);
    }
  },
  putUser: async ({ dispatch }, { user, db }) => {
    try {
      console.log(user);
      console.log(db);
      await api.putUser(user, db);
      dispatch('getUsers', db);
    } catch (err) {
      console.log(err);
    }
  },
  deleteUser: async ({ dispatch }, { id, db }) => {
    try {
      console.log(db);
      await api.deleteUser(id, db);
      dispatch('getUsers', db);
    } catch (err) {
      console.log(err);
    }
  },
};
