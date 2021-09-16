// 드롭다운 메뉴 슬라이드

$('nav li').hover(
 () => {
    $('ul', this).stop().slideDown(200);
},
() => {
    $('ul', this).stop().slideUp(200);
}
);

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = $(".mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}