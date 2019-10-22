<template>
  <v-flex xs12 sm6 md4 lg3>
    <v-card class="ma-2 pa-4">
      <v-card-text>
        <label>First name:</label><br /><h3>{{ user.firstName }}</h3>
        <label>Last name:</label><br /><h3>{{ user.lastName }}</h3>
        <label>Email:</label><br /><h3>{{ user.email }}</h3>
        <label>Vocation:</label><br /><h3>{{ user.vocation }}</h3>
      </v-card-text>
      <v-card-actions class="mx-auto">
        <v-layout row>
          <v-flex justify-center>
            <v-btn color="primary" @click="dialog = !dialog">Edit</v-btn>
            <v-btn color="error" @click="$store.dispatch('deleteUser', user._id)">Delete</v-btn>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
    <edit-user-dialog @toggle="dialog = !dialog" :dialog="dialog" :user="user"/>
  </v-flex>
</template>

<script>
import EditUserDialog from './EditUserDialog';

export default {
  name: 'User',
  data() {
    return {
      dialog: false,
    };
  },
  components: { EditUserDialog },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log(this.user);
  },
};
</script>

<style>
  .box {
    height: 400px;
    width: 400px;
  }
</style>
