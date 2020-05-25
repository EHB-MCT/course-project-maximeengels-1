<template>
  <div class="infoPage">
    <button @click="goHome" class="homeBtn">X</button>
      <img id="right" class="cutoutImg right" src="../assets/frontImg2.png" alt="">
    <div class="text">
      <h1 class="info">MAXIME ENGELS</h1>
      <h2 class="info">Student Multec</h2>
      <p class="info">Hi, I'm a student at The Erasmushogeschool Brussel. <br>
        Thank you for being interested in this little project for school,
        using Vue in combination with Animejs to create some smooth animations
        and transitions.
      </p>
    </div>

    <div class="socials">
      <a href="https://dotsandpix-maxime-e.web.app/home">
            <svg class="link" xmlns="http://www.w3.org/2000/svg" width="38.253" height="38.253" viewBox="0 0 38.253 38.253">
              <path id="iconmonstr-link-1" class="cls-1" d="M5.489,7.734A5.692,5.692,0,0,1,14.26,8.6L12.268,10.6a3,3,0,0,0-3.4-1.729,2.954,2.954,0,0,0-1.448.8L3.6,13.483a2.973,2.973,0,0,0,4.2,4.2l1.177-1.177a7.568,7.568,0,0,0,3.352.51l-2.6,2.6a5.7,5.7,0,0,1-8.065-8.065L5.489,7.734ZM11.552,1.67l-2.6,2.6a7.57,7.57,0,0,1,3.352.509L13.482,3.6a2.973,2.973,0,0,1,4.2,4.2l-3.819,3.819a2.978,2.978,0,0,1-4.2,0,3.164,3.164,0,0,1-.645-.932L7.027,12.683a5.356,5.356,0,0,0,.706.871,5.7,5.7,0,0,0,8.065,0l3.818-3.819A5.7,5.7,0,1,0,11.552,1.67Z" transform="translate(-0.001 0)"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/maximeengels_/">
            <svg class="insta" xmlns="http://www.w3.org/2000/svg" width="38.253" height="38.253"
              viewBox="0 0 38.253 38.253">
              <path id="iconmonstr-instagram-11-2" data-name="iconmonstr-instagram-11" class="cls-1"
                d="M19.126,3.448c5.107,0,5.712.019,7.73.112,5.183.236,7.6,2.7,7.84,7.84.092,2.016.11,2.622.11,7.729s-.019,5.712-.11,7.729c-.237,5.14-2.652,7.6-7.84,7.84-2.018.092-2.62.112-7.73.112s-5.712-.019-7.729-.112c-5.2-.237-7.6-2.708-7.84-7.842-.092-2.016-.112-2.62-.112-7.729s.021-5.711.112-7.729c.237-5.143,2.652-7.6,7.84-7.84,2.018-.091,2.622-.11,7.729-.11Zm0-3.448c-5.194,0-5.845.022-7.885.115C4.3.434.435,4.287.116,11.24.022,13.282,0,13.932,0,19.126s.022,5.846.115,7.886C.434,33.959,4.287,37.819,11.24,38.138c2.042.092,2.692.115,7.886.115s5.846-.022,7.886-.115c6.94-.319,10.81-4.173,11.124-11.125.094-2.04.116-2.692.116-7.886s-.022-5.845-.115-7.885C37.825,4.3,33.967.435,27.014.116,24.973.022,24.321,0,19.126,0Zm0,9.3a9.822,9.822,0,1,0,9.821,9.821A9.822,9.822,0,0,0,19.126,9.3Zm0,16.2A6.375,6.375,0,1,1,25.5,19.126,6.375,6.375,0,0,1,19.126,25.5ZM29.337,6.622a2.3,2.3,0,1,0,2.294,2.3A2.3,2.3,0,0,0,29.337,6.622Z" />
            </svg>
          </a>
    </div>

    <div class="information">
      <img class="line" src="../assets/SVG/line.svg" alt="">
    </div>
  </div>
</template>

<script>
  import { lineAnimation } from '../animate';
  import { goToHome } from '../router/index';
  
  export default {
    mounted: function() {
      lineAnimation();
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
    color: #04033f;
  }

  .infoPage{
    height: 100vh;
    width: 100vw;
    background-color: #010050;
    -moz-user-select: none;
    user-select: none;
  }

  .cutoutImg{
    position: absolute;
    right: 18.7%;
    bottom: 18.1%;
    background-color: transparent;
    width: 22vw;
    height: 55vh;
    transform: scale(1.3);
    transition: all .3s;
    z-index: 10;
  }

  .socials{
    display: flex;
    position: absolute;
    text-align: left;
    width: 30%;
    z-index: 10;
    bottom: 0;
    margin: 22% 5% 22% -40%;
  }

  .socials svg{
    fill: #939295;
    transition: all .3s;
  }

  .socials svg:hover{
    fill: #04033f;
  }

  .insta{
    height: 25px;
  }

  .text{
    position: absolute;
    text-align: left;
    width: 40%;
    z-index: 10;
    margin: 22% 5% 22% -40%;
  }

  .text h1, .text h2, .text p{
    margin: 0;
    color: #010129;
    font-weight: 400;
  }

  .text h1{
    font-size: 2.2em;
    margin: 0;
    font-weight: 500;
  }

  .text h2{
    font-size: 1.4em;
    margin-bottom: 3%;
  }

  .text p{
    font-size: 1.05em;
    width: 60%;
  }

  .information{
    display: flex
  }

  .line{
    z-index: 9;
    position: fixed;
    transform: rotateZ(90deg);
    margin-left: -50%;
    margin-top: 120%;
    width: 120%;
  }
</style>