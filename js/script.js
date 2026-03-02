document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('header-nav');
    const navLinks = document.querySelectorAll('#header-nav a'); // メニュー内のリンクを全部取得

    // ハンバーガーボタンを押した時の動き
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // メニュー内のリンクが押されたら、メニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active'); // Xを三本線に戻す
            nav.classList.remove('active');       // メニューを右に引っ込める
        });
    });
});