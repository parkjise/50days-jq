const body = document.body
const rightBtn = document.querySelector('#right')
const leftBtn = document.querySelector('#left')
const slides = document.querySelectorAll('.slide')

let idx = 0;

rightBtn.addEventListener('click',function(){
  idx++
  if(idx > slides.length-1){
      idx = 0;
  }
  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click',function(){
  idx--
  if(idx <  0){
    idx =  slides.length-1
  }
  setBgToBody()
  setActiveSlide()
})

setBgToBody()

// 배경 이미지 설정함수
function setBgToBody(){
  body.style.backgroundImage = slides[idx].style.backgroundImage
}

// 활성 슬라이드 설정 함수

function setActiveSlide(){
  slides.forEach(function(item){
    item.classList.remove('active')
  })
  slides[idx].classList.add('active')
}