var addAmount = 0;
$('.form-check-input').on("click", function () {
    var radioClick = $(this).parent().find('label').text();

    $(".productName").append($("<li class='list-group-item'></li>").text(radioClick));

});

$('[value=Submit]').on("click", function () {
    var submitPrice = parseFloat($('#price').val()) || 0;
    addAmount = parseFloat(addAmount + submitPrice);

    $(".priceAmount").append($("<li class='list-group-item'></li>").text(submitPrice));

});
$('[value=Total]').on("click", function () {
    $(".productName").append($("<li class='list-group-item'></li>").text('Total'));
    $(".priceAmount").append($("<li class='list-group-item'></li>").text(addAmount));

});

