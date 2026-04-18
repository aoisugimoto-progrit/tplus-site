# グループE: 小規模な構成変更

## 📋 概要
- **実装時間**: 1時間
- **リスク**: 中
- **効果**: レイアウトの改善

---

## ✅ 変更リスト

### E-1: PERの正しい使い方を縦並びに

**対象セクション**: スクリーニング編 - PER

**変更前**:
```html
<h4>PERの正しい使い方</h4>
<div class="card-grid">
    <!-- cards -->
</div>
```

**変更後**:
```html
<h4>PERの正しい使い方</h4>
<div class="vertical-cards">
    <!-- cards -->
</div>
```

**CSS追加**:
```css
/* 縦並びカード */
.vertical-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.vertical-cards .card {
    width: 100%;
    max-width: 800px;
}
```

---

### E-2: 書籍に星（priority）を追加

**対象**: 各セクションの書籍推薦

**優先度1の書籍**:
- IMG_1278.JPG（デイトレチャート大全）
- book_new1.png（株式投資の基礎）
- IMG_1276.JPG（ミクロ経済の力）

**優先度2の書籍**:
- IMG_1273.JPG（金利が上がると）
- IMG_1287.JPG（マンキュー Ⅰ）
- IMG_1288.JPG（マンキュー Ⅱ）

**変更方法**:
各書籍のimgタグに `data-priority` 属性を追加

**例**:
```html
<!-- 変更前 -->
<img src="books/IMG_1278.JPG" alt="デイトレチャート大全">

<!-- 変更後 -->
<img src="books/IMG_1278.JPG" alt="デイトレチャート大全" data-priority="1">
```

**CSS追加** (優先度1の書籍に★マークを表示):
```css
.book-recommendations img[data-priority="1"]::after {
    content: "★";
    position: absolute;
    top: 8px;
    right: 8px;
    color: #FFD700;
    font-size: 24px;
}
```
