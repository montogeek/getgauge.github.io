$(document).ready(function(e){e(window).stellar({responsive:!0,horizontalScrolling:!1}),e("a.scroll-animate").click(function(){return e("html, body").animate({scrollTop:e('[name="'+e.attr(this,"href").substr(1)+'"]').offset().top},500),!1}),(new WOW).init();var t=e(".header-nav"),s=e(".navigation-menu-button");e(s).on("click",function(){t.slideToggle()}),e(".features-filter-selector-wrap").on("click",".features-selector",function(t){t.preventDefault(),e(this).closest(".features-filter-selector-wrap").toggleClass("active")}),e(".features-filter-selector-wrap").on("click",".features-filter-value",function(){var t=e(this).attr("data-value"),s=e(this).text();e(this).closest(".features").removeClass().addClass("features "+t),e(this).closest(".features-filter-selector-wrap").removeClass("active").find(".features-selected-value").text(s)})});