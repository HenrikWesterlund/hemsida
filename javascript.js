/* hamburgar meny: */

// hide nav open btn when the nav is open, adding/removing open classes to nav and content
var navOpenBtn = document.querySelector(".nav-open-btn");
var navCloseBtn = document.querySelector(".nav__close");
var nav = document.querySelector(".nav");
var pageContent = document.querySelector(".page__content");
var navList = document.querySelector(".nav__list");
var page = document.querySelector(".page");
// open nav
navOpenBtn.addEventListener("click", function () {
  navOpenBtn.classList.add("js-hidden");
  nav.classList.add("js-opened");
  pageContent.classList.add("js-opened");
});
// close nav
navCloseBtn.addEventListener("click", function () {
  navOpenBtn.classList.remove("js-hidden");
  nav.classList.remove("js-opened");
  pageContent.classList.remove("js-opened");
});
// close navigation if click outside it
page.addEventListener("click", function (e) {
  var evTarget = e.target;
  if (
    //evTarget !== nav &&
    nav.classList.contains("js-opened") &&
    evTarget !== navOpenBtn &&
    evTarget.parentNode !== navOpenBtn
  ) {
    console.log(navOpenBtn.firstChild);
    navOpenBtn.classList.remove("js-hidden");
    nav.classList.remove("js-opened");
    pageContent.classList.remove("js-opened");
  }
});

//hide nav open btn when the nav is open, adding/removing open classes to nav and content
var navOpenBtn = document.querySelector(".nav-open-btn");
var navCloseBtn = document.querySelector(".nav__close");
var nav = document.querySelector(".nav");
var pageContent = document.querySelector(".page__content");
var navList = document.querySelector(".nav__list");
var page = document.querySelector(".page");

function reveal() {
  var revealsLeft = document.querySelectorAll(".revealLeft");
  var revealsRight = document.querySelectorAll(".revealRight");
  var revealsUp = document.querySelectorAll(".revealUp");

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

//adding default demo classes
nav.classList.add("nav--offcanvas-1");
pageContent.classList.add("page__content--offcanvas-1");
