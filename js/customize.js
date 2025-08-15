// 自行加入的JS請寫在這裡
$(function () {
  // 首頁輪播
  if ($('.mpSlider').length > 0) {
    $('.mpSlider').slick({
      mobileFirst: true,
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      fade: true,
      lazyLoaded: true,
      lazyLoad: 'ondemand',
      ease: 'ease',
      pauseOnHover: false,
      pauseOnFocus: false,
      customPaging: function (slider, i) {
        var title = $(slider.$slides[i]).find('img').attr('alt').trim();
        return $('<button type="button" aria-label="' + title + '"/>').text(title);
      },
    });
    let checkState = true;
    $('.mpSliderBox .slickControlBox button').on('click', function () {
      if (checkState) {
        checkState = false;
        $(this).addClass('stop');
        $('.mpSlider').slick('slickPause');
      } else {
        checkState = true;
        $(this).removeClass('stop');
        $('.mpSlider').slick('slickPlay');
      }
    });
  }
  // 廣告輪播
  if ($('.adSlider').length > 0) {
    $('.adSlider').slick({
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      // autoplay: true,
      arrow: true,
      lazyLoaded: true,
      lazyLoad: 'ondemand',
      ease: 'ease',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    });
  }
  //燈箱slick+lightBox組合
  if ($('.cp_slider').length > 0) {
    $('.cp_slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      pauseOnHover: true,
      pauseOnFocus: true,
      focusOnSelect: true,
      accessibility: true,
      lazyLoad: 'ondemand',
      ease: 'ease',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 545,
          settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  }
  //

  if ($('.cppic_slider').length > 0) {
    $('.cppic_slider').slick({
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      // pauseOnHover: true,
      // pauseOnFocus: true,
      // focusOnSelect: true,
      // accessibility: true,
      // lazyLoad: 'ondemand',
      // ease: 'ease',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 545,
          settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  }
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  if ($('.Slider-for').length > 0) {
    $('.Slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      swipe: false,
      swipeToSlide: false,
      lazyLoad: 'ondemand',
      asNavFor: '.Slider-nav',
      infinite: true,
    });
  }
  if ($('.Slider-nav').length > 0) {
    $('.Slider-nav').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.Slider-for',
      dots: true,
      arrows: true,
      lazyLoad: 'ondemand',
      focusOnSelect: true,
      infinite: true,
    });
  }
  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
  //sticky sidebar
  // if ($('.stickySidebar').length > 0) {
  //   var stickySidebar = new StickySidebar('.stickySidebar', {
  //     containerSelector: '.main',
  //     topSpacing: 93,
  //     bottomSpacing: 0,
  //     minWidth: 768,
  //     resizeSensor: true,
  //   });
  // }
  // header
  $(window).bind('scroll', function () {
    if ($(window).width() > 991) {
      // 只在寬度大於 767px 時作用
      if ($(this).scrollTop() > 60) {
        $('.header').addClass('sticky');
      } else {
        $('.header').removeClass('sticky');
      }
    } else {
      // 如果小於等於 767px，可以確保 header 回到原狀
      $('.header').removeClass('sticky');
    }
  });
  // 首頁資料輪播
  if ($('.materialSlider').length > 0) {
    $('.materialSlider').slick({
      mobileFirst: true,
      dots: false,
      arrows: false,
      infinite: true,
      autoplaySpeed: 6000,
      autoplay: true,
      fade: true,
      lazyLoaded: true,
      lazyLoad: 'ondemand',
      ease: 'ease',
      pauseOnHover: false,
      pauseOnFocus: false,
      customPaging: function (slider, i) {
        var title = $(slider.$slides[i]).find('img').attr('alt').trim();
        return $('<button type="button" aria-label="' + title + '"/>').text(title);
      },
    });
    let checkState = true;
    $('.materialSliderBox .slickControlBox button').on('click', function () {
      if (checkState) {
        checkState = false;
        $(this).addClass('stop');
        $('.materialSlider').slick('slickPause');
      } else {
        checkState = true;
        $(this).removeClass('stop');
        $('.materialSlider').slick('slickPlay');
      }
    });
  }
  // 經營系統化
  $('.systematization_slider').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //立即預約
  // $('.navbtn a, .material_btn a, .dataExpert_btn a, .link_btn a').click(function (e) {
  //   $(' body,html')
  //     .stop(true, true)
  //     .animate({ scrollTop: $('#consultBox').offset().top - 60 }, 200, 'easeOutExpo');
  // });
  // $('.navbtn a, .material_btn a, .dataExpert_btn a, .link_btn a').click(function (e) {
  //   e.preventDefault(); // 避免直接跳轉
  //   var target;

  //   if ($(window).width() <= 991) {
  //     // 991px 以下
  //     target = $('#consultBox .content_right');
  //   } else {
  //     // 992px 以上
  //     target = $('#consultBox');
  //   }

  //   $('html, body')
  //     .stop(true, true)
  //     .animate({ scrollTop: target.offset().top - 60 }, 200, 'easeOutExpo');
  // });
  // $('.navbtn2 a').click(function (e) {
  //   $(' body,html')
  //     .stop(true, true)
  //     .animate({ scrollTop: $('#consultBox .content_right').offset().top - 60 }, 200, 'easeOutExpo');
  // });
  $(function () {
    function scrollToTarget() {
      var ww = $(window).width();
      var offsetTop;

      if (ww <= 991) {
        offsetTop = $('#consultBox .content_right').offset().top;
      } else {
        offsetTop = $('#consultBox').offset().top - 60;
      }

      $('html, body').stop(true, true).animate({ scrollTop: offsetTop }, 200, 'easeOutExpo');
    }

    // 點擊按鈕時
    $('.navbtn a, .material_btn a, .dataExpert_btn a, .link_btn a').click(function (e) {
      e.preventDefault();
      scrollToTarget();
    });

    // 別頁帶 hash 回來時（或直接在網址輸入 #consultBox）
    if (window.location.hash === '#consultBox') {
      setTimeout(scrollToTarget, 100); // 延遲避免 DOM 尚未完全渲染
    }
  });
});

// tab功能
tabFunction({ target: '.target1', modeSwitch: true });
