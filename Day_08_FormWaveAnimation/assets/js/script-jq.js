$(function () {
  $(".form-control label").each(function () {
    const label = $(this); // jQuery 객체로 변환
    const text = label.text(); // 텍스트 추출

    // 텍스트를 split 후 각 문자에 transition-delay 적용
    const newHTML = text
      .split("")
      .map(
        (letter, idx) =>
          `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
      )
      .join("");

    label.html(newHTML); // 새로운 HTML로 교체
  });
});
