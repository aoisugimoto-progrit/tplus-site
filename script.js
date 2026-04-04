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

// ページトランジション（即座にオーバーレイを作成）
(function() {
    // オーバーレイ要素を即座に作成
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';

    // ページ遷移中かチェック
    const isTransitioning = sessionStorage.getItem('pageTransitioning') === 'true';

    if (!isTransitioning) {
        overlay.classList.add('fade-out');
    }

    document.documentElement.appendChild(overlay);

    // ページ遷移フラグをクリア
    sessionStorage.removeItem('pageTransitioning');
})();

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.page-transition-overlay');

    // オーバーレイをフェードアウト
    if (!overlay.classList.contains('fade-out')) {
        setTimeout(() => {
            overlay.classList.add('fade-out');
        }, 100);
    }

    // ナビゲーションリンクにページトランジションを追加
    const navLinks = document.querySelectorAll('.header-nav a:not([href^="#"])');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // 現在のページと同じ場合は何もしない
            if (href === window.location.pathname.split('/').pop()) {
                e.preventDefault();
                return;
            }

            // 外部リンクの場合は通常通り
            if (href.startsWith('http')) {
                return;
            }

            e.preventDefault();

            // ページ遷移フラグをセット
            sessionStorage.setItem('pageTransitioning', 'true');

            // オーバーレイをフェードイン
            overlay.classList.remove('fade-out');

            // アニメーション後にページ遷移
            setTimeout(() => {
                window.location.href = href;
            }, 350);
        });
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
                toggleArrow.textContent = isHidden ? '>' : '<';
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


// アコーディオン機能（education.htmlの各セクションを折りたたみ）
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('education')) {
        const sections = document.querySelectorAll('#basics, #flow, #external, #screening, #internal, #event-driven, #insights');
        
        sections.forEach((section, index) => {
            section.classList.add('accordion-section');

            // デフォルトで全部開く
            section.classList.add('active');

            const h2 = section.querySelector('h2');
            if (!h2) return;

            const header = document.createElement('div');
            header.className = 'accordion-header';
            h2.parentNode.insertBefore(header, h2);
            header.appendChild(h2);

            const toggleBtn = document.createElement('div');
            toggleBtn.className = 'accordion-toggle-btn';
            toggleBtn.innerHTML = `
                <span class="accordion-toggle-icon">v</span>
                <span class="accordion-toggle-text">閉じる</span>
            `;
            header.appendChild(toggleBtn);

            const content = document.createElement('div');
            content.className = 'accordion-content';

            while (header.nextSibling) {
                content.appendChild(header.nextSibling);
            }
            section.appendChild(content);

            const updateToggleButton = (section) => {
                const toggleText = section.querySelector('.accordion-toggle-text');
                if (toggleText) {
                    toggleText.textContent = section.classList.contains('active') ? '閉じる' : '開く';
                }
            };

            header.addEventListener('click', () => {
                // 個別にトグル（他のセクションは触らない）
                section.classList.toggle('active');
                updateToggleButton(section);
            });
        });

        // #quizと#moviesのアコーディオン（既にHTMLで構造作成済み）
        const manualSections = document.querySelectorAll('#quiz .accordion-section, #movies .accordion-section');
        manualSections.forEach((section) => {
            const header = section.querySelector('.accordion-header');
            const toggleLabel = section.querySelector('.toggle-label');

            if (header) {
                header.addEventListener('click', () => {
                    section.classList.toggle('active');
                    if (toggleLabel) {
                        toggleLabel.textContent = section.classList.contains('active') ? '閉じる' : '開く';
                    }
                });
            }
        });
    }
});

// 詳細展開ボタン機能（事例を見る）
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('education')) {
        const allParagraphs = document.querySelectorAll('.card p, .info-box p');
        
        allParagraphs.forEach(p => {
            const text = p.innerHTML;
            
            if (text.includes('<strong>例：</strong>') || text.includes('<strong>具体例：</strong>')) {
                if (p.parentElement.classList.contains('example-container')) return;
                
                const container = document.createElement('div');
                container.className = 'example-container';
                p.parentNode.insertBefore(container, p);
                
                const toggleBtn = document.createElement('button');
                toggleBtn.className = 'example-toggle-btn';
                toggleBtn.innerHTML = '<span class="arrow">v</span> 事例を見る';
                container.appendChild(toggleBtn);
                
                const content = document.createElement('div');
                content.className = 'example-content';
                content.appendChild(p);
                container.appendChild(content);
                
                toggleBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    container.classList.toggle('expanded');
                    toggleBtn.innerHTML = container.classList.contains('expanded')
                        ? '<span class="arrow">v</span> 事例を隠す'
                        : '<span class="arrow">v</span> 事例を見る';
                });
            }
        });
    }
});
