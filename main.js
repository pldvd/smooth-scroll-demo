const contactButton = document.querySelector('li.contact');
const technologyButton = document.querySelector('li.technology');
const productsButton = document.querySelector('li.products');
const aboutButton = document.querySelector('li.about');

function jumpToNext() {
  window.scrollBy({
    top: 561,
    left: 0,
    behavior: 'smooth'
  });
}

document.querySelector('main').addEventListener('wheel', (e) => {
  console.log(e.deltaY);
  if (e.deltaY > 0) {
    jumpToNext();
  } else {
    jumpToPrevious();
  }
})

function jumpToPrevious() {
  window.scrollBy({
    top: -561,
    left: 0,
    behavior: 'smooth'
  });
}

aboutButton.addEventListener('click', () => {
  const aboutPage = document.getElementById('about');
  aboutPage.scrollIntoView({
    behavior: 'smooth'
  })
})

contactButton.addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth'
  })

})

technologyButton.addEventListener('click', () => {
  document.getElementById('technology').scrollIntoView({
    behavior: 'smooth'
  })
})

productsButton.addEventListener('click', () => {
  document.getElementById('products').scrollIntoView({
    behavior: 'smooth'
  })
})
