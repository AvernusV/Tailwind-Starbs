const starbsNav = document.querySelectorAll(".starbs__nav__link");
const starbsContent = document.querySelectorAll(".starbs__item__content");
starbsNav.forEach((starbs) => {
 starbs.addEventListener("click", () => {
  removeActivestarbs();
  starbs.style = "transition:.5s ease";
  starbs.classList.add("active");
  starbs.style = "transition:.5s ease";
  const activeContent = document.querySelector(`#${starbs.id}-content`);
  removeActiveContent();
  activeContent.classList.add("active");
 });
});

function removeActivestarbs() {
 starbsNav.forEach((starbs) => {
  starbs.classList.remove("active");
 });
}

function removeActiveContent() {
 starbsContent.forEach((starbs) => {
  starbs.classList.remove("active");
 });
}

const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const hair = document.querySelector(".buhok");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  hair.classList.toggle("open");
});

const drop = document.querySelectorAll(".dropdown__nav ul.nav li");
drop.forEach((link) => {
 link.addEventListener("click", () => {
  link.nextElementSibling.classList.toggle("open");
  link.querySelector("i").classList.toggle("open");
 });
});