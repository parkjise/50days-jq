const btns = document.querySelectorAll(".faq-toggle"); // 모든 버튼을 선택
const faqs = document.querySelectorAll(".faq"); // 모든 FAQ 항목을 선택

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentFaq = btn.parentNode; // 클릭된 버튼의 부모 요소인 faq 항목을 찾기

    // 모든 FAQ 항목에서 active 클래스 제거
    faqs.forEach((faq) => {
      if (faq !== currentFaq) {
        faq.classList.remove("active"); // 클릭한 항목 외에는 active 클래스를 제거
      }
    });

    // 클릭한 항목의 부모에만 active 클래스를 토글
    currentFaq.classList.toggle("active");
  });
});
