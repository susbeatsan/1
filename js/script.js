$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$('#open-button').click(function () {
    if(!$('#open-menu').hasClass('menu__box')) // если не было открыто меню, запретить скролл
    {
        disableScroll.on();
    } else {
        disableScroll.off();
    }
    $topSide.toggleClass('open-menu'); // открыть меню

    $('#open-button').toggleClass('open-button-close');
});

