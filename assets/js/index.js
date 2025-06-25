function scrollToBottom() {
  const sections = document.querySelectorAll("section");
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top > 0) {
      sections[i].scrollIntoView({
        behavior: "smooth",
      });
      break;
    }
  }
}

function animateNumber(element, start, end, duration, suffix = "") {
  let current = start;
  const increment = (end - start) / (duration / 50);
  function updateNumber() {
    current += increment;
    if (current >= end) {
      element.text(end + suffix);
    } else {
      element.text(Math.ceil(current) + suffix);
      requestAnimationFrame(updateNumber);
    }
  }

  updateNumber();
}

$(document).ready(function () {
  $("#clickMenu").on("click", function () {
    $(this).toggleClass("menuNavbarClick");
  });

  $(".colorOrangeAndNumber").each(function () {
    let element = $(this);
    let targetValue = element.attr("data-target");
    let numericValue = parseInt(targetValue.replace("%", "").replace("+", ""));
    let suffix = targetValue.includes("%")
      ? "%"
      : targetValue.includes("+")
      ? "+"
      : "";
    let currentValue = 0;

    function animateNumber() {
      if (currentValue < numericValue) {
        currentValue++;
        element.text(currentValue + suffix);
        requestAnimationFrame(animateNumber);
      } else {
        element.text(numericValue + suffix);
      }
    }
    animateNumber();
  });

  $(window).on("scroll", function () {
    var scrollPos = $(document).scrollTop();
    if (scrollPos === 0) {
      $("a.nav-link").removeClass("active");
      $('a[href="#home"]').addClass("active");
    } else {
      $("section").each(function () {
        var sectionOffset = $(this).offset().top - 50;
        var sectionHeight = $(this).outerHeight();
        if (
          scrollPos >= sectionOffset &&
          scrollPos < sectionOffset + sectionHeight
        ) {
          var id = $(this).attr("id");
          $("a.nav-link").removeClass("active");
          $('a[href="#' + id + '"]').addClass("active");
        }
      });
    }
  });
});

const scrollToTopArraw = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

$(window).on("scroll", function () {
  const scrollPos = $(window).scrollTop();
  const sectionTwoOffset = $("#about").offset().top;
  scrollPos >= sectionTwoOffset
    ? $(".arrawTop").addClass("show")
    : $("arrawTop").removeClass("show");
});

var lastScrollTop = 0;
var navbar = $(".navbar");
$(window).on("scroll", function () {
  var scrollPos = $(this).scrollTop();
  scrollPos > lastScrollTop
    ? navbar.removeClass("visible").addClass("hidden")
    : navbar.removeClass("hidden").addClass("visible");
  scrollPos >= 100
    ? navbar.addClass("scroll-up")
    : navbar.removeClass("scroll-up");
  lastScrollTop = scrollPos <= 0 ? 0 : scrollPos;
});
