$(function () {
	$(".counter").each(function () {
		$(this).text("0");
		const updateCounter = () => {
			const target = +$(this).attr("data-target");
			let c = +$(this).text();
			const increment = target / 200;

			if (c < target) {
				$(this).text(`${Math.ceil(c + increment)}`);
				// c = Math.ceil(c + increment);
				// $(this).text(c);
				setTimeout(updateCounter, 1);
			} else {
				$(this).text(target);
			}
		};
		updateCounter();
	});
});

/*


이 코드는 .counter 클래스를 가진 모든 HTML 요소에서 숫자 카운팅을 애니메이션처럼 진행하는 기능을 구현한 것입니다. 아래에서 코드의 각 부분을 분석하고 설명해드리겠습니다.

1. $(function() { ... })
의미: $(document).ready()와 동일합니다. 페이지의 HTML 문서가 완전히 로드되면, 즉 DOM 트리가 준비되었을 때 함수 안의 코드가 실행됩니다.
용도: 페이지 로드 후 바로 카운팅 효과를 실행하려는 것입니다.
2. $(".counter").each(function () { ... })
의미: .counter 클래스를 가진 모든 HTML 요소에 대해 each() 메서드를 사용하여 반복문을 실행합니다. each()는 jQuery에서 각 요소에 대해 콜백 함수를 실행할 때 사용합니다.
용도: .counter 클래스가 여러 개 있을 수 있으므로, 각 .counter 요소에 대해 개별적으로 카운팅 작업을 수행하도록 합니다.
3. $(this).text("0");
의미: 현재 .counter 요소의 텍스트를 0으로 설정합니다. 카운팅이 시작되기 전에 모든 카운터를 0으로 초기화합니다.
용도: 초기값을 0으로 설정하여 카운팅을 시작할 수 있도록 합니다.
4. const updateCounter = () => { ... }
의미: updateCounter라는 이름의 함수를 정의합니다. 이 함수는 카운팅을 증가시키고, 값을 갱신하는 역할을 합니다.
용도: 애니메이션처럼 카운팅을 점진적으로 증가시키기 위해 호출됩니다.
5. const target = +$(this).attr("data-target");
의미: data-target 속성에 설정된 값을 가져옵니다. 이 값은 카운팅이 끝날 목표 숫자입니다. +는 문자열을 숫자로 변환하는 단항 연산자입니다.
용도: 각 카운터의 목표 값(최종값)을 읽어옵니다.
6. let c = +$(this).text();
의미: 현재 .counter 요소에 표시된 텍스트(즉, 현재 카운팅된 값)를 숫자 형태로 가져옵니다.
용도: 현재까지 카운팅된 숫자를 변수 c에 저장합니다.
7. const increment = target / 200;
의미: 카운팅을 얼마나 빠르게 진행할지를 결정하는 값입니다. 목표값을 200으로 나누어 각 반복에서 증가할 양을 설정합니다.
용도: 목표값에 도달하기까지 200번에 걸쳐 값을 증가시킵니다.
8. if (c < target) { ... }
의미: 현재 카운팅 값 c가 목표값 target보다 작다면, 카운팅을 계속 진행합니다.
용도: 목표값에 도달할 때까지 카운팅을 증가시키는 조건을 만듭니다.
9. $(this).text(${Math.ceil(c + increment)});
의미: c에 increment를 더하고, 이를 Math.ceil()을 통해 반올림한 값을 다시 .counter 요소의 텍스트로 설정합니다.
용도: 카운팅을 증가시켜 텍스트로 업데이트합니다. Math.ceil()을 사용하는 이유는 숫자를 올림하여 더 부드럽고 일정한 카운팅 효과를 만들기 위함입니다.
10. setTimeout(updateCounter, 1);
의미: updateCounter 함수를 1밀리초 후에 재호출합니다. 이를 통해 카운팅을 점진적으로 증가시키는 애니메이션 효과를 만듭니다.
용도: 1ms마다 카운팅을 증가시켜 부드러운 애니메이션을 제공합니다. 이 부분이 카운팅 애니메이션을 주도합니다.
11. else { $(this).text(target); }
의미: 만약 현재 값 c가 목표값 target보다 크거나 같다면, 카운팅을 멈추고 .counter 요소의 텍스트를 목표값으로 설정합니다.
용도: 목표값에 도달하면 카운팅을 멈추고, 정확한 목표값을 표시합니다.
12. updateCounter();
의미: 위에서 정의한 updateCounter 함수를 처음 한 번 호출하여 카운팅을 시작합니다.
용도: 페이지 로드 시 카운팅이 바로 시작되도록 합니다.
*/
