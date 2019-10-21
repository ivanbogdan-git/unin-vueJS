<template>
  <div class="box">
    <h3>{{ user.firstName }}</h3>
    <h3>{{ user.lastName }}</h3>
    <h3>{{ user.email }}</h3>
    <h3>{{ user.vocation }}</h3>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
  .box {
    height: 400px;
    width: 400px;
    background: black;
  }
</style>
