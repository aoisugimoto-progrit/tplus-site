# グループA: ホーム画面の構成変更

## 📋 概要
- **実装時間**: 30分
- **リスク**: 低
- **効果**: ホーム画面のセクション順序を整理し、新規セクション追加

---

## ✅ 変更内容

### A-1: セクションの並び替え

**対象ファイル**: `index.html`

**変更前の順序**:
1. Only Outliers Can Outperform
2. ゼミ生の責務
3. XPro

**変更後の順序**:
1. Only Outliers Can Outperform
2. ゼミ生の責務
3. **【新規】本サイトの目的**
4. XPro

---

### A-2: 新規セクション「本サイトの目的」の追加

**挿入位置**: 「ゼミ生の責務」セクションと「XPro」セクションの間

**HTML**:
```html
<!-- 本サイトの目的 -->
<section id="site-purpose" class="content-section">
    <div class="container">
        <h2>ご視聴ありがとうございました。本サイトの目的について</h2>
        <div class="purpose-content">
            <p>本サイトは「投資について何から勉強すればいいかわからない」という超初心者向けのガイドです。投資の全体像を把握し、将来の見通しを立てる一助となることを目的に、初歩的な全体像を描きました。</p>
            <p>あくまで全体像であり、投資の醍醐味は本来、一社一社や各業界を詳細に分析していくプロセスにあります。本資料は投資の「基礎」としてご活用ください。</p>
        </div>
    </div>
</section>
```

---

## 🎨 CSS（必要に応じて追加）

```css
#site-purpose {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 252, 255, 1) 100%);
    padding: 60px 0;
}

.purpose-content {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
}

.purpose-content p {
    margin-bottom: 20px;
}
```
