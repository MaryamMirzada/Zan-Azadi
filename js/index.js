const nav = document.querySelector(".navbar");
const brand = document.getElementById("brand");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "#de8b6a";
    brand.style.fontSize = "10px"; // <--- واحد اضافه شد
  } else {
    nav.style.backgroundColor = "transparent";
    brand.style.fontSize = "30px"; // فونت اولیه را هم px مشخص کنید
  }
});

const images = [
  "woman/header/first picture.jpg",
  "woman/header/afghan.jpg",
  "woman/تکنالوژِِی/a.jpg",
];

let current = 0;
const slider = document.getElementById("slider");

setInterval(() => {
  current = (current + 1) % images.length;
  slider.src = images[current];
}, 3000);

const form = document.getElementById("contact");
const para = document.getElementById("para");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Your form has been submitted successfully!");

  form.reset();
});
