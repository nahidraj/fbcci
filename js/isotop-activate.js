$(document).ready(function () {
  // init Isotope
  let $grid = $('.popular-dishes-container').isotope({
    // options
  });
  // filter items on button click
  $('.dishes-menu').on('click', 'button', function () {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  $(".dishes-menu button").on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  })
});