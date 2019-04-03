const contactButton = document.querySelector('li.contact');
const technologyButton = document.querySelector('li.technology');
const productsButton = document.querySelector('li.products');
const aboutButton = document.querySelector('li.about');

aboutButton.addEventListener('click', () => {
  smoothScroll('#about', 700);
})

contactButton.addEventListener('click', () => {
  smoothScroll('#contact', 700);
})

technologyButton.addEventListener('click', () => {
  smoothScroll('#technology', 700);
})

productsButton.addEventListener('click', () => {
  smoothScroll('#products', 700);
})

function smoothScroll(target, duration) {
  const targetDiv = document.querySelector(target);
  const targetDivPosition = targetDiv.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    startTime === null ? startTime = currentTime : startTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetDivPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };

  requestAnimationFrame(animation)
}