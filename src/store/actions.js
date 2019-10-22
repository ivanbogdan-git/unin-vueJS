import mutationTypes from './mutationTypes';
import api from '../api';

export default {
  getUsers: async ({ commit }) => {
    try {
      commit(mutationTypes.ADD_USERS, await api.getUsers());
    } catch (err) {
      console.log(err);
    }
  },
  postUser: async ({ dispatch }, user) => {
    try {
      await api.postUser(user);
      dispatch('getUsers');
    } catch (err) {
      console.log(err);
    }
  },
  putUser: async ({ dispatch }, user) => {
    try {
      await api.putUser(user);
      dispatch('getUsers');
    } catch (err) {
      console.log(err);
    }
  },
  deleteUser: async ({ dispatch }, id) => {
    try {
      await api.deleteUser(id);
      dispatch('getUsers');
    } catch (err) {
      console.log(err);
    }
  },
};
