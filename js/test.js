document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('header nav');
    const header = document.getElementById('header');
    const bgDiv = document.getElementById('bgAnim');
    const sidebarHamburger = document.getElementById('sidebarHamburger');
    const sidebar = document.getElementById('sidebar');

    sidebarHamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        sidebarHamburger.classList.toggle('open'); // 任意でアニメーション
    });

    // ハンバーガークリック
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');      // メニュー表示/非表示
        hamburger.classList.toggle('open');  // ハンバーガーアニメーション
    });

    // スクロールイベント
    const bgImages = [
        '../images/pixta_63561057_M-min.jpg',
        '../images/other1.jpg',
        '../images/other2.jpg'
    ];

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // ヘッダー縮小
        if(scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // 背景画像切替
        if(scrollY < 500) {
            bgDiv.style.backgroundImage = `url(${bgImages[0]})`;
        } else if(scrollY < 1000) {
            bgDiv.style.backgroundImage = `url(${bgImages[1]})`;
        } else {
            bgDiv.style.backgroundImage = `url(${bgImages[2]})`;
        }
    });

    // メニュークリックで閉じる（スマホ用）
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('active')){
                nav.classList.remove('active');
                hamburger.classList.remove('open');
            }
        });
    });
});
