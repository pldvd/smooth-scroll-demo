const contactButton = document.querySelector('li.contact');
const technologyButton = document.querySelector('li.technology');
const productsButton = document.querySelector('li.products');
const aboutButton = document.querySelector('li.about');
let currentScrollY = 0;


function jumpToPage(pageId) {
  document.getElementById(pageId).scrollIntoView({
    behavior: 'smooth'
  })
}

function jumpToNext() {
  let pageId = '';

  if (0 <= currentScrollY && currentScrollY < window.innerHeight) {
    pageId = 'products';
  } else if (window.innerHeight <= currentScrollY && currentScrollY < (2 * window.innerHeight)) {
    pageId = 'technology';
  } else if ((2 * window.innerHeight) <= currentScrollY) {
    pageId = 'contact';
  }

  jumpToPage(pageId);
}

function jumpToPrevious() {
  let pageId = '';

  if (0 <= currentScrollY && currentScrollY < window.innerHeight) {
    pageId = 'about';
  } else if (window.innerHeight <= currentScrollY && currentScrollY < (2 * window.innerHeight)) {
    pageId = 'products';
  } else if ((2 * window.innerHeight) <= currentScrollY) {
    pageId = 'technology';
  }

  jumpToPage(pageId);
}

document.addEventListener('scroll', () => {
  currentScrollY = window.scrollY;
});

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
