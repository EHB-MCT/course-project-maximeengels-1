import anime from 'animejs';
import { goToAnim } from './router/index';
import { goToInfo } from './router/index';

  export function intro() {
    var introAnimation = anime.timeline({
      loop: true
    }).add({
      targets: '.welcome span',
      paddingLeft: 20,
      scale: [{value: .5, easing: 'easeInOutSine', duration: 500}, 
      {value: 1, easing: 'easeOutSine', duration: 1000}],
      delay: anime.stagger(100, {from: 'center'})
    }).add({
      targets: '.welcome span',
      paddingLeft: 0,
      easing: 'easeInOutSine',
      duration: 600,
      delay: anime.stagger(50, {from: 'center'})
    });
    introAnimation.play();
  }

  export function transitionLeft() {
    var introAnimation = anime.timeline({
      loop: false
    }).add({
      targets: ['.leftSquare'],
      backgroundColor: '#500000',
      duration: 100,
      scale: 1.1
    }).add({
        targets: ['.leftSquare'],
        scale: 1,
        width: '100%',
        height: ['55%', '100%'],
        left: ['19vw', 0],
        bottom: 0,
        right: 0,
        top: 0,
        easing: 'easeInOutSine',
        duration: 500,
        loop: false
      }).add({
        targets: ['#left'],
        scale: 1.6,
        duration: 500,
        left: '20%',
        loop: false
      }).add({
        targets: ['.intro', '.right', '.under'],
        opacity: 0,
        easing: 'easeInOutSine',
        duration: 500,
        endDelay: 1000,
        loop: false,
        complete: function() {
          introAnimation.finished.then(goToAnim());
        }
      });
  }

  //===============================ANIMATION PAGE============================

  export function movingText() {
    anime.timeline({loop: false})
    .add({
      targets: '.text',
      opacity: [0,1],
      easing: "easeInOutSine",
      duration: 2250,
      autoplay: true
    }).add({
      targets: '.text img',
      opacity: 0,
      translateX: -6000,
      easing: 'easeInOutSine',
      duration: 3000,
      delay: 1000,
      autoplay: true
    });
  }

  export function animation() {

    let animation = anime.timeline({
      loop: true,
      direction: 'alternate'
    }).add({
      targets: '.line',
      delay: 3000,
      translateX: '-110%',
      easing: "easeInOutSine",
      duration: 2600,
      autoplay: true
    }).add({
      targets: '.line',
      scaleY: 50,
      duration: 1500
    }).add({
      targets: '.gridAnim',
      translateX: -900,
      delay: anime.stagger(100, {from: 'center'}),
      duration: 1500,
      easing: 'easeInOutQuad',
    }).add({
      targets: '.square',
      translateX: anime.stagger(15, {grid: [8, 9], from: 'center', axis: 'x'}),
      translateY: anime.stagger(17, {grid: [8, 9], from: 'center', axis: 'y'}),
      rotateZ: anime.stagger([0, 180], {grid: [8, 9], from: 'center', axis: 'x'}),
      delay: anime.stagger(400, {grid: [8, 9], from: 'center'}),
      easing: 'easeInOutQuad',
      direction: 'alternate'
    }).add({
      targets: '.square',
      translateX: anime.stagger(3, {grid: [8, 9], from: 'center', axis: 'x'}),
      translateY: anime.stagger(5, {grid: [8, 9], from: 'center', axis: 'y'}),
      rotateZ: anime.stagger([0, 200], {grid: [8, 9], from: 'center', axis: 'x'}),
      delay: anime.stagger(400, {grid: [8, 9], from: 'center'}),
      easing: 'easeInOutQuad'
    }).add({
      targets: '.square',
      translateX: anime.stagger(30, {grid: [8, 9], from: 'center', axis: 'x'}),
      translateY: anime.stagger(18, {grid: [8, 9], from: 'center', axis: 'y'}),
      rotateZ: anime.stagger([0, 100], {grid: [8, 9], from: 'center', axis: 'x'}),
      delay: anime.stagger(400, {grid: [8, 9], from: 'center'}),
      easing: 'easeInOutQuad'
    }).add({
      targets: '.square',
      translateX: anime.stagger(20, {grid: [8, 9], from: 'center', axis: 'x'}),
      translateY: anime.stagger(14, {grid: [8, 9], from: 'center', axis: 'y'}),
      rotateZ: anime.stagger([0, 100], {grid: [8, 9], from: 'center', axis: 'x'}),
      delay: anime.stagger(300, {grid: [8, 9], from: 'center'}),
      easing: 'easeInOutQuad'
    }).add({
      targets: '.square',
      translateX: 900,
      delay: anime.stagger(100, {from: 'center'}),
      duration: 500
    });

    document.querySelector('.click').addEventListener('click', () => {
      animation.reverse();
    });
  }

  //==============================INFORMATION PAGE============================

  export function transitionRight() {
    var introAnimation = anime.timeline({
      loop: false
    }).add({
      targets: ['.rightSquare'],
      backgroundColor: '#010050',
      duration: 100,
      scale: 1.1
    }).add({
        targets: ['.rightSquare'],
        scale: 1,
        width: '100%',
        height: ['55%', '100%'],
        right: ['19vw', 0],
        bottom: 0,
        left: 0,
        top: 0,
        easing: 'easeInOutSine',
        duration: 500,
        loop: false
      }).add({
        targets: ['#right'],
        scale: 1.3,
        duration: 500,
        left: '20%',
        loop: false
      }).add({
        targets: ['.intro', '.left', '.under'],
        opacity: 0,
        easing: 'easeInOutSine',
        duration: 500,
        endDelay: 1000,
        loop: false,
        complete: function() {
          introAnimation.finished.then(goToInfo());
        }
      });
  }

  export function lineAnimation() {

    anime.timeline({
      loop: false,
      autoplay: true
    }).add({
      targets: '.line',
      rotateZ: 90
    }).add({
      targets: '.line',
      delay: 500,
      translateX: '-100%',
      easing: "easeInOutSine",
      duration: 2200
    }).add({
      targets: '.line',
      scaleY: 110,
      easing: "easeInOutQuint",
      duration: 1500
    }).add({
      targets: '.info',
      translateX: '47vw',
      easing: "easeInOutQuint",
      delay: anime.stagger(200),
      duration: 2500
    }).add({
      targets: '.socials svg',
      translateX: '47vw',
      easing: "easeInOutQuint",
      delay: anime.stagger(100),
      duration: 500
    });
  }

// LINE DRAW ANIMATION, DOES NOT FIT IN DESIGN

  // export function linedraw() {
  //   anime.timeline({
  //     loop: false
  //   }).add({
  //       targets: ['#name-svg path', '.cls-1', '.cls-2'],
  //       strokeDashoffset: [anime.setDashoffset, 0],
  //       easing: 'easeInOutSine',
  //       duration: 12000,
  //       loop: false
  //     })
  //   .add({
  //     targets: '#name-svg path',
  //     fill: '#1E1E1E',
  //     easing: 'easeOutSine',
  //     duration: 500,
  //     offset: 0
  //   });
  // }
