$('.slide').slick({
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1
      }
    },
	  {
		  breakpoint: 481,
		  settings: {
			arrows:false,
			autoplay: true,
			  autoplaySpeed: 3000,
			  slidesToShow: 1
		  }
	  }
  ]
});