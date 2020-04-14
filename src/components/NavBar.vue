<template>
  <v-app-bar app>
      <div class="logo">
          <v-img alt="App Logo"
        class="shrink mr-2" src="../assets/corona.png" width="40px" height="40px"/>
        
      </div>
      <v-spacer></v-spacer>
      <router-link to="/" class="route" exact>Home</router-link>
      <router-link to="/stats" class="route">Stats</router-link>
      <router-link to="/about" class="route">About</router-link>
  </v-app-bar>
</template>

<script>
export default {

}
</script>


<style scoped>
.nav-bar {
  max-height: 5vw;
}
.nav-content {
  margin: auto;
  width: auto;
  padding: 0;
}
.route {
  text-decoration: none;
  padding: 1vw;
  font-size: 1.5vw;
}


.router-link-active {
    background-color:#b0b5b1;
}
</style>
