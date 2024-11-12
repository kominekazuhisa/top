breakPoint = 959;

/* openingKV
--------------------------------------------------*/
function openingKV(){

/* main-visual */
var mainvisual = new TimelineMax();
  mainvisual.call(function() {
	  $('.l-main__visual.js-visual__anime').addClass("active");
   }, 
null, null, .1);

}



/* scrollAnker
--------------------------------------------------*/
function scrollAnker(){
  $('a[href^="#"]').on('click', function() {
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 100;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });
}


/* spansplit
--------------------------------------------------*/
function spansplit(){
    var setElm = $('.js-split')
    setElm.children().addBack().contents().each(function(){
        var elmThis = $(this);
        if (this.nodeType == 3) {
            var $this = $(this);
            $this.replaceWith($this.text().replace(/(\S)/g, '<span>$&</span>'));
        }
    });
}

/* scrollanime
--------------------------------------------------*/
function scrollanime(){

   $(window).scroll(function (){
	 
	 $('.js-scroll__anime, .js-scroll__split').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('active');
            }
        });
		
		$('.js-scroll__scale').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 30){
	
                $(this).addClass('scale-scroll-in');
            }
        });
    
		
   });
 $(window).scroll();

}


/* int
--------------------------------------------------*/
function int(){
$(window).on('load', function(){
  var mobileFlag = false;
  var wWidth = $(window).width();
  if(wWidth < breakPoint){
    mobileFlag = true;
  }else{
    mobileFlag = false;  
  }
  var timer = false;
  $(window).resize(function() {
      if (timer !== false) {
          clearTimeout(timer);
      }
      timer = setTimeout(function() {
        var wWidth = $(window).width();
        if(wWidth > breakPoint && mobileFlag){
          mobileFlag = false;
        }
		else if(wWidth < breakPoint && !mobileFlag){
          mobileFlag = true;
        }
      }, 200);
  });//resize
});
}




/* function
--------------------------------------------------*/
$(function(){
  openingKV();
	scrollAnker();
	spansplit();
	scrollanime();
	int();
});
