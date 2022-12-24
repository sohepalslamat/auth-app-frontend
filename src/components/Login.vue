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
              <v-text-field v-model="email" variant="outlined" class="mb-3" label="Email"></v-text-field>
              <v-text-field v-model="password" variant="outlined" class="mb-3" type="password" label="Password"></v-text-field>
              <v-btn color="primary" :loading="loading" class="mb-3" block @click="login">Login</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      email: '',
      password: '',
      loading: false
    }
  },
  methods:{
    login(){
      this.loading = true
      this.$store.dispatch('login', {email: this.email, password: this.password}).then((res) => {
        this.$router.push('/')
      }).catch((err) => {

      }).finally(()=>{
        this.loading = false
      })

    }
  }
}
</script>


