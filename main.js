$('.show-filters').on('click', function () {
    if ($('.filters-list').is(':visible')) {
        $('.filters-list').slideUp()
        $('.show-filters').text('Show filters')
    }
    else {
        $('.filters-list').slideDown()
        $('.show-filters').text('Hide filters')
    }

    return false
})

$('.filters-list a').on('click', function () {
    var filter = $(this).attr('data-filter')

    $('.product').hide()
    $(filter).show()

    $('.filters-list a').removeClass('active')
    $(this).addClass('active')

    return false
})