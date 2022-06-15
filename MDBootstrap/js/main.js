$(document).ready(function () {
  new WOW().init();
});
$(function () {
  $(".add_cart").click(function () {
    $(".successfully-saved").css("display", "block").delay(500).fadeOut(100);
  });
});
// !
$(document).ready(function () {
  new WOW().init();
});
$(function () {
  $(".card_removed").click(function () {
    $(".successfully-removed").css("display", "block").delay(500).fadeOut(100);
  });
});
// ! search uchun qidiruv tizimi.
$(function () {
  var availableTags = ["macbook pro", "macbook air"];
  var NoResultsLabel = "No Results";

  $("#tags").autocomplete({
    source: function (request, response) {
      var results = $.ui.autocomplete.filter(availableTags, request.term);

      if (!results.length) {
        results = [NoResultsLabel];
      }

      response(results);
    },
    select: function (event, ui) {
      if (ui.item.label === NoResultsLabel) {
        event.preventDefault();
      }
    },
    focus: function (event, ui) {
      if (ui.item.label === NoResultsLabel) {
        event.preventDefault();
      }
    },
  });
});

// -1+ uchun
$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
