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
    const sections = document.querySelectorAll('.content-inner section');
    const totalSections = sections.length;
    const completedSections = new Set();
    const popup = document.getElementById('completion-popup');
    const percentageElement = popup.querySelector('.completion-percentage');
    let isPopupShowing = false;
    let pendingCompletionRate = null;

    function showCompletionPopup(percentage) {
        // すでに表示中なら何もしない
        if (isPopupShowing) return;

        isPopupShowing = true;
        percentageElement.textContent = percentage + '%';
        popup.classList.add('show');

        // 2.5秒後に非表示
        setTimeout(() => {
            popup.classList.remove('show');
            isPopupShowing = false;

            // 待機中の読破率があれば表示
            if (pendingCompletionRate !== null) {
                const rate = pendingCompletionRate;
                pendingCompletionRate = null;
                setTimeout(() => showCompletionPopup(rate), 500);
            }
        }, 2500);
    }

    function checkSectionCompletion() {
        let newCompletion = false;
        let latestCompletionRate = 0;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionId = section.id;

            // セクションの80%が画面より上に行ったら「読了」とみなす
            if (rect.top + rect.height * 0.8 < window.innerHeight && !completedSections.has(sectionId)) {
                completedSections.add(sectionId);
                newCompletion = true;

                // 読破率を計算（10%刻み）
                latestCompletionRate = Math.round((completedSections.size / totalSections) * 100);
            }
        });

        // 新しい読了があった場合のみポップアップ
        if (newCompletion && latestCompletionRate >= 10) {
            if (isPopupShowing) {
                // すでに表示中の場合は保留
                pendingCompletionRate = latestCompletionRate;
            } else {
                showCompletionPopup(latestCompletionRate);
            }
        }
    }

    // スクロールが止まったら表示（1秒間スクロールがなければ停止とみなす）
    let scrollStopTimeout;
    let isScrolling = false;

    window.addEventListener('scroll', () => {
        isScrolling = true;

        // 既存のタイマーをクリア
        if (scrollStopTimeout) {
            clearTimeout(scrollStopTimeout);
        }

        // 1秒後にスクロール停止とみなす
        scrollStopTimeout = setTimeout(() => {
            isScrolling = false;
            checkSectionCompletion();
        }, 1000);
    });

    // 初期チェック
    checkSectionCompletion();

    // ========== 書籍「もっと見る」ボタン ==========
    const showMoreButtons = document.querySelectorAll('.show-more-books');

    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 親要素のbook-gridを取得
            const bookGrid = this.previousElementSibling;

            // data-priority="3"の書籍を表示
            const hiddenBooks = bookGrid.querySelectorAll('.book-cover[data-priority="3"]');
            hiddenBooks.forEach(book => {
                book.classList.add('show');
            });

            // ボタンを非表示
            this.classList.add('hidden');
        });
    });
});
