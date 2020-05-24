import anime from 'animejs';

  export function intro() {
    // var textWrapper = document.querySelector('.welcome');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/w, "<span class='letter'>$&</span>");
    var introAnimation = anime.timeline({
      loop: true
    });
    introAnimation.add({
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

  export function transitionLeft() {
    var introAnimation = anime.timeline({
      loop: false
    });
    introAnimation.add({
        targets: ['.leftSquare'],
        width: '100%',
        height: '100%',
        left: 0,
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
        loop: false
      }).add({
        targets: ['.intro', '.right', '.under'],
        opacity: 0,
        easing: 'easeInOutSine',
        duration: 500,
        loop: false
      });
  }

  export function transitionRight() {
    var introAnimation = anime.timeline({
      loop: false
    });
    introAnimation.add({
        targets: ['.right img'],
        easing: 'easeInOutSine',
        duration: 6000,
        loop: false
      })
    .add({
    });
  }