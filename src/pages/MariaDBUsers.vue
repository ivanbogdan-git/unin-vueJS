<template>
  <v-container>
    <v-layout
      text-center
      row
      wrap>
      <user
        v-for="(user, i) in users"
        :db="db"
        :user="user"
        :key="i"
      />
    </v-layout>
    <new-user-dialog :db="db"/>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import User from '@/components/Users/User';
import NewUserDialog from '@/components/Users/NewUserDialog';

export default {
  name: 'MariaDBUsers',
  data() {
    return {
      db: 'mariadb',
    };
  },
  components: {
    User,
    NewUserDialog,
  },
  computed: {
    ...mapGetters(['users']),
  },
  beforeMount() {
    this.$store.dispatch('getUsers', this.db);
  },
};
</script>

<style lang="scss" scoped>

</style>
