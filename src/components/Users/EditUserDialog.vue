<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Edit user</span>
      </v-card-title>
      <v-card-text>
          <v-form ref="form" v-model="valid" >
            <v-container class="pa-0">
              <v-layout row>
                <v-select
                  v-model="editedUser.vocation"
                  :items="['Developer', 'Majstor', 'Vodoinstalater']"
                  label="Vocation*"
                  class="pa-2"
                  :rules="[requiredRule]"
                  required
                />
                <v-flex xs12 sm12 md12 class="pa-2">
                  <v-text-field
                    v-model="editedUser.email"
                    disabled
                    type="email"
                    label="Email*"
                    placeholder="username@email.com"
                    :rules="[requiredRule]"
                    required />
                </v-flex>
                <v-flex md12 lg12 sm12 class="pa-2">
                  <v-text-field
                    v-model="editedUser.firstName"
                    :rules="[requiredRule]"
                    required
                    label="First name" />
                </v-flex>
                <v-flex md12 lg12 sm12 class="pa-2">
                  <v-text-field
                    v-model="editedUser.lastName"
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
        <v-btn color="blue darken-1" text @click="$emit('toggle')">Close</v-btn>
        <v-btn color="blue darken-1" text @click="updateExistingUser">Edit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'EditUserDialog',
  props: {
    dialog: Boolean,
    user: Object,
    db: String,
  },
  data() {
    return {
      editedUser: {
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
    updateExistingUser() {
      console.log(this.db);
      this.$store.dispatch('putUser', { user: this.editedUser, db: this.db });
      this.$emit('toggle');
    },
  },
  beforeMount() {
    this.editedUser = Object.assign(this.editedUser, this.user);
  },
};
</script>

<style scoped>
</style>
