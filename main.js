"use strict";

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const track = document.querySelector(".carousel__track"); //ul
const slides = document.querySelectorAll(".carousel__slide"); //li
const btnLeft = document.querySelector(".carousel__btn--left");
const btnRight = document.querySelector(".carousel__btn--right");

navToggle.addEventListener("click", function () {
  const visibility = primaryNav.getAttribute("data-visible");

  // console.log(visibility); //false is a STRING

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

//TODO
// when you click on any link in the side nav, go to the link and the close the toggle nav ✅
primaryNav.addEventListener("click", () => {
  primaryNav.setAttribute("data-visible", false);
});

//Carousel
const carouselDot = document.querySelectorAll(".carousel__indicator");

let curSlide = 0;
const maxSlide = slides.length;
// console.log(maxSlide);

//by default
const gotoSide = function () {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${90 * i}%`;
  });
};
gotoSide(0);

//go to next slide
const nextSlide = function () {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${90 * (i - curSlide)}%`;
  });
};
//go to previous slide

const prevSlide = function (curSlide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${90 * (i - curSlide)}%`;
  });
};

//carousel dots
const showIndicatorNext = function (curSlide) {
  carouselDot[curSlide - 1]?.classList.remove("current-slide");
  carouselDot[curSlide].classList.toggle("current-slide");
  console.log(carouselDot[curSlide], curSlide);
  if (curSlide === 0) {
    carouselDot[carouselDot.length - 1]?.classList.remove("current-slide");
  }
};
const showIndicatorPrev = function (curSlide) {
  carouselDot[curSlide + 1]?.classList.remove("current-slide");
  carouselDot[curSlide].classList.toggle("current-slide");
  console.log(carouselDot[curSlide], curSlide);
  if (curSlide === 3) {
    carouselDot[0]?.classList.remove("current-slide");
  }
};

//carousel btn click
btnRight.addEventListener("click", function () {
  console.log("clicked");

  if (curSlide === maxSlide - 3) {
    curSlide = 0;
  } else {
    curSlide++;
    console.log(curSlide);
  }
  nextSlide();
  showIndicatorNext(curSlide);
});

btnLeft.addEventListener("click", function () {
  console.log("clicked");
  if (curSlide === 0) {
    curSlide = maxSlide - 3;
  } else {
    curSlide--;
    console.log(curSlide);
  }
  prevSlide(curSlide);
  showIndicatorPrev(curSlide);
});
