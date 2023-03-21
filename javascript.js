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
  var reveals1 = document.querySelectorAll(".reveal1");
  var reveals2 = document.querySelectorAll(".reveal2");
  var reveals3 = document.querySelectorAll(".reveal3");
  var reveals4 = document.querySelectorAll(".reveal4");
  var revealsLeft = document.querySelectorAll(".revealLeft");
  var revealsRight = document.querySelectorAll(".revealRight");
  var revealsUp = document.querySelectorAll(".revealUp");
  var revealsRight2 = document.querySelectorAll(".revealRight2");
  var revealsUp3 = document.querySelectorAll(".revealUp3");

  for (var i = 0; i < reveals2.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop2 = reveals2[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop2 < windowHeight - elementVisible) {
      revealsRight2[i].classList.add("active");
    } else {
      revealsRight2[i].classList.remove("active");
    }
  }
  for (var i = 0; i < reveals3.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop3 = reveals3[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop3 < windowHeight - elementVisible) {
      revealsUp3[i].classList.add("active");
    } else {
      revealsUp3[i].classList.remove("active");
    }
  }
  for (var i = 0; i < reveals1.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop1 = reveals1[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop1 < windowHeight - elementVisible) {
      revealsLeft[i].classList.add("active");
      revealsRight[i].classList.add("active");
      revealsUp[i].classList.add("active");
    } else {
      revealsLeft[i].classList.remove("active");
      revealsRight[i].classList.remove("active");
      revealsUp[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

//adding default demo classes
nav.classList.add("nav--offcanvas-1");
pageContent.classList.add("page__content--offcanvas-1");
