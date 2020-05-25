<template>
  <div class="animPage">
      <img id="left" class="cutoutImg left" src="../assets/walkingImg2.png" alt="">
    <button class="click">click to reverse</button>
    <div class="text">
      <img class="title" src="../assets/SVG/hi2.svg" alt="">
      <img class="underTitle" src="../assets/SVG/enjoy.svg" alt="">
    </div>

    <div class="animation">
      <div class="gridAnim"></div>
      <img class="line" src="../assets/SVG/line.svg" alt="">
    </div>
  </div>
</template>

<script>
  import { movingText } from '../animate';
  import { animation } from '../animate';
  
  export default {
    mounted: function() {
      movingText();
      animation();
    }
  }
</script>

<style scoped>
  .animPage{
    height: 100vh;
    width: 100vw;
    background-color: #500000;
    -moz-user-select: none;
    user-select: none;
  }

  .cutoutImg{
    position: absolute;
    left: 18.7%;
    bottom: 18%;
    background-color: transparent;
    width: 22vw;
    height: 55vh;
    transform: scale(1.6);
    transition: all .3s;
    z-index: 10;
  }

  .text{
    position: fixed;
    width: 100%;
    z-index: 1;
    opacity: 0;
    background-color: transparent;
  }

  .title{
    margin-top: 15%;
    position: block;
    width: 70%;
  }

  .underTitle{
    position: block;
    margin-top: 1%;
    margin-left: 10%;
    width: 40%;
  }

  .click{
    position: absolute;
    cursor: pointer;
    bottom: 8%;
    right: 6%;
    padding:1% 6%;
    border: none;
    color: #F7F7F7;
    background-color: #500000;
    box-shadow: 5px 15px 30px rgba(0, 0, 0, 0.356);
    -moz-user-select: none;
    user-select: none;
    transition: all .5s;
  }

  .click:hover{
    color: rgb(235, 235, 235);
    background-color: #680505;
  }

  .animation{
    padding-top: 47vh;
  }

  .line{
    z-index: 9;
    position: fixed;
    margin-left: 120vw;
    width: 120%;
  }

  .gridAnim{
    display: flex;
    flex-wrap: wrap;
    z-index: 10;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 15rem;
  }

  .gridAnim div{
    width: 1rem;
    height: 1rem;
    border: 1px solid #202020;
    background-color: #202020;
  }
</style>