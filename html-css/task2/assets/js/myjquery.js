$(document).ready(function () {
  // Hide all <p> elements initially
  $("p").hide();

  // Click and Hover event for .wrap
  $(".wrap").on("click", function () {
    $(".wrap-content").show();
  });

  $(".wrap").hover(
    function () {
      $(this).css("background-color", "green");
    },
    function () {
      $(this).css("background-color", "");
    }
  );
  $(".wrap-toggle").on("click", function () {
    $(".wrap-content-toggle").toggle(1000);
  });

  $(".wrap-toggle").hover(
    function () {
      $(this).css("background-color", "green");
    },
    function () {
      $(this).css("background-color", "");
    }
  );
});
