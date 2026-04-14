// ========================================
// 拡張機能JavaScript
// ========================================

// ========== 用語集ツールチップ ==========
document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.getElementById('glossary-tooltip');
    const tooltipContent = tooltip.querySelector('.glossary-content');
    const glossaryTerms = document.querySelectorAll('.glossary-term');
    const matrixItems = document.querySelectorAll('.matrix-item');

    let currentTerm = null;
    let hideTimeout = null;

    // 用語集のツールチップ
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

    // マトリックスのツールチップ
    matrixItems.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            clearTimeout(hideTimeout);

            const content = this.getAttribute('data-content');
            if (content) {
                tooltipContent.textContent = content;

                // 位置計算
                const rect = this.getBoundingClientRect();
                const tooltipHeight = tooltip.offsetHeight;

                // マトリックスアイテムの上に表示
                let top = rect.top + window.scrollY - tooltipHeight - 12;
                let left = rect.left + window.scrollX;

                // 画面上端に近すぎる場合は下に表示
                if (top < window.scrollY + 10) {
                    top = rect.bottom + window.scrollY + 12;
                }

                // 画面右端を超える場合は調整
                if (left + tooltip.offsetWidth > window.innerWidth) {
                    left = window.innerWidth - tooltip.offsetWidth - 20;
                }

                // 画面左端を超える場合は調整
                if (left < 20) {
                    left = 20;
                }

                tooltip.style.top = top + 'px';
                tooltip.style.left = left + 'px';
                tooltip.classList.add('visible');

                currentTerm = this;
            }
        });

        item.addEventListener('mouseleave', function() {
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
    const matrixItems = document.querySelectorAll('.mx-cell.mx-item');

    matrixItems.forEach(item => {
        item.addEventListener('click', function() {
            const titleElement = this.querySelector('.mx-title');
            if (!titleElement) return;

            const title = titleElement.textContent.trim();

            // タイトルから番号を推測してidを特定
            const idMap = {
                '市場の構造的な伸び': 'insight-1',
                '成長企業のコバンザメ': 'insight-2',
                '国策との強いリンク': 'insight-3',
                'デカいダメ競合': 'insight-4',
                '原材料価格下落': 'insight-5',
                '成長市場・過当競争市場の武器商人': 'insight-6',
                'ストック化': 'insight-7',
                '構造的な参入障壁': 'insight-8',
                '資産の負債化': 'insight-9',
                '業態転換によるバリューチェーン切り上げ': 'insight-10',
                '内製化でコスト削減': 'insight-11',
                '紅ショウガ理論': 'insight-12',
                '構造的な収益率向上': 'insight-13',
                '巨大市場を創出しうる新技術': 'insight-14',
                '有能な経営者': 'insight-15',
                '商流の中の属人的・地縁的なつながり': 'insight-16',
                '強烈な営業力': 'insight-17',
                '特殊技術': 'insight-18',
                '徹底的な仕組み化': 'insight-19'
            };

            const targetId = idMap[title];
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    // ハイライト効果
                    const card = targetElement.closest('.card');
                    if (card) {
                        card.style.transition = 'all 0.3s ease';
                        card.style.transform = 'scale(1.02)';
                        card.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.3)';
                        setTimeout(() => {
                            card.style.transform = '';
                            card.style.boxShadow = '';
                        }, 1000);
                    }
                }
            }
        });

        // カーソルポインター
        item.style.cursor = 'pointer';
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

    // ========== 読破率ポップアップ ==========
    const popup = document.getElementById('completion-popup');
    const percentageElement = popup.querySelector('.completion-percentage');
    const textElement = popup.querySelector('.completion-text');
    let isPopupShowing = false;

    // 20%刻みのマイルストーン
    const milestones = [20, 40, 60, 80, 100];
    const shownMilestones = new Set();

    function showCompletionPopup(percentage, isComplete = false) {
        // すでに表示中なら何もしない
        if (isPopupShowing) return;

        isPopupShowing = true;
        percentageElement.textContent = percentage + '%';

        // 100%の時は特別なメッセージ
        if (isComplete) {
            textElement.textContent = '読了お疲れ様でした！';
        } else {
            textElement.textContent = '読了';
        }

        popup.classList.add('show');

        // 3秒後に非表示
        setTimeout(() => {
            popup.classList.remove('show');
            isPopupShowing = false;
        }, 3000);
    }

    function calculateReadingProgress() {
        // ページ全体の高さとスクロール位置から読了率を計算
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        // スクロール可能な範囲
        const scrollableHeight = documentHeight - windowHeight;

        // 読了率（0-100）
        const progress = scrollableHeight > 0 ? Math.min(100, Math.round((scrollTop / scrollableHeight) * 100)) : 0;

        return progress;
    }

    function checkReadingProgress() {
        const progress = calculateReadingProgress();

        // 20%刻みのマイルストーンを通過したかチェック
        milestones.forEach(milestone => {
            if (progress >= milestone && !shownMilestones.has(milestone)) {
                shownMilestones.add(milestone);
                const isComplete = milestone === 100;
                showCompletionPopup(milestone, isComplete);
            }
        });
    }

    // スクロールした瞬間に即座にチェック
    window.addEventListener('scroll', () => {
        checkReadingProgress();
    });

    // 初期チェック
    checkReadingProgress();
});
