$(function () {
  

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="24px" viewBox="0 0 7 7" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 2.183594 3.265625 L 4.042969 1.40625 C 4.171875 1.28125 4.378906 1.28125 4.507812 1.40625 L 4.816406 1.71875 C 4.945312 1.84375 4.945312 2.054688 4.816406 2.179688 L 3.5 3.5 L 4.816406 4.816406 C 4.945312 4.945312 4.945312 5.15625 4.816406 5.28125 L 4.507812 5.59375 C 4.378906 5.71875 4.171875 5.71875 4.042969 5.59375 L 2.183594 3.734375 C 2.054688 3.605469 2.054688 3.394531 2.183594 3.265625 Z M 2.183594 3.265625 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="24px" viewBox="0 0 7 7" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 4.816406 3.734375 L 2.957031 5.59375 C 2.828125 5.71875 2.621094 5.71875 2.492188 5.59375 L 2.183594 5.28125 C 2.054688 5.15625 2.054688 4.945312 2.183594 4.820312 L 3.503906 3.5 L 2.183594 2.183594 C 2.054688 2.054688 2.054688 1.847656 2.183594 1.71875 L 2.492188 1.40625 C 2.621094 1.28125 2.828125 1.28125 2.957031 1.40625 L 4.816406 3.265625 C 4.945312 3.394531 4.945312 3.605469 4.816406 3.734375 Z M 4.816406 3.734375 "/></g></svg></button>',
    infinite: false,
  })

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault;
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });


  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });
  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  });
  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });

  $('.select-style, .product-one__num').styler()

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });


  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"> <g id="surface1"> <path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 11.914062 4.695312 L 16.402344 5.359375 C 16.773438 5.414062 17.085938 5.675781 17.207031 6.035156 C 17.324219 6.398438 17.226562 6.789062 16.960938 7.058594 L 13.703125 10.253906 L 14.472656 14.835938 C 14.535156 15.210938 14.382812 15.589844 14.070312 15.8125 C 13.757812 16.035156 13.351562 16.0625 13.015625 15.882812 L 9.003906 13.742188 L 4.992188 15.882812 C 4.65625 16.0625 4.246094 16.035156 3.9375 15.8125 C 3.628906 15.589844 3.472656 15.210938 3.539062 14.835938 L 4.304688 10.253906 L 1.050781 7.058594 C 0.78125 6.789062 0.683594 6.398438 0.804688 6.035156 C 0.921875 5.675781 1.230469 5.414062 1.605469 5.359375 L 6.09375 4.695312 L 8.105469 0.5625 C 8.273438 0.21875 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.21875 9.902344 0.5625 Z M 11.914062 4.695312 " /> </g> </svg>'
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  };

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);
});