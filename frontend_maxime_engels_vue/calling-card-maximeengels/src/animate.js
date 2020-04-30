import anime from 'animejs';

  export function intro() {
    // var textWrapper = document.querySelector('.welcome');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/w, "<span class='letter'>$&</span>");
    var introAnimation = anime.timeline({
      loop: false
    });
    introAnimation.add({
      targets: '.welcome .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i+1)
    }).add({
      targets: '.welcome',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
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