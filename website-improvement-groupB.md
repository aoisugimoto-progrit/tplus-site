# グループB: 教育コンテンツのUI・デザイン修正

## 📋 概要
- **実装時間**: 1時間
- **リスク**: 中
- **効果**: UI改善、可読性向上

---

## ✅ 変更リスト

### B-1: 読了時間の表示位置変更

**対象ファイル**: `education.html`

**変更前**:
```html
<section id="basics">
    <h2>株ってなに？</h2>
    <div class="reading-time">
        <i class="far fa-clock"></i> 読了時間：約5分
    </div>
    <!-- 本文 -->
</section>
```

**変更後**:
```html
<section id="basics">
    <h2>株ってなに？ <span class="reading-time-inline">読了時間 5分</span></h2>
    <!-- 本文 -->
</section>
```

**CSS追加**:
```css
.reading-time-inline {
    font-size: 14px;
    color: #6B7280;
    font-weight: 400;
    margin-left: 15px;
}
```

---

### B-2: 青文字を黒文字に変更

**対象**: URL埋め込みのない青文字テキスト

**方法**: CSSで該当箇所のcolorプロパティを確認し、`color: #2563EB;` などの青色を `color: #1F2937;`（黒）に変更

**検索対象**:
```bash
grep -n "color.*#.*EB\|color.*blue" style.css
```

---

### B-3: 5フォース分析を縦配列に変更

**対象セクション**: 企業分析詳細編①外部環境分析編 - 5フォース分析

**変更前**: 横並び（flex-direction: row または grid）

**変更後**: 縦並び（flex-direction: column）

**HTML構造**:
```html
<div class="five-forces-list">
    <div class="force-item">
        <h4>① 業界内の競争</h4>
        <p>...</p>
    </div>
    <div class="force-item">
        <h4>② 新規参入の脅威</h4>
        <p>...</p>
    </div>
    <!-- ③〜⑤も同様 -->
</div>
```

**CSS**:
```css
.five-forces-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.force-item {
    background: white;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--color-primary);
}
```
