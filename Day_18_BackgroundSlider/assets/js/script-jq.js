$(function() {
  const $body = $('body');
  const $slides = $('.slide');
  const $leftBtn = $('#left');
  const $rightBtn = $('#right');

  let activesSlide = 0;

  // 오른쪽 버튼 클릭 이벤트
  $rightBtn.on('click', function() {
    activesSlide++;

    if (activesSlide > $slides.length - 1) {
      activesSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
  });

  // 왼쪽 버튼 클릭 이벤트
  $leftBtn.on('click', function() {
    activesSlide--;

    if (activesSlide < 0) {
      activesSlide = $slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
  });

  // 초기 배경 설정
  setBgToBody();

  // 배경 이미지 설정 함수
  function setBgToBody() {
    const bgImage = $($slides[activesSlide]).css('background-image');
    $body.css('background-image', bgImage);
  }

  // 활성 슬라이드 설정 함수
  function setActiveSlide() {
    $slides.removeClass('active'); // 모든 슬라이드에서 'active' 제거
    $($slides[activesSlide]).addClass('active'); // 현재 활성 슬라이드에 'active' 추가
  }
});

// $(function(){

//   const body = $('body')
//   const slides = $('.slide')
//   let activesSlide = 0;

//   $('#right').on('click',function(){
//     activesSlide++
//     if(activesSlide > slides.length -1){
//       activesSlide = 0

//       setBgToBody()
//       setActiveSlide()
//     }
//   })

//   $('#left').on('click',function(){
//     activesSlide--
//     if(activesSlide < 0){
//       activesSlide = slides.length-1
//     }

//     setBgToBody()
//     setActiveSlide()
//   })
//   setBgToBody()

//   function setBgToBody(){
//     const bgImage = $(slides[activesSlide]).css('background-image'); 
//     body.css('background-image',bgImage)
//   }

//   function setActiveSlide(){
//     slides.removeClass('active')
//     $(slides[activesSlide]).addClass('active')
//   }
// })