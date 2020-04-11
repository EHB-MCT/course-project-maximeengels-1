
<template>
    <div>Hello world</div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
anime({
  targets: 'div',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 800,
  loop: true
});
</script>



<style scoped>

</style>
