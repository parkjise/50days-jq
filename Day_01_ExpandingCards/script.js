const panels = document.querySelectorAll('.panel');

panels.forEach((items) => {
  items.addEventListener('click', () => {
    removeActiveClasses();
    items.classList.add('active')
  })
})

function removeActiveClasses(){
  panels.forEach(items => {
    items.classList.remove('active')
  })
}