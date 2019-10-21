<template>
  <v-container app>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12 sm6 lg4>
        <user
          v-for="(user, i) in users"
          :user="user"
          :key="i"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import User from '@/components/Users/User';

export default {
  name: 'Users',
  components: {
    User,
  },
  computed: {
    ...mapGetters(['users']),
  },
  beforeMount() {
    this.$store.dispatch('getUsers');
  },
};
</script>

<style lang="scss" scoped>

</style>
