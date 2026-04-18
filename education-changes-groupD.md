# グループD: 分数表示への変換

## 📋 概要
- **実装時間**: 30分
- **リスク**: 低
- **効果**: 数式が視覚的に分かりやすくなる

---

## ✅ 変換リスト

### formula-001: PER = 株価 ÷ EPS

**変換前**:
```html
<p><strong>PER = 株価 ÷ 1株あたり純利益(EPS)</strong></p>
```

**変換後**:
```html
<p class="formula-inline">
    <strong>PER = </strong>
    <span class="fraction">
        <span class="numerator">株価</span>
        <span class="denominator">1株あたり純利益(EPS)</span>
    </span>
</p>
```

---

### formula-002: PER = 時価総額 ÷ 純利益

**変換前**:
```html
<p>または、<strong>PER = 時価総額 ÷ 純利益</strong></p>
```

**変換後**:
```html
<p class="formula-inline">
    または、<strong>PER = </strong>
    <span class="fraction">
        <span class="numerator">時価総額</span>
        <span class="denominator">純利益</span>
    </span>
</p>
```

---

### formula-003: PBR = 株価 ÷ BPS

**変換前**:
```html
<p><strong>PBR = 株価 ÷ 1株あたり純資産(BPS)</strong></p>
```

**変換後**:
```html
<p class="formula-inline">
    <strong>PBR = </strong>
    <span class="fraction">
        <span class="numerator">株価</span>
        <span class="denominator">1株あたり純資産(BPS)</span>
    </span>
</p>
```

---

### formula-004: ROE の分解式

**変換前**:
```html
<p><strong>ROE = (純利益÷売上) × (売上÷総資産) × (総資産÷自己資本)</strong></p>
```

**変換後**:
```html
<p class="formula-inline">
    <strong>ROE = </strong>
    <span class="fraction">
        <span class="numerator">純利益</span>
        <span class="denominator">売上</span>
    </span>
    ×
    <span class="fraction">
        <span class="numerator">売上</span>
        <span class="denominator">総資産</span>
    </span>
    ×
    <span class="fraction">
        <span class="numerator">総資産</span>
        <span class="denominator">自己資本</span>
    </span>
</p>
```

---

## 🎨 CSS追加

```css
/* 数式表示 */
.formula-inline {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    margin: 16px 0;
}

.fraction {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    margin: 0 4px;
}

.numerator {
    border-bottom: 2px solid #1F2937;
    padding: 4px 8px;
    font-size: 16px;
}

.denominator {
    padding: 4px 8px;
    font-size: 16px;
}
```
