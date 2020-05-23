<template>
  <div id="app">
    <Intro msg="Welcome to Your Vue.js App"/>
    <Info msg="Welcome to my Info page"/>
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import Info from './components/Info.vue'
export default {
  name: 'App',
  components: {
    Intro,
    Info
  }
}
</script>

<style>
#app {
  font-family: titleFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1E1E1E;
  margin-top: 60px;
  -moz-user-select: none;
  user-select: none;
}

body{
  margin: 0;
  background-color: #252525;
}

@font-face {
  font-family: titleFont;
  src: url(./assets/OLDENGL.TTF);
}
</style>
