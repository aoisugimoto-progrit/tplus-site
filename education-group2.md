# グループ2: プログレスバー追加

## 📋 概要
- **実装時間**: 1～2時間
- **リスク**: 低（独立した機能）
- **効果**: ユーザーのモチベーション維持

---

## ✅ 実装内容

### 1. ページ上部に進捗バー表示
```html
<!-- body開始直後に追加 -->
<div class="progress-container">
  <div class="progress-bar" id="progressBar"></div>
</div>
```

```css
.progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  z-index: 9999;
}

.progress-bar {
  height: 4px;
  background-color: #ff6600;
  width: 0%;
  transition: width 0.2s ease;
}
```

```javascript
// スクロール連動で進捗バー更新
window.addEventListener('scroll', function() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('progressBar').style.width = scrolled + '%';
});
```

### 2. 各セクションに読了時間を表示
```html
<!-- 各セクションのh2の直後に追加 -->
<div class="reading-time">
  <i class="far fa-clock"></i> 読了時間：約5分
</div>
```

```css
.reading-time {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}
```

### 3. サイドバーの目次に進捗マーク追加
```javascript
// スクロール位置に応じて、現在のセクションをハイライト
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar-nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
      link.innerHTML = '✓ ' + link.innerText.replace('✓ ', '');
    }
  });
});
```

---

## 🎯 期待される効果
- ユーザーが「どこまで進んだか」を把握できる
- 達成感を感じやすい
- 離脱率の低下

---

## ⚠️ 注意事項
- 進捗バーは固定表示（fixed）
- z-indexを高くして、他の要素より上に表示
- 読了時間は各セクションの文字数から自動計算可能
