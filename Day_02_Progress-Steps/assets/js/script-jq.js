$(function () {
  let currentActive = 1;
  const prev = $("#prev");
  const next = $("#next");
  const circle = $(".circle");
  const progress = $("#progress");

  // 초기화
  update();

  prev.on("click", function () {
    currentActive--;
    if (currentActive < 1) {
      currentActive = 1;
    }
    update();
    /*
      prev 버튼 클릭 시, currentActive를 1 감소시켜 이전 단계로 이동합니다.
      만약 currentActive가 1보다 작아지면, currentActive를 1로 고정합니다. 
      (첫 번째 단계보다 뒤로 이동하지 않도록 제한)
      상태를 업데이트하기 위해 update() 함수를 호출합니다.
    */
  });

  next.on("click", function () {
    currentActive++;
    if (currentActive > circle.length) {
      currentActive = circle.length;
    }
    update();
    /*
      next 버튼 클릭 시, currentActive를 1 증가시켜 다음 단계로 이동합니다.
      만약 currentActive가 circle.length(마지막 단계)보다 커지면, 
      currentActive를 circle.length로 고정합니다. 
      (마지막 단계보다 앞으로 이동하지 않도록 제한)
      상태를 업데이트하기 위해 update() 함수를 호출합니다.
    */
  });

  function update() {
    circle.each(function (idx) {
      if (idx < currentActive) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
      /*
        circle 요소를 순회하며 현재 활성화된 단계까지 
        .active 클래스를 추가합니다.
        currentActive보다 이후 단계는 
        .active 클래스를 제거합니다.
        .active 클래스는 단계가 활성화되었음을 나타내며, 
        스타일(CSS)로 UI를 변경할 수 있습니다.
      */
    });

    const actives = $(".active");
    progress.css(
      "width",
      ((actives.length - 1) / (circle.length - 1)) * 100 + "%"
      /*
        .active 클래스를 가진 요소를 선택하여 활성화된 단계를 가져옵니다.
        progress 요소의 width를 계산하여 설정합니다:
        actives.length - 1: 현재 활성화된 단계 수를 기반으로 진행 퍼센트를 계산.
        circle.length - 1: 전체 단계 수에서 첫 번째 단계를 제외한 나머지.
        결과를 퍼센트로 변환하여 progress의 width로 설정.
      */
    );

    if (currentActive === 1) {
      prev.prop("disabled", true);
    } else if (currentActive === circle.length) {
      next.prop("disabled", true);
    } else {
      prev.prop("disabled", false);
      next.prop("disabled", false);
    }
    /*
      currentActive가 첫 번째 단계(1)라면:
      prev 버튼을 비활성화(disabled = true).
      currentActive가 마지막 단계(circle.length)라면:
      next 버튼을 비활성화.
      그렇지 않으면, prev와 next 버튼 모두 활성화.


      $(selector).prop(propertyName); // 속성 값 가져오기
      $(selector).prop(propertyName, value); // 속성 값 설정하기
    */
  }
});

/*
  동작 방식 요약
  초기 상태:
  currentActive는 1.
  첫 번째 원(.circle)만 .active 클래스가 적용됨.
  #progress의 width는 0%.
  prev 버튼은 비활성화.
  next 버튼 클릭:

  currentActive 증가.
  활성화된 .circle과 progress의 너비가 업데이트됨.
  prev 버튼이 활성화.
  prev 버튼 클릭:

  currentActive 감소.
  .circle과 progress 상태가 업데이트됨.
  첫 번째 단계에서는 prev 버튼 비활성화.
  마지막 단계:

  next 버튼이 비활성화.
*/
