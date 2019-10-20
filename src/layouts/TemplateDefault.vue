<template>
  <div>
    <app-nav />
    <router-view></router-view>
  </div>
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
