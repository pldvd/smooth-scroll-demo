const contactButton = document.querySelector('li.contact');
const technologyButton = document.querySelector('li.technology');
const productsButton = document.querySelector('li.products');
const aboutButton = document.querySelector('li.about');
const pageIds = ['about', 'products', 'technology', 'contact'];
let currentPageId = 'about';
let currentScrollY = 0;


function jumpToPage(pageId) {
  document.getElementById(pageId).scrollIntoView({
    behavior: 'smooth'
  })
}

document.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    jumpToNext();
  } else {
    jumpToPrevious();
  }
})

aboutButton.addEventListener('click', () => {
  jumpToPage('about');
})

contactButton.addEventListener('click', () => {
  jumpToPage('contact');
})

technologyButton.addEventListener('click', () => {
  jumpToPage('technology');
})

productsButton.addEventListener('click', () => {
  jumpToPage('products');
})
