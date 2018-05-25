let horizontalSlide = 0;
let verticalSlide = 0;


const getScreenWidth = () => window.innerWidth;

$(document).ready(function() {
  $('#slide-left').click(function() {
    const screenWidth = getScreenWidth();
    horizontalSlide -= 100;
    $('.projects-container').css({
      transform: `translateX(-${horizontalSlide}vw)`,
    });
    console.log('horizontal placement is:', horizontalSlide);
  });

  $('#slide-right').click(function() {
    const screenWidth = getScreenWidth();
    horizontalSlide += 100;
    $('.projects-container').css({
      transform: `translateX(-${horizontalSlide}vw)`,
    });
    console.log('horizontal placement is:', horizontalSlide);
  });

  $('#slide-info').click(function() {
    const screenWidth = getScreenWidth();
    if (verticalSlide) verticalSlide -= 100;
    else verticalSlide += 100;

    $('.projects-container').css({
      transform: `translateX(-${horizontalSlide}vw) translateY(-${verticalSlide}vw)`,
    });
    console.log('vertical placement is:', verticalSlide);
  });

});