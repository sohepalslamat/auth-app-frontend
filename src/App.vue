<template>
  <v-app class="bg-cyan-lighten-5">
    <v-app-bar color="grey-lighten-4" :elevation="4">
      <v-app-bar-title  @click="$router.push('/')" style="cursor: pointer;">Auth App</v-app-bar-title>
        <template v-slot:append>
          <v-spacer></v-spacer>
          <v-btn v-if="$store.state.user" color="success" @click="logout">Logout</v-btn>
          <div v-else>
            <v-btn color="primary" class="mx-2" @click="$router.push('login')"> Login </v-btn>
            <v-btn color="secondary" class="mx-2" @click="$router.push('register')" variant="outlined"> register </v-btn>
          </div>
        </template>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  beforeCreate(){
    this.$store.commit('INIT_STATE')
  },
  computed:{
    token(){
      return this.$store.state.token
    }
  },
  watch:{
    token(val){
      !val ? this.$router.push('login') : null
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
    }
  }
}

</script>
<style>
#app {
  background-color: rgb(248, 234, 215);
}
</style>
