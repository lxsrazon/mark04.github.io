const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const slideIndexes = {
  blue: 0,
  alx: 0
};

function showSlide(projectName) {
  const slides = document.querySelectorAll(`.${projectName}-slide`);

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === slideIndexes[projectName]);
  });
}

function changeSlide(projectName, direction) {
  const slides = document.querySelectorAll(`.${projectName}-slide`);

  slideIndexes[projectName] += direction;

  if (slideIndexes[projectName] >= slides.length) {
    slideIndexes[projectName] = 0;
  }

  if (slideIndexes[projectName] < 0) {
    slideIndexes[projectName] = slides.length - 1;
  }

  showSlide(projectName);
}

setInterval(() => {
  changeSlide("blue", 1);
  changeSlide("alx", 1);
}, 3000);

function openFullscreen(img) {
  const viewer = document.getElementById("fullscreenViewer");
  const fullscreenImg = document.getElementById("fullscreenImg");

  fullscreenImg.src = img.src;
  viewer.classList.add("active");
}

function closeFullscreen() {
  document.getElementById("fullscreenViewer").classList.remove("active");
}
