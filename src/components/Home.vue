<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      Hello <span v-if="$store.state.user">{{ $store.state.user.username }}</span>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>
