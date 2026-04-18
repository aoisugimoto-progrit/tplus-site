# グループC: ラベル追加

## 📋 概要
- **実装時間**: 1時間
- **リスク**: 低
- **効果**: 重要なポイントが一目で分かる

---

## 📝 ラベルの種類

### コラムラベル
```html
<span class="section-label label-column">コラム</span>
```

### 本質ラベル
```html
<span class="section-label label-essence">本質</span>
```

---

## ✅ ラベル追加リスト

### label-001: コラム
**対象**: 会社の利益は誰のものか  
**挿入位置**: `<p><strong>会社の利益は誰のものか？</strong></p>` の直前  
**親要素**: `<div class="info-box">`

---

### label-002: 本質
**対象**: 成長が予想されていれば、すでに織り込み済み  
**挿入位置**: `<h4>成長が予想されていれば、すでに織り込み済み</h4>` の直前  
**親要素**: `<div class="highlight-box">`

---

### label-003: 本質
**対象**: 100%信じられる指標は存在しない  
**挿入位置**: `<h4>重要：100%信じられる指標は存在しない</h4>` の直前  
**親要素**: `<div class="highlight-box">`

---

### label-004: 本質
**対象**: 指標は道具であり万能ではない  
**挿入位置**: `<h3>指標は道具であり、万能ではない</h3>` の直前  
**親要素**: `<div class="highlight-box">`

---

### label-005: 本質
**対象**: PERは絶対値では判断できない  
**挿入位置**: `<h4>PERは絶対値では判断できない</h4>` の直前

---

### label-006: コラム
**対象**: 東証のPBR改革  
**挿入位置**: `<p><strong>東証のPBR改革</strong></p>` の直前  
**親要素**: `<div class="info-box">`

---

### label-007: コラム
**対象**: ROE 8%が基準なのよ  
**挿入位置**: `<p><strong>ROE 8%が基準なのよ</strong></p>` の直前  
**親要素**: `<div class="info-box">`

---

### label-008: コラム
**対象**: 企業がROEを改善する方法  
**挿入位置**: `<p><strong>企業がROEを改善する方法 ー アクティビスト投資家の視点</strong></p>` の直前  
**親要素**: `<div class="info-box">`

---

### label-009: 本質
**対象**: ビジネスモデルの理解  
**挿入位置**: `<h3>ビジネスモデルの理解 ー 誰からお金をもらっているのか</h3>` の直前

---

### label-010: 本質
**対象**: 収益構造の深掘り  
**挿入位置**: `<h3>収益構造の深掘り ー 何が成長ドライバーなのか</h3>` の直前

---

### label-011: 本質
**対象**: IR取材の重要性  
**挿入位置**: `<h3>IR取材の重要性 ー 一次情報を取りに行く</h3>` の直前  
**親要素**: `<div class="highlight-box">`

---

## 🎨 CSS追加

```css
/* ラベル共通スタイル */
.section-label {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 12px;
    text-transform: uppercase;
}

/* コラムラベル */
.label-column {
    background-color: #FEF3C7;
    color: #92400E;
    border: 1px solid #FCD34D;
}

/* 本質ラベル */
.label-essence {
    background-color: #DBEAFE;
    color: #1E40AF;
    border: 1px solid #60A5FA;
}
```
