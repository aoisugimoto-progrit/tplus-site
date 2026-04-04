// ========================================
// 拡張機能JavaScript
// ========================================

// ========== 用語集ツールチップ ==========
document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.getElementById('glossary-tooltip');
    const tooltipContent = tooltip.querySelector('.glossary-content');
    const glossaryTerms = document.querySelectorAll('.glossary-term');

    let currentTerm = null;
    let hideTimeout = null;

    glossaryTerms.forEach(term => {
        term.addEventListener('mouseenter', function(e) {
            clearTimeout(hideTimeout);

            const definition = this.getAttribute('data-definition');
            tooltipContent.textContent = definition;

            // 位置計算
            const rect = this.getBoundingClientRect();
            const tooltipHeight = tooltip.offsetHeight;

            // 用語の上に表示
            let top = rect.top + window.scrollY - tooltipHeight - 12;
            let left = rect.left + window.scrollX;

            // 画面上端に近すぎる場合は下に表示
            if (top < window.scrollY + 10) {
                top = rect.bottom + window.scrollY + 12;
                tooltip.style.setProperty('--arrow-position', 'top');
            } else {
                tooltip.style.setProperty('--arrow-position', 'bottom');
            }

            // 画面右端を超える場合は調整
            if (left + tooltip.offsetWidth > window.innerWidth) {
                left = window.innerWidth - tooltip.offsetWidth - 20;
            }

            tooltip.style.top = top + 'px';
            tooltip.style.left = left + 'px';
            tooltip.classList.add('visible');

            currentTerm = this;
        });

        term.addEventListener('mouseleave', function() {
            hideTimeout = setTimeout(() => {
                tooltip.classList.remove('visible');
                currentTerm = null;
            }, 200);
        });
    });

    // ツールチップにマウスが乗った場合も表示を維持
    tooltip.addEventListener('mouseenter', function() {
        clearTimeout(hideTimeout);
    });

    tooltip.addEventListener('mouseleave', function() {
        hideTimeout = setTimeout(() => {
            tooltip.classList.remove('visible');
            currentTerm = null;
        }, 200);
    });
});

// ========== マトリックスアイテムのクリック時スクロール ==========
document.addEventListener('DOMContentLoaded', function() {
    const matrixItems = document.querySelectorAll('.matrix-item');

    matrixItems.forEach(item => {
        item.addEventListener('click', function() {
            const number = this.getAttribute('data-number');

            // 対応するカードを探す（例：①市場の構造的な伸び）
            const cards = document.querySelectorAll('.card-grid .card');
            cards.forEach(card => {
                const heading = card.querySelector('h5');
                if (heading && heading.textContent.startsWith('①') && number === '1') {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // ハイライト効果
                    card.style.transition = 'all 0.3s ease';
                    card.style.transform = 'scale(1.02)';
                    card.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.3)';
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.boxShadow = '';
                    }, 1000);
                } else if (heading && heading.textContent.startsWith('②') && number === '2') {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.style.transition = 'all 0.3s ease';
                    card.style.transform = 'scale(1.02)';
                    card.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.3)';
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.boxShadow = '';
                    }, 1000);
                } else if (heading && heading.textContent.startsWith('③') && number === '3') {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.style.transition = 'all 0.3s ease';
                    card.style.transform = 'scale(1.02)';
                    card.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.3)';
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.boxShadow = '';
                    }, 1000);
                } else if (heading && heading.textContent.startsWith('④') && number === '4') {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.style.transition = 'all 0.3s ease';
                    card.style.transform = 'scale(1.02)';
                    card.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.3)';
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.boxShadow = '';
                    }, 1000);
                } else if (heading && heading.textContent.startsWith('⑤') && number === '5') {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.style.transition = 'all 0.3s ease';
                    card.style.transform = 'scale(1.02)';
                    card.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.3)';
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.boxShadow = '';
                    }, 1000);
                } else if (heading && heading.textContent.startsWith('⑥') && number === '6') {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.style.transition = 'all 0.3s ease';
                    card.style.transform = 'scale(1.02)';
                    card.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.3)';
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.boxShadow = '';
                    }, 1000);
                }
                // 他の番号も同様に追加可能
            });
        });
    });
});

// ========== スムーススクロールの強化 ==========
document.addEventListener('DOMContentLoaded', function() {
    // サイドバーのリンククリック時のスムーススクロール
    const sidebarLinks = document.querySelectorAll('.sidebar a[href^="#"]');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
