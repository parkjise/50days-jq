const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const nameText = document.getElementById('name')
const date = document.getElementById('date')
const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgText = document.querySelectorAll('.animated-bg-text')


setTimeout(getData,2500)

function getData(){
  header.innerHTML = '<img src="https://plus.unsplash.com/premium_photo-1721858125269-12d149971a57?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">'
  title.innerHTML = 'Lorem, ipsum dolor sit'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  profileImg.innerHTML ='<img src="https://plus.unsplash.com/premium_photo-1721858124995-990370873fef?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">'
  nameText.innerHTML = 'Jone Doe'
  date.innerHTML = 'Oct 08, 2020'

  animatedBgs.forEach((item) => {
    item.classList.remove('animated-bg')
  })
  animatedBgText.forEach((item) => {
    item.classList.remove('animated-bg-text')
  })
}