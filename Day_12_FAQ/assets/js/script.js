const btn = document.querySelectorAll('.faq-toggle');
const faq = document.querySelector('.faq');

btn.forEach((items) => {
  items.addEventListener('click', () => {
    items.parentNode.classList.toggle('active')
  })
})

