import types from './mutationTypes';

export default {
  [types.ADD_USERS](state, users) {
    state.users = users;
  },
};
