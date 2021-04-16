import "../resources/sass/main";

(function ($) {
  $(document).ready(function () {
    // Sizes clicked, class of "active-button" added, cart becomes available
    $(".sizes label").on("click", function (event) {
      // toggle li active
      const container = $(this).closest(".sizes");

      if ($(this).hasClass("button-active")) {
        $(this).removeClass("button-active");
      } else {
        container.find("label").removeClass("button-active");
        $(this).addClass("button-active");
      }

      const addToCartBtn = container.find(".cart");

      if (container.find("label.button-active").length) {
        addToCartBtn.addClass("button-active");
        addToCartBtn.attr("disabled", false);
      } else {
        addToCartBtn.attr("disabled", true);
        addToCartBtn.removeClass("button-active");
      }
    });

    // Add to Cart clicked, shopping bag toggles to "filled"
    $("main").on("click", ".cart", function () {
      if ($(".cart").hasClass("button-active")) {
        $(".bag i").removeClass("bi-bag").addClass("bi-bag-check-fill");
        $(".added")
          .removeClass("hidden")
          .delay(2000)
          .queue(function () {
            $(".added").addClass("hidden").dequeue();
          });
      }
    });

    // if (!$(".added").hasClass("hidden")) {
    //   $(".added").delay(100).addClass("hidden");
    // }

    //     var $elm = $("#username").addClass("error");
    // setTimeout(function() {
    //   $elm.removeClass("error");
    // }, 2000);

    $(".name").on("click", function (event) {
      const up = "bi-chevron-compact-up";
      const down = "bi-chevron-compact-down";
      const arrow = $(event.currentTarget).find(".arrow i");
      const desc = $(event.currentTarget).siblings("p.description");

      if ($(arrow).hasClass(down)) {
        $(desc).removeClass("hidden");
        $(arrow).removeClass(down).addClass(up);
      } else if ($(arrow).hasClass(up)) {
        $(desc).addClass("hidden");
        $(arrow).removeClass(up).addClass(down);
      }
    });

    // $( "#foo" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
  });
})(jQuery);
