export const settings = {
dots: true,
infinite: true,
speed: 600,
slidesToShow: 3,
slidesToScroll: 2,
arrows: true,
autoplay: true,
autoplaySpeed: 5000,
responsive: [
    {
      breakpoint: 1570,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 848,
      settings: {
        arrows: false,
        slidesToShow: 2,       
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};