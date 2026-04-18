# グループ6: カード・書籍・マトリックスの改善

## 📋 概要
- **実装時間**: 3～5時間
- **リスク**: 中（見た目の大きな変更）
- **効果**: ビジュアル面の魅力向上

---

## ✅ 実装内容

### 1. カード要素のビジュアル強化

#### アイコン追加
```html
<div class="card">
  <div class="card-icon">
    <i class="fas fa-chart-line"></i>
  </div>
  <h4>市場の成長</h4>
  <p>...</p>
</div>
```

```css
.card-icon {
  font-size: 32px;
  color: #ff6600;
  margin-bottom: 16px;
}
```

#### ホバー効果
```css
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}
```

#### 重要なカードを大きく
```css
.card.featured {
  grid-column: span 2; /* 2列分のサイズ */
  background: linear-gradient(135deg, #ff6600, #ff9900);
  color: white;
}
```

### 2. 書籍紹介の改善

#### data-priority属性を活用
```javascript
// 優先度順にソート・表示
const bookSection = document.querySelector('.book-recommendations');
const books = Array.from(bookSection.querySelectorAll('.book-item'));

books.sort((a, b) => {
  const priorityA = parseInt(a.dataset.priority) || 999;
  const priorityB = parseInt(b.dataset.priority) || 999;
  return priorityA - priorityB;
});

// 優先度1～2のみ表示、残りは「もっと見る」ボタンで展開
books.forEach((book, index) => {
  if (parseInt(book.dataset.priority) > 2) {
    book.classList.add('hidden');
  }
  bookSection.appendChild(book);
});
```

#### 各書籍に1行説明を追加
```html
<div class="book-item" data-priority="1">
  <img src="..." alt="...">
  <p class="book-description">投資の基本を学ぶ入門書</p>
</div>
```

#### 「もっと見る」ボタン
```html
<button class="show-more-books">おすすめ書籍をもっと見る</button>
```

```javascript
document.querySelector('.show-more-books').addEventListener('click', function() {
  document.querySelectorAll('.book-item.hidden').forEach(book => {
    book.classList.remove('hidden');
  });
  this.style.display = 'none';
});
```

### 3. マトリックスの視覚化

#### 色分け
```css
/* 市場拡大 = 青 */
.matrix-cell[data-category="market"] {
  background-color: #e3f2fd;
  border-left: 4px solid #2196f3;
}

/* シェア拡大 = 緑 */
.matrix-cell[data-category="share"] {
  background-color: #e8f5e9;
  border-left: 4px solid #4caf50;
}

/* 利益率向上 = オレンジ */
.matrix-cell[data-category="profit"] {
  background-color: #fff3e0;
  border-left: 4px solid #ff9800;
}
```

#### ホバー時にdata-content表示
```javascript
const matrixCells = document.querySelectorAll('.matrix-cell');

matrixCells.forEach(cell => {
  cell.addEventListener('mouseenter', function() {
    const content = this.dataset.content;
    if (content) {
      const tooltip = document.createElement('div');
      tooltip.className = 'matrix-tooltip';
      tooltip.textContent = content;
      this.appendChild(tooltip);
    }
  });
  
  cell.addEventListener('mouseleave', function() {
    const tooltip = this.querySelector('.matrix-tooltip');
    if (tooltip) {
      tooltip.remove();
    }
  });
});
```

```css
.matrix-tooltip {
  position: absolute;
  background-color: rgba(0,0,0,0.9);
  color: white;
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 100;
  max-width: 300px;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
```

---

## 🎯 期待される効果
- 視覚的に魅力的
- ユーザーエンゲージメント向上
- 情報の理解度向上

---

## ⚠️ 注意事項
- アイコンはFontAwesomeなどのライブラリを使用
- アニメーションは控えめに（パフォーマンスに注意）
- カラーパレットを統一する
- モバイル表示も確認
