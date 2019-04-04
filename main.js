const contactButton = document.querySelector('li.contact');
const technologyButton = document.querySelector('li.technology');
const productsButton = document.querySelector('li.products');
const aboutButton = document.querySelector('li.about');

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