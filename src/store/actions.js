import mutationTypes from './mutationTypes';
import api from '@/api';

export default {
  getUsers: async ({ commit }) => {
    try {
      commit(mutationTypes.ADD_USERS, await api.getUsers());
    } catch (err) {
      console.log(err);
    }
  },
};
