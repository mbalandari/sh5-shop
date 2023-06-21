$('.show-filters').on('click', function () {
    if ($('.filters-list').is(':visible')) {
        $('.filters-list').slideUp()
        $('.show-filters').text('Show filters')
    }
    else {
        $('.filters-list').slideDown()
        $('.show-filters').text('Hide filters')
    }
})