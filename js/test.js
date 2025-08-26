// スクロールでヘッダー縮小
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('header nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    // ハンバーガーアニメーション
    hamburger.classList.toggle('open');
});




// 背景アニメーション用
const bgImages = [
    '../images/pixta_63561057_M-min.jpg',
    '../images/other1.jpg',
    '../images/other2.jpg'
];

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const bodyAfter = document.querySelector('body::after'); 
    const bgDiv = document.getElementById('bgAnim');
    if(scrollPos < 500) {
        bgDiv.style.backgroundImage = `url(${bgImages[0]})`;
    } else if(scrollPos < 1000) {
        bgDiv.style.backgroundImage = `url(${bgImages[1]})`;
    } else {
        bgDiv.style.backgroundImage = `url(${bgImages[2]})`;
    }
});





