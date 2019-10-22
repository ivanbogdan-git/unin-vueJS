<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
    <v-btn class="mx-2" fab fixed bottom right dark color="indigo"
      @click="toggleDialog">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Add new user</span>
      </v-card-title>
      <v-card-text>
          <v-form ref="form" v-model="valid" >
            <v-container class="pa-0">
              <v-layout row>
                <v-select
                  v-model="user.vocation"
                  :items="['Developer', 'Majstor', 'Vodoinstalater']"
                  label="Vocation*"
                  class="pa-2"
                  :rules="[requiredRule]"
                  required
                />
                <v-flex xs12 sm12 md12 class="pa-2">
                  <v-text-field
                    v-model="user.email"
                    type="email"
                    label="Email*"
                    placeholder="username@email.com"
                    :rules="[requiredRule]"
                    required />
                </v-flex>
                <v-flex md12 lg12 sm12 class="pa-2">
                  <v-text-field
                    v-model="user.firstName"
                    :rules="[requiredRule]"
                    required
                    label="First name" />
                </v-flex>
                <v-flex md12 lg12 sm12 class="pa-2">
                  <v-text-field
                    v-model="user.lastName"
                    :rules="[requiredRule]"
                    required
                    label="Last name" />
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="addNewUser">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'NewUserDialog',
  data() {
    return {
      dialog: false,
      user: {
        firstName: null,
        lastName: null,
        email: null,
        vocation: null,
      },
      valid: false,
      requiredRule: v => !!v || 'This field is required!',
    };
  },
  methods: {
    toggleDialog() {
      console.log('aaa');
      this.dialog = !this.dialog;
    },
    addNewUser() {
      this.$store.dispatch('postUser', this.user);
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
</style>
