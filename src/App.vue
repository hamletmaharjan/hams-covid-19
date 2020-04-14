<template>
  <v-app>
    <NavBar></NavBar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
import NavBar from './components/NavBar';
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


  created() {
    console.log('created home');
    axios.get('https://nepalcorona.info/api/v1/data/nepal')
    .then((res) => {
      this.infectionData = res.data;
      console.log(this.infectionData);
    }).catch(err => console.log(err));
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>