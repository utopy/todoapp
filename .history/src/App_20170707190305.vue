<template>
  <div id="app">
    <header>
      <span>Vue.js aaa</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import utils from './assets/utils.js'
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
