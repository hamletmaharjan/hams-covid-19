<template>
  <div class="home">
    <h1>Nepal Infection Data</h1>
    <h2>Corona Virus Cases:</h2>
    <h1 class="danger">{{getNepalData.tested_positive }}</h1>
    <h2>Recovered:</h2>
    <h1 class="safe">{{getNepalData.recovered}}</h1>
    <h2>Deaths:</h2>
    <h1>{{getNepalData.deaths}}</h1>
    <h5>Tested Negative {{getNepalData.tested_negative}}</h5>
    <h5>Tested Total {{getNepalData.tested_total}}</h5>
    <h5>In Isolation {{getNepalData.in_isolation}}</h5>
    <h5>Pending Result {{getNepalData.pending_result}}</h5>
    <h5>Updated  {{updatedAt}}</h5>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'Home',
  data() {
    return {
      data:[]
    }
  },
  computed: {
    ...mapGetters(['getNepalData']),

    updatedAt: function() {
      return moment(this.getNepalData.updated_at).fromNow();
    }
  }
}
</script>

<style scoped>
.danger {
  color: red;
}
.safe {
  color: greenyellow;
}
h1 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 5em;
}

h2 {
  font-size: 2.5em;
}
</style>