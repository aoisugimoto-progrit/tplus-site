# グループ5: アコーディオン化

## 📋 概要
- **実装時間**: 3～5時間
- **リスク**: 高（JavaScript動作に注意）
- **効果**: ページの長さを大幅に削減

---

## ✅ 実装内容

### 1. 各h3見出しをアコーディオン化
**対象**: 各セクション内のh3見出し（①②③など）

**HTML構造**:
```html
<div class="accordion-item">
  <div class="accordion-header">
    <h3>① 株とは何か？</h3>
    <span class="accordion-toggle">▼</span>
  </div>
  <div class="accordion-body">
    <!-- 詳細内容 -->
  </div>
</div>
```

### 2. CSS
```css
.accordion-item {
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  background-color: #f9f9f9;
  transition: background-color 0.2s ease;
}

.accordion-header:hover {
  background-color: #f0f0f0;
}

.accordion-header h3 {
  margin: 0;
}

.accordion-toggle {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.accordion-item.active .accordion-toggle {
  transform: rotate(180deg);
}

.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: 0 20px;
}

.accordion-item.active .accordion-body {
  max-height: 5000px; /* 十分大きな値 */
  padding: 20px;
}
```

### 3. JavaScript
```javascript
document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const isActive = accordionItem.classList.contains('active');
      
      // すべてのアコーディオンを閉じる（オプション）
      // document.querySelectorAll('.accordion-item').forEach(item => {
      //   item.classList.remove('active');
      // });
      
      // クリックされたアコーディオンを開閉
      if (isActive) {
        accordionItem.classList.remove('active');
      } else {
        accordionItem.classList.add('active');
      }
    });
  });
  
  // 最初のアコーディオンはデフォルトで開く
  document.querySelector('.accordion-item')?.classList.add('active');
});
```

### 4. 実装手順
1. 既存のh3見出しとその配下のコンテンツを特定
2. HTML構造をアコーディオン形式に変換
3. CSS・JavaScriptを追加
4. 各セクションごとに動作確認

---

## 🎯 期待される効果
- ページの長さを500～600行に削減（折りたたみ時）
- ユーザーが興味のある部分だけ読める
- スキャン読みがしやすくなる

---

## ⚠️ 注意事項
- 重要な情報は最初から展開しておく
- すべての内容をアコーディオンにしない（h2レベルは常に表示）
- アコーディオンの開閉がスムーズか確認
- モバイルでも正しく動作するか確認
