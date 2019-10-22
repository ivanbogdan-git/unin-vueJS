<template>
  <v-app>
    <app-nav />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppNav from '../components/AppNav';

export default {
  name: 'TemplateDefault',
  components: {
    AppNav,
  },
};
</script>

<style scoped lang="scss">

</style>
