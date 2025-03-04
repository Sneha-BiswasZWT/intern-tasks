$(document).ready(function () {
  // Hide all <p> elements initially
  $(".banner p").hide();
  //Click and Hover event for .wrap
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
    $(".wrap-content-toggle").toggle("slow");
  });
  $(".wrap-toggle").hover(
    function () {
      $(this).css("background-color", "green");
    },
    function () {
      $(this).css("background-color", "");
    }
  );

  //Accordian script

  $(".accordian p").hide();
  $(".accordian:first p").show();
  $(".accordian h2").click(function () {
    if ($(this).parent(".accordian").hasClass("active")) {
      $(this).parent(".accordian").removeClass("active");
      $(this).parent(".accordian").find("p").slideUp("slow");
    } else {
      $(".accordian p").slideUp("slow");
      $(".accordian").removeClass("active");
      $(this).parent(".accordian").addClass("active");
      $(this).parent(".accordian").find("p").slideDown("slow");
    }
  });
});
