$("#clickMenu").on("click", function () {
  $(this).toggleClass("menuNavbarClick");
});

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

$(document).ready(function () {
  function animateNumber(element, start, end, duration, suffix = "") {
    let current = start;
    const increment = end / (duration / 50);

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

  const elements = $(".colorOrangeAndNumber");
  if (elements.length === 3) {
    setTimeout(function () {
      animateNumber($(elements[0]), 0, 98, 22000, "%");
    }, 500);

    setTimeout(function () {
      animateNumber($(elements[1]), 0, 90, 22000, "+");
    }, 500);

    setTimeout(function () {
      animateNumber($(elements[2]), 0, 3, 22000, "+");
    }, 500);
  }
});
