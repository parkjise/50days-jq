const loveMe = document.querySelector('.loveMe');
const times = document.getElementById('times');

let clickTime = 0;
let timeClicked = 0;
const getTime = new Date().getTime();

loveMe.addEventListener('click',(e) => {
  if(clickTime === 0){
    clickTime = getTime
  }else{
    if((getTime - clickTime) < 800){
      createHeart(e)
      clickTime = 0
    }else {
      clickTime = new Date().getTime()
    }
  }
})

const createHeart = (e) => {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const x = e.clientX
  const y = e.clientY

  const leftOffset = e.target.offsetLeft
  const toptOffset = e.target.offsetTop

  const xInside = x - leftOffset
  const yInside = y - toptOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  loveMe.appendChild(heart)

  times.innerHTML = ++timeClicked

  setTimeout(() => heart.remove(),1000)

}