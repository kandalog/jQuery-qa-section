jQuery('.qa-box__q').on('click', function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-box__icon').toggleClass('is-open')
});