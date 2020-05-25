<template>
  <div id="app">
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
h3,
p{
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  color: rgb(190, 190, 190);
}

.animPage{
  height: 100%;
  width: 100vw;
}

.homeBtn{
    position: absolute;
    color: #F7F7F7;
    border-radius: 50%;
    right: 3%;
    top: 4%;
    width: 60px;
    height: 60px;
    z-index: 9999;
    font-weight: 600;
    border: none;
    background-color: #252525;
    transition: all .5s;
    box-shadow: 5px 15px 30px rgba(0, 0, 0, 0.356);
  }

  .homeBtn:hover{
    cursor: pointer;
    background-color: #202020;
    color: rgb(195, 195, 195);
  }
</style>
