import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
  iconfont: 'md',
});

const opts = {
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
};

export default new Vuetify(opts);
