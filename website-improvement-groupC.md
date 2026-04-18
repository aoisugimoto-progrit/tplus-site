# グループC: コンテンツ評価（星数）の更新

## 📋 概要
- **実装時間**: 15分
- **リスク**: 低
- **効果**: 書籍推薦の優先度を明確化

---

## ✅ 変更リスト

### C-1: 書籍の星数（data-priority）を更新

**対象ファイル**: `education.html`

**変更する書籍**:

| 書籍名 | 画像ファイル名 | 変更前 | 変更後 |
|--------|----------------|--------|--------|
| デイトレチャート大全 | IMG_1278.JPG | priority="1" | priority="1" |
| 企業価値の神秘 | book_new1.png | priority="1" | priority="1" |
| ミクロ経済の力 | IMG_1276.JPG | priority="1" | priority="1" |
| 金利が上がると | IMG_1273.JPG | priority="2" | priority="2" |
| 業界地図 | （要確認） | priority="2" | priority="3" |

**実装方法**:
1. `education.html` 内の該当する `<img>` タグを検索
2. `data-priority` 属性の値を変更

**例**:
```html
<!-- 変更前 -->
<img src="books/industry-map.jpg" alt="業界地図" data-priority="2">

<!-- 変更後 -->
<img src="books/industry-map.jpg" alt="業界地図" data-priority="3">
```
