import anime from 'animejs';
import { goToAnim } from './router/index';

  export function intro() {
    // var textWrapper = document.querySelector('.welcome');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/w, "<span class='letter'>$&</span>");
    var introAnimation = anime.timeline({
      loop: true
    }).add({
      targets: '.welcome span',
      paddingLeft: 20,
      scale: [{value: .6, easing: 'easeInOutSine', duration: 500}, 
      {value: 1, easing: 'easeOutSine', duration: 500}],
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
        left: ['20vw', 0],
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
      direction: 'alternate'})
    .add({
      targets: '.line',
      delay: 3000,
      translateX: '-150%',
      easing: "easeInOutSine",
      duration: 2600,
      autoplay: true
    }).add({
      targets: '.line',
      scaleY: 50,
      duration: 1500
    }).add({
      targets: '.gridAnim div',
      easing: 'easeInOutSine',
      delay: anime.stagger(50),
      loop: true,
      autoplay: false
    });

    document.querySelector('.click').addEventListener('click', () => {
      animation.reverse();
    });
  }

  //==============================INFORMATION PAGE============================

  export function transitionRight() {
    var introAnimation = anime.timeline({
      loop: false
    });
    introAnimation.add({
        targets: ['.right img'],
        easing: 'easeInOutSine',
        duration: 6000,
        loop: false
      });
  }

  export function linedraw() {
    var drawingAnimation = anime.timeline({
      loop: false
    });
    drawingAnimation.add({
        targets: ['#name-svg path', '.cls-1', '.cls-2'],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 12000,
        loop: false
      })
    .add({
      targets: '#name-svg path',
      fill: '#1E1E1E',
      easing: 'easeOutSine',
      duration: 500,
      offset: 0
    });
  }
