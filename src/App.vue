<template>
  <v-app>
    <NavBar></NavBar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

import NavBar from './components/NavBar';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      infectionData: []
    }
  },
  components: {
    NavBar
  },

  methods: {
    ...mapActions(['fetchNepalData','fetchWorldData']),
  },


  created() {
    this.fetchNepalData();
    this.fetchWorldData();
  }
}
</script>

<style>
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>