var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		//changeHeaderOn = 300;
		changeHeaderOn = 50; // edit

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			$('.navbar-brand').css('font-size', '18px').css('transition', 'all 0.2s ease-in-out').css('padding-top', '10px');
			$('.navbar-default').css('box-shadow', '0 2px 4px #f4f4f4').css('border-bottom', '#f4f4f4');
			$('#logo').css('max-height', '30px').css('transition', 'all 0.2s ease-in-out');
		}
		else {
			classie.remove( header, 'navbar-shrink' );
			$('.navbar-brand').css('font-size', '26px').css('transition', 'all 0.2s ease-in-out').css('padding-top', '3px');
			$('.navbar-default').css('box-shadow', '').css('border-bottom', '');
			$('#logo').css('max-height', '43px').css('transition', 'all 0.2s ease-in-out');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();

$(".nav .active").mouseover(function(){
	$(".nav .active").addClass("open");
});
$(".nav .active").mouseout(function(){
	$(".nav .active").removeClass("open");
});

var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)--动画元素css类（默认wow）
    animateClass: 'animated', // animation css class (default is animated)--动画css类（默认animated）
    offset:       0,          // distance to the element when triggering the animation (default is 0)--触发动画效果时元素顶部到浏览器底部的距离（默认0）
    mobile:       true,       // trigger animations on mobile devices (default is true)--是否允许在移动设备上触发动画效果（默认允许）
    live:         true        // act on asynchronously loaded content (default is true)--是否允许对异步加载内容起作用（默认允许）
  }
);
wow.init();