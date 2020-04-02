//swiper
//index swiperone
var mySwiper = new Swiper('.swiper-indexone', {
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
})
//migrantoryBird swipertwo
var birdSwiper = new Swiper('.migrantory-swiper.swiper-container', {
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
	pagination: '.swiper-pagination',
	//autoplay: 3000,
	loop: true,
	slidesPerView: 3,
	centeredSlides: true,
	uniqueNavElements: false,
	speed: 1000
})
//migrantoryA 
//获取li						
var liList = $('.migrantTab li');
//触发遮罩层
$('.secondnav').on('click', 'li', function() {
	console.log($(this).index())
	$(this).addClass('li-hover').siblings().removeClass('li-hover')
	var currentIndex = $(this).index();
	liList.eq(currentIndex).show().siblings().hide();

})


//homevist
var homeList = $('.theright li');
		
		var homeSwiper = new Swiper('.swiper-container.homevisitSwiper', {
			
			//autoplay:3000,
			direction: 'vertical',
			
			speed:1000,
			onSlideChangeEnd: function(swiper) {
				console.log(swiper.activeIndex);
				homeList.eq(swiper.activeIndex).addClass('li-hover').siblings().removeClass('li-hover')
			}

		})

		//触发遮罩层包括三角
		$('.theright').on('click', 'li', function() {
			console.log($(this).index())
			$(this).addClass('li-hover').siblings().removeClass('li-hover')
			var currentIndex = $(this).index();
			homeSwiper.slideTo(currentIndex, 1000, false)
		})
$(function() {
	//headComponents  headhover
	var aClick = sessionStorage.getItem('aClick');
	if(aClick) {
		$('.head-span').eq(aClick).addClass('head-active');
	}
	$('.head-nav').on('click', '.head-span', function() {
		console.log($(this).data('id'));
		sessionStorage.setItem('aClick', $(this).data('id'))
		
	})

})
