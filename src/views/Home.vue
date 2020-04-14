<template>
  <div class="home">
    <h1>Nepal Infection Data</h1>
    <h2>Tested Positive {{ getNepalData.tested_positive }}</h2>
    <h2 class="danger">Tested Negative {{getNepalData.tested_negative}}</h2>
    <h2>Tested Total {{getNepalData.tested_total}}</h2>
    <h2>In Isolation {{getNepalData.in_isolation}}</h2>
    <h2>Pending Result {{getNepalData.pending_result}}</h2>
    <h2>Recovered {{getNepalData.recovered}}</h2>
    <h2>Deaths {{getNepalData.deaths}}</h2> <hr>
    <h2>Updated At {{getNepalData.updated_at}}</h2>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';


export default {
  name: 'Home',
  data() {
    return {
      data:[]
    }
  },
  computed: {
    ...mapGetters(['getNepalData'])
  }
}
</script>

<style scoped>
.danger {
  color: red;
}
h1 {
  font-size: 7em;
}
</style>