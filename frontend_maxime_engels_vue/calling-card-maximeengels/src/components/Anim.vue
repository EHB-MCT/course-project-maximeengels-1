<template>
  <div>
    <!-- <div class="text">
      <img src="../assets/SVG/hi.svg" alt="">
    </div> -->
    <!-- <svg class="svgMorph">
        <path stroke="none" fill="white" d="M 0 0 L 3000 0 L 3000 3000 L 0 3000 Z"></path>
    </svg> -->
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .text{
    position: absolute;
    width: 100%;
    top: 30%;
    z-index: 1;
    background-color: transparent;
  }

  .text img{
    position: absolute;
    width: 200%;
  }

  /* .svgMorph{ 
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  } */
</style>