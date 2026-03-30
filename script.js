// スクロールアニメーション（Intersection Observer）
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// .scroll-fade クラスを持つすべての要素を監視
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.scroll-fade');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            // ヘッダー分を考慮してスクロール位置を調整
            const offsetTop = target.offsetTop - 90;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // サイドバーのアクティブリンク切り替え
            document.querySelectorAll('.sidebar nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// ページトップボタンの表示制御
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ヘッダーのスクロール時透明度変更＆ページトップボタン表示制御
window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    const scrollY = window.scrollY;

    // 全ページのヘッダーをスクロール時に消す
    if (header) {
        if (scrollY > 100) {
            const opacity = Math.max(0, 1 - (scrollY - 100) / 200);
            header.style.opacity = opacity;
            if (opacity === 0) {
                header.style.pointerEvents = 'none';
            } else {
                header.style.pointerEvents = 'auto';
            }
        } else {
            header.style.opacity = '1';
            header.style.pointerEvents = 'auto';
        }

        // ボックスシャドウの調整（透明でないヘッダー用）
        if (!header.classList.contains('header-transparent')) {
            if (scrollY > 50) {
                header.style.boxShadow = '0 2px 15px rgba(45, 95, 76, 0.12)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(45, 95, 76, 0.08)';
            }
        }
    }

    // ページトップボタンの表示制御
    if (backToTopButton) {
        if (scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }

    // サイドバーのアクティブリンク自動変更
    const sections = document.querySelectorAll('section[id]');
    const sidebarLinks = document.querySelectorAll('.sidebar nav a');

    if (sections.length > 0 && sidebarLinks.length > 0) {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
});

// サイドバー開閉機能
document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content.with-sidebar');
    const toggleArrow = document.querySelector('.toggle-arrow');

    if (sidebarToggleBtn && sidebar && mainContent) {
        sidebarToggleBtn.addEventListener('click', () => {
            const isHidden = sidebar.classList.toggle('hidden');
            mainContent.classList.toggle('sidebar-closed');
            document.body.classList.toggle('sidebar-closed', isHidden);

            if (toggleArrow) {
                toggleArrow.textContent = isHidden ? '▶' : '◀';
            }
        });
    }

    const navToggles = document.querySelectorAll('.nav-toggle');

    navToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = toggle.closest('.nav-parent');
            parent.classList.toggle('collapsed');
        });
    });
});

// サイドバーリサイズ機能
const sidebar = document.querySelector('.sidebar');
const resizer = document.querySelector('.sidebar-resizer');
const mainContent = document.querySelector('.main-content.with-sidebar');

if (sidebar && resizer && mainContent) {
    let isResizing = false;
    let startX = 0;
    let startWidth = 0;
    const minWidth = 200;
    const maxWidth = 500;

    resizer.addEventListener('mousedown', (e) => {
        isResizing = true;
        startX = e.clientX;
        startWidth = sidebar.offsetWidth;
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;

        const width = startWidth + (e.clientX - startX);

        if (width >= minWidth && width <= maxWidth) {
            sidebar.style.width = width + 'px';
            mainContent.style.marginLeft = width + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        }
    });
}
