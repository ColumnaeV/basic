//Loading//
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";

    //Calculations//
    var height100 = (($(window).outerHeight()/$(window).outerWidth())*100 + "vw");
    
    if ($(window).width() < $(window).height()) {
        $('.ds-split').addClass('desktop-mode');
        $('.content-page').addClass('desktop-mode');
    }
    else {
        $('.ds-split').addClass('desktop-mode');
        $('.content-page').addClass('desktop-mode');
        $('#particles-js').css({ height: height100 });
    }
    
    //Calc Applications//
    $('#cover-page').css({ height: height100 });
    $('#cover-container').css({ height: height100 });
    $('.desktop-mode').css({ height: height100 });
    $('#body-container').css({ height: height100 });
    $('body').css({ height: height100 });

  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('body-container').style.opacity="1";
      },1000);
  }
}

$(document).ready(function (){
    //Smooth Scrolling//
    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1500,
        stepSize: 60,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 1,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 100,
        touchpadSupport: true,
        fixedBackground: true
    });
    
});