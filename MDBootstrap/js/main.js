$(document).ready(function () {
  new WOW().init();
});
$(function () {
  $("#add_cart").click(function () {
    $(".successfully-saved").css("display", "block").delay(3000).fadeOut(500);
  });
});
$(function () {
  $("#add_cart2").click(function () {
    $(".successfully-saved").css("display", "block").delay(3000).fadeOut(500);
  });
});
$(function () {
  $("#add_cart3").click(function () {
    $(".successfully-saved").css("display", "block").delay(3000).fadeOut(500);
  });
});
$(function () {
  $("#add_cart4").click(function () {
    $(".successfully-saved").css("display", "block").delay(3000).fadeOut(500);
  });
});

// ! search uchun qidiruv tizimi.
$(function () {
  var availableTags = ["Parrot", "Piagon", "Dove", "Swan", "macbook air"];
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
