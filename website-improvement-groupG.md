# グループG: P/L（損益計算書）の構造図解

## 📋 概要
- **実装時間**: 45分
- **リスク**: 低
- **効果**: PLの構造を視覚的に理解しやすくなる

---

## ✅ 変更内容

### G-1: PLの利益計算フローを追加

**対象セクション**: 企業分析詳細編②スクリーニング編 - 財務3表

**挿入位置**: 「PLとは何か？」の説明の後

**HTML**:
```html
<h4>PLの構造：利益の計算フロー</h4>

<div class="pl-flow">
    <div class="pl-step">
        <div class="pl-formula">
            <span class="pl-item">売上高</span>
            <span class="pl-operator">−</span>
            <span class="pl-item">売上原価</span>
            <span class="pl-operator">=</span>
            <span class="pl-result">売上総利益</span>
        </div>
        <p class="pl-description">商品やサービスを売った利益（粗利）</p>
    </div>
    
    <div class="pl-arrow">↓</div>
    
    <div class="pl-step">
        <div class="pl-formula">
            <span class="pl-item">売上総利益</span>
            <span class="pl-operator">−</span>
            <span class="pl-item">販売費及び一般管理費</span>
            <span class="pl-operator">=</span>
            <span class="pl-result">営業利益</span>
        </div>
        <p class="pl-description">本業で稼いだ利益</p>
    </div>
    
    <div class="pl-arrow">↓</div>
    
    <div class="pl-step">
        <div class="pl-formula">
            <span class="pl-item">営業利益</span>
            <span class="pl-operator">±</span>
            <span class="pl-item">営業外損益</span>
            <span class="pl-operator">=</span>
            <span class="pl-result">経常利益</span>
        </div>
        <p class="pl-description">本業＋財務活動（利息など）の利益</p>
    </div>
    
    <div class="pl-arrow">↓</div>
    
    <div class="pl-step">
        <div class="pl-formula">
            <span class="pl-item">経常利益</span>
            <span class="pl-operator">±</span>
            <span class="pl-item">特別損益</span>
            <span class="pl-operator">−</span>
            <span class="pl-item">税金等</span>
            <span class="pl-operator">=</span>
            <span class="pl-result highlight">当期純利益</span>
        </div>
        <p class="pl-description">最終的に残る利益（株主のもの）</p>
    </div>
</div>
```

---

## 🎨 CSS

```css
.pl-flow {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    padding: 30px;
    border-radius: 12px;
    margin: 30px 0;
}

.pl-step {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.pl-formula {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    flex-wrap: wrap;
}

.pl-item {
    color: #1F2937;
}

.pl-operator {
    color: #6B7280;
    font-size: 20px;
}

.pl-result {
    color: #2563EB;
    font-weight: 700;
}

.pl-result.highlight {
    color: #DC2626;
    font-size: 20px;
}

.pl-description {
    color: #6B7280;
    font-size: 14px;
    margin: 0;
}

.pl-arrow {
    text-align: center;
    font-size: 24px;
    color: #2563EB;
    font-weight: 700;
    margin: 10px 0;
}
```
