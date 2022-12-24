<template>
  <v-container fluid class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row justify="center">
        <v-col cols="5">
          <v-card class="pa-4 px-6" elevation="8">
            <h1 class="mb-3">Register</h1>
            <v-form>
              <v-text-field
                v-model="user.first_name"
                variant="outlined"
                class="mb-3"
                label="First name"
              ></v-text-field>
              <v-text-field
                v-model="user.username"
                variant="outlined"
                class="mb-3"
                label="Username"
              ></v-text-field>
              <v-text-field v-model="user.email" variant="outlined" class="mb-3" label="Email"></v-text-field>
              <v-text-field
                v-model="user.password"
                variant="outlined"
                class="mb-3"
                type="password"
                label="Password"
              ></v-text-field>
              <v-btn
                color="primary"
                :loading="loading"
                class="mb-3"
                block
                @click="register"
              >Register</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        username: "",
        first_name: "",
      },
      loading: false,
    };
  },
  methods: {
    register() {
      this.$store.dispatch('register', this.user).then((res) => {
        this.$router.push('login')
      }).catch((err) => {

      });
    },
  },
};
</script>


