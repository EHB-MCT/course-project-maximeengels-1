
<template>
    <div>
    <button @click="go">Click Here to Animate</button>
    <div class="block" ref="square">hmm</div>
    </div>
</template>

<script>
import { translate } from '../animate';

export default {
  methods: {
    go() {
      translate(this.$refs.square);
      console.log("triggered");
    }
  }
};

// import anime from 'animejs/lib/anime.es.js';
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   }
// }
// anime({
//   targets: 'div',
//   translateX: 250,
//   rotate: '1turn',
//   backgroundColor: '#FFF',
//   duration: 800,
//   loop: true
// });

</script>



<style scoped>

</style>
