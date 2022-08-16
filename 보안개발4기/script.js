
var panels = document.querySelectorAll('.panel');

console.log(panels)

for(panel in panels) {

}

panels.forEach((panel)=> {
    panel.addEventListener('click', () => {
        // 다른놈은 작아지고
        panels.forEach(panel => {
            panel.classList.remove('active');
        })
        
        // 커지고
        panel.classList.add('active');
    })
})



//각 이미지를 클릭했을 때 이벤트 발생해야 한다.
//발생해야 할 이벤트: 이미지가 커지면서 나머지 이미지가 원래 크기로
//돌아와야 한다.flex display 사용
//화면을 최소로 줄이면 이미지가 세개만 보인다.(미디어쿼리 사용)
//transition

