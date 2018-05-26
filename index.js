let horizontalSlide = 0;
let verticalSlide = 0;
let lastPanTimeStamp = 0;

const projects = [
  'fortune',
  'kana-prac',
  'ali-gle',
  'pafiume-cast',
  'pafiume-colors',
  'browser-gimei',
];

const getScreenWidth = () => window.innerWidth;

const slide = (horizontalSlide, verticalSlide) => {
  $('.projects-container').css({
    // transform: `translateX(-${horizontalSlide * 100}vw)`,
    transform: `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
    '-webkit-transform': `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
    '-moz-transform': `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
    '-o-transform': `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
    '-ms-transform': `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
  });
}

$(document).ready(function() {
  $('#slide-left').click(function() {
    if (horizontalSlide) {
      horizontalSlide += 1;
      verticalSlide = 0;
      slide(horizontalSlide, verticalSlide);
      // $('.projects-container').css({
      //   // transform: `translateX(-${horizontalSlide * 100}vw)`,
      //   transform: `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
      //   '-webkit-transform': `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
      //   '-moz-transform': `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
      //   '-o-transform': `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
      //   '-ms-transform': `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
      // });
      console.group('left');
      console.log('horizontal placement is:', horizontalSlide);
      console.log('vertical placement is:', verticalSlide);
      console.groupEnd();
      $('.fa-arrow-right.m').removeClass('m').addClass('c')
    }
    if (!horizontalSlide) {
      $('.fa-arrow-left.c').removeClass('c').addClass('m')
    }
  });
  
  $('#slide-right').click(function() {
    if (horizontalSlide * -1 < projects.length - 1) {
      horizontalSlide -= 1;
      verticalSlide = 0;
      slide(horizontalSlide, verticalSlide);
      // $('.projects-container').css({
      //   // transform: `translateX(-${horizontalSlide * 100}vw)`,
      //   transform: `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
      // });
      $('.fa-arrow-left.m').removeClass('m').addClass('c')
      console.group('right');
      console.log('horizontal placement is:', horizontalSlide);
      console.log('vertical placement is:', verticalSlide);
      console.groupEnd();
    };
    if(horizontalSlide * -1 === projects.length - 1) {
      $('.fa-arrow-right.c').removeClass('c').addClass('m');
    }
  });

  // TODO: update style so this is worth having //
  // $('#slide-info').click(function() {
  //   if (verticalSlide) verticalSlide += 1;
  //   else verticalSlide -= 1;
  //   slide(horizontalSlide, verticalSlide);

  //   $('.projects-container').css({
  //     transform: `translate(${horizontalSlide * 100}vw, ${verticalSlide * 100}vh)`,
  //   });
  //   console.group('info');
  //   console.log('horizontal placement is:', horizontalSlide);
  //   console.log('vertical placement is:', verticalSlide);
  //   console.groupEnd();
  // });

  $(window).on('keyup', (event) => {
    console.log(event.key, event.keyCode);
    if (event.keyCode === 37) $('#slide-left').click();
    else if (event.keyCode === 38) $('#slide-info').click();
    else if (event.keyCode === 39) $('#slide-right').click();
    else if (event.keyCode === 40) $('#slide-info').click();
  });

  $(window).hammer().bind('panleft', (event) => {
    if (event.timeStamp - lastPanTimeStamp > 500) {
      $('#slide-right').click();
      lastPanTimeStamp = event.timeStamp;
    }
  });

  $(window).hammer().bind('panright', (event) => {
    if (event.timeStamp - lastPanTimeStamp > 500) {
      $('#slide-left').click();
      lastPanTimeStamp = event.timeStamp;
    };
  });
});
