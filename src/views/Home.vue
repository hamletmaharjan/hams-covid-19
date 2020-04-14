<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';


export default {
  name: 'Home',
  data() {
    return {
      infectionData: []
    }
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
