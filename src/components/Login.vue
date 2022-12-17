<template>
  <v-container fluid class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row justify="center">
        <v-col cols="5">
          <v-card class="pa-4 px-6" elevation="8">
            <h1 class="mb-3">
              Login
            </h1>
            <v-form>
              <v-text-field v-model="username" variant="outlined" class="mb-3" label="User Name"></v-text-field>
              <v-text-field v-model="password" variant="outlined" class="mb-3" type="password" label="Password"></v-text-field>
              <v-btn color="primary" class="mb-3" block @click="login">Login</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
//
</script>
<script>
export default {
  data(){
    return{
      username: '',
      password: '',
      r: ''
    }
  },
  methods:{
    login(){
      this.r = this.username

    }
  }
}
</script>


