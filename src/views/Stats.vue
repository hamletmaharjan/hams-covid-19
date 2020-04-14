<template>
  
  <v-card>
    <v-card-title>
      Country
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="getWorldData"
      :search="search"
    ></v-data-table>
  </v-card>

</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'Stats',
    data() {
        return {
            search: '',
            headers: [
                {
                text: "Country",
                align: "start",
                filterable: true,
                value: "country"
                },
                { text: "Total Case", value: "totalCases" },
                { text: "New Case", value: "newCases" },
                { text: "Total Death", value: "totalDeaths" },
                { text: "New Daath", value: "newDeaths" },
                { text: "Active Cases", value: "activeCases" },
                { text: "Total Recovered", value: "totalRecovered" }
            ]
        }
    },

    computed : {
        ...mapGetters(['getWorldData'])
    },
    created() {
        console.log(this.getWorldData);
    }
}
</script>

<style>
#app {
    color: black;
}
</style>