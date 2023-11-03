const content = "안녕하세요. 주니어 개발자 김하늘입니다.";
const text = document.querySelector(".main-text");
let index = 0;

    function sleep(delay){
        const start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    };

    function typing(){
        text.textContent += content[index++];
        if(index > content.length){
            text.textContent =""
            index = 0;
            sleep(3000);
        }
    };
    setInterval(typing, 200);

const gnbItems = document.querySelectorAll(".gnb-item");
const sections = document.querySelectorAll("section");
gnbItems.forEach((gnbItem, index) => {
    gnbItem.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionTop = sections[index].offsetTop - 40;
        window.scroll({ top: sectionTop });
    });
});

