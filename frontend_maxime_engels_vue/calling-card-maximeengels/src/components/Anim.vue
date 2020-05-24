<template>
  <div class="animPage">
      <img id="left" class="cutoutImg left" src="../assets/walkingImg2.png" alt="">
      <button @click="animText()">click</button>
    
    <div class="text">
      <img class="title" src="../assets/SVG/hi2.svg" alt="">
      <img class="underTitle" src="../assets/SVG/enjoy.svg" alt="">
    </div>
    <!-- <svg class="svgMorph">
        <path stroke="none" fill="white" d="M 0 0 L 3000 0 L 3000 3000 L 0 3000 Z"></path>
    </svg> -->
  </div>
</template>

<script>
  import { movingText } from '../animate';
  
  export default {
    methods: {
    animText(){

      movingText();
    }
    }
  }
</script>

<style scoped>
  .animPage{
    height: 100vh;
    width: 100vw;
    background-color: #500000;
  }

  .cutoutImg{
    position: absolute;
    left: 18.7%;
    bottom: 19.2%;
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
    z-index: 2;
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

  .svgMorph{ 
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
</style>