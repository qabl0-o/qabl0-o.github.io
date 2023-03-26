var vaseSwiper = new Swiper(".vaseSwiper", {
	navigation: {
		nextEl: ".vase .swiper-next-button",
		prevEl: ".vase .swiper-prev-button"
	},
	effect: "fade",
	loop: "infinite",
	pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        }
});

swiper.on('slideChange', function(sld) {
	document.body.setAttribute('data-sld', sld.realIndex);
})