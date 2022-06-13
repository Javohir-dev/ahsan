$(document).ready(function () {
  new WOW().init();
});
$(function () {
  $(".add_cart").click(function () {
    $(".successfully-saved").css("display", "block").delay(3000).fadeOut(500);
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
// ! gallary almashish js
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
opacity = 0.6;
imgs[0].style.opacity = opacity;
imgs.forEach((img) => img.addEventListener("click", imgClick));
function imgClick(e) {
  imgs.forEach((img) => (img.style.opacity = 1));
  current.src = e.target.src;
  current.classList.add("fade-in");
  setTimeout(() => current.classList.remove("fade-in"), 500);
  e.target.style.opacity = opacity;
};
