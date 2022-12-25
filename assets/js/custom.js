$('.comment-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: '<button class="PrevArrow rounded-slider-btn" style="height: 25px"><i class="icon-backward-comment"></i></button>',
    nextArrow: '<button class="NextArrow rounded-slider-btn" style="height: 25px"><i class="icon-forward-comment1"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
});


$(".main-question").click(function(){
  var qid=$(this).attr("qindex");

  $('.comment-slider').slick('slickGoTo', qid);
  
  $("#myModal").modal("hide");
});