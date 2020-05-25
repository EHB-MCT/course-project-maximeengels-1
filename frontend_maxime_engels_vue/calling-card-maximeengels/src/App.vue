<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/anim">Animation</router-link>
      <router-link to="/info">Info</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
  max-height: 100vh;
  -moz-user-select: none;
  user-select: none;
  /* overflow-x: hidden;
  overflow-y: hidden; */
}

#nav{
  position: fixed;
  z-index: 1000;
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
