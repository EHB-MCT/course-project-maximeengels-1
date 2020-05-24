<template>
  <div id="app">
    <Intro msg="Welcome to Your Vue.js App"/>
    <Anim msg="Welcome to Your Vue.js App"/>
    <Info msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import Info from './components/Info.vue'
import Anim from './components/Anim.vue'

export default {
  name: 'App',
  components: {
    Intro,
    Info,
    Anim
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;300;400;500&family=Montserrat:wght@900&display=swap');

#app {
  font-family: titleFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1E1E1E;
  -moz-user-select: none;
  user-select: none;
  max-width: 100vw;
  max-height: 100vh;
  /* overflow-x: hidden;
  overflow-y: hidden; */
}

body{
  margin: 0;
  background-color: #252525;
}

h1,
h2,
h3{
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  color: rgb(190, 190, 190);
}

.animPage{
  height: 100%;
  width: 100vw;
}

@font-face {
  font-family: titleFont;
  src: url(./assets/OLDENGL.TTF);
}
</style>
