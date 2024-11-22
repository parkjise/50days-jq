$(function () {
  // JavaScript의 DOMContentLoaded
  $(window).on("scroll", checkBoxes);
  checkBoxes();
  function checkBoxes() {
    const triggerBottom = ($(window).height() / 5) * 4;

    $(".box").each(function () {
      const boxTop = $(this).offset().top - $(window).scrollTop();
      if (boxTop < triggerBottom) {
        $(this).addClass("show");
      } else {
        $(this).removeClass("show");
      }
    });
  }
});

/*
checkBoxes 
함수는 화면 내 요소의 위치를 계산하고 클래스를 추가/제거합니다.


페이지 로드 직후에도 한 번 checkBoxes()를 호출하여, 
스크롤하지 않아도 화면에 있는 요소가 조건을 충족하면 
show 클래스를 추가합니다.

$(window).height(): 브라우저 창의 현재 높이를 가져옵니다.
계산식:
창 높이의 80% 지점(뷰포트의 하단에서 조금 위)을 계산.
예: 브라우저 창 높이가 1000px이면 triggerBottom은 800px입니다.
역할:
화면의 80% 지점을 기준으로 요소가 조건을 충족했는지 판단합니다.


$(".box").each():
.box 클래스를 가진 모든 요소를 순회하며, 각 요소에 대해 작업을 수행.

$(this).offset().top:
현재 순회 중인 요소의 상단 위치를 문서 기준으로 가져옵니다.

$(window).scrollTop():
현재 스크롤 위치를 가져옵니다.

boxTop:
요소의 **화면 내 상대적 위치(뷰포트 기준)**를 계산.
예: 요소가 스크롤 상단 기준으로 500px 떨어져 있으면, boxTop = 500.


if (boxTop < triggerBottom):
요소의 상단이 triggerBottom보다 위쪽에 위치하면(boxTop < triggerBottom), 
요소가 화면에 나타났다고 간주. 이 경우 show 클래스를 추가.

*/
