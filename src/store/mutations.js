import mutationTypes from './mutationTypes';

export default {
  [mutationTypes.ADD_USERS](state, users) {
    console.log(state, users);
    state.users = users;
  },
};
