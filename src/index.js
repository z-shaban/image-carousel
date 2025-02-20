import './styles.css';

import './styles.css';

const pictureFrame = document.querySelector('.container');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let index = 0;
const totalPictures = document.querySelectorAll('.container img').length;
const pictureSize = 300;
let slideInterval;

// Event Listeners
prev.addEventListener('click', () => {
  previousSlide();
  resetTimer();
});

next.addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

dots.forEach((dot) => {
  dot.addEventListener('click', (event) => {
    index = parseInt(event.target.dataset.index);
    updateSlide();
    resetTimer();
  });
});

// Function to update the slide position
function updateSlide() {
  pictureFrame.style.transform = `translateX(-${index * pictureSize}px)`;
  updateDots();
}

// Function to move to the next slide
function nextSlide() {
  index = (index + 1) % totalPictures;
  updateSlide();
}

// Function to move to the previous slide
function previousSlide() {
  index = (index - 1 + totalPictures) % totalPictures;
  updateSlide();
}

// Function to update active dot
function updateDots() {
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Auto-slide function (Runs every 5 seconds)
function startAutoSlide() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}

// Function to reset the timer when the user interacts
function resetTimer() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// Start the auto-slide when the page loads
startAutoSlide();
