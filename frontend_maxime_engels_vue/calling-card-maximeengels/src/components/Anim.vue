<template>
  <div class="animPage">
    <button @click="goHome" class="homeBtn">X</button>
      <img id="left" class="cutoutImg left" src="../assets/walkingImg2.png" alt="">
    <button class="click">click to reverse</button>
    <div class="text">
      <img class="title" src="../assets/SVG/hi2.svg" alt="">
      <img class="underTitle" src="../assets/SVG/enjoy.svg" alt="">
    </div>

    <div class="animation">
      <div class="gridAnim" id="gridAnim">
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
        <div class="square" id="div"></div>
      </div>
      <img class="line" src="../assets/SVG/line.svg" alt="">
    </div>
  </div>
</template>

<script>
  import { movingText } from '../animate';
  import { animation } from '../animate';
  import { goToHome } from '../router/index';
  
  export default {
    mounted: function() {
      movingText();
      animation();
    },
    methods: {
      goHome() {
        goToHome();
      }
    }
  }
</script>

<style scoped>
  .homeBtn{
    position: absolute;
    color: #F7F7F7;
    border-radius: 50%;
    right: 3%;
    top: 4%;
    width: 60px;
    height: 60px;
    padding: 5px;
    z-index: 9999;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    background-color: #252525;
    transition: all .3s;
    box-shadow: 5px 15px 30px rgba(0, 0, 0, 0.356);
  }

  .homeBtn:hover{
    cursor: pointer;
    background-color: #202020;
    color: rgb(93, 7, 7);
  }

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
    display: flex
  }

  .line{
    z-index: 9;
    position: fixed;
    margin-left: 120vw;
    width: 120%;
  }

  .gridAnim{
    display: flex;
    position: fixed;
    flex-wrap: wrap;
    right: 30%;
    margin-right: -50vw;
    z-index: 1000;
    justify-content: center;
    margin-top: -5%;
    width: 12rem;
    height: 8rem;
  }

  .gridAnim div{
    z-index: 1000;
    width: 1rem;
    height: 1rem;
    margin-top: 5px;
    margin-right: 5px;
    border: 1px solid #202020;
    background-color: #202020;
  }
</style>