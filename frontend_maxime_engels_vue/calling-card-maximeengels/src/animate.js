import anime from 'animejs';

  export function intro() {
    var introAnimation = anime.timeline({
      loop: false
    });
    introAnimation.add({
      targets: '#welcome-svg path',
      
      easing: 'easeInOutSine',
      duration: 10000,
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
        duration: 10000,
        loop: false
      })
    .add({
      targets: '#name-svg path',
      fill: '#1E1E1E',
      easing: 'easeOutSine',
      duration: 300,
      offset: 0
    });
  }