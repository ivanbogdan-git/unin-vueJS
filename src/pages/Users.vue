<template>
  <v-container>
    <v-layout
      text-center
      row
      wrap>
      <user
        v-for="(user, i) in users"
        :user="user"
        :key="i"
      />
    </v-layout>
    <new-user-dialog/>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import User from '@/components/Users/User';
import NewUserDialog from '@/components/Users/NewUserDialog';

export default {
  name: 'Users',
  components: {
    User,
    NewUserDialog,
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
