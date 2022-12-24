<template>
  <v-app class="bg-cyan-lighten-5">
    <v-app-bar color="grey-lighten-4" :elevation="4">
      <v-app-bar-title>Auth App</v-app-bar-title>

        <template v-slot:append>
          <v-btn color="primary" class="mx-2" @click="$router.push('login')"> Login </v-btn>
          <v-btn color="secondary" @click="$router.push('/')"> Home </v-btn>
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
  }
}

</script>
<style>
#app {
  background-color: rgb(248, 234, 215);
}
</style>
