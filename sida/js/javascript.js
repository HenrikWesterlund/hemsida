/* hamburgar meny: */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

function reveal() {
  var revealsLeft = document.querySelectorAll(".reveal-left");
  var revealsRight = document.querySelectorAll(".reveal-right");
  var revealsUp = document.querySelectorAll(".reveal-up");

  for (var i = 0; i < revealsLeft.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop1 = revealsLeft[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop1 < windowHeight - elementVisible) {
      revealsLeft[i].classList.add("active");
    } else {
      revealsLeft[i].classList.remove("active");
    }
  }
  for (var i = 0; i < revealsRight.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop2 = revealsRight[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop2 < windowHeight - elementVisible) {
      revealsRight[i].classList.add("active");
    } else {
      revealsRight[i].classList.remove("active");
    }
  }
  for (var i = 0; i < revealsUp.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop3 = revealsUp[i].getBoundingClientRect().top;
    var elementVisible = -100;

    if (elementTop3 < windowHeight - elementVisible) {
      revealsUp[i].classList.add("active");
    } else {
      revealsUp[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
