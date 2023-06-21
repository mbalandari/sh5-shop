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

$('.filters-list a').on('click', function () {
    var filter = $(this).attr('data-filter')

    $('.product').hide()
    $(filter).show()

    return false
})