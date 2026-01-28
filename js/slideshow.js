const imagePaths = [
  "images/blank_1.png",
  "images/blank_2.png",
  "images/blank_3.png"
];

const slideshow = document.querySelector(".slideshow");

imagePaths.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  if (i === 0) img.classList.add("active");
  slideshow.appendChild(img);
});

const imgs = document.querySelectorAll(".slideshow img");
let index = 0;

setInterval(() => {
  imgs[index].classList.remove("active");
  index = (index + 1) % imgs.length;
  imgs[index].classList.add("active");
}, 1500);