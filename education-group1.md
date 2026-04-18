# グループ1: 視覚的な区切り強化

## 📋 概要
- **実装時間**: 30分～1時間
- **リスク**: 低（CSSのみの変更）
- **効果**: 「今どこを読んでいるか」が明確になる

---

## ✅ 実装内容

### 1. セクション間の余白追加
```css
/* セクション間に大きな余白 */
section {
  margin: 80px 0;
  padding: 40px 0;
}
```

### 2. セクションの背景色を交互に変更
```css
/* 偶数セクションに薄いグレー背景 */
section:nth-child(even) {
  background-color: #f9f9f9;
}

section:nth-child(odd) {
  background-color: #ffffff;
}
```

### 3. セクション開始に大きなビジュアル要素
```css
/* セクション見出し（h2）を大きく目立たせる */
section h2 {
  font-size: 36px;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 3px solid #ff6600; /* オレンジ色 */
}
```

---

## 🎯 期待される効果
- セクション間の移動がスムーズ
- 視覚的にメリハリがつく
- 読む位置が分かりやすい

---

## ⚠️ 注意事項
- 背景色は薄いグレー（#f9f9f9）程度にする
- セクションのpaddingも追加して、背景色が見えるようにする
