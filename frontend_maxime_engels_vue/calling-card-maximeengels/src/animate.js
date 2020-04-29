import anime from 'animejs';

export function translate(element) {
    anime({
      targets: element,
      translateX: 500,
      direction: 'alternate'
    });
  }

  export function linedraw() {
    anime({
        targets: ['#name-svg path', '.cls-1', '.cls-2'],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 6000,
        direction: 'alternate',
        loop: true
      });
  }