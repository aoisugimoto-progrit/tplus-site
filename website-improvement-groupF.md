# グループF: ROE解説のリライトとデュポン分析の追加

## 📋 概要
- **実装時間**: 1.5時間
- **リスク**: 中
- **効果**: 客観性の向上、デュポン分析の理解促進

---

## ⚠️ 徹底禁止事項

- **人名の削除**: すべての個人名を削除
- **「ROEと無借金経営の罠」セクションの削除**: このセクション全体を削除
- **竹本レンタカー（架空企業）の例の削除**: 架空企業の事例を削除

---

## ✅ リライト方針

### F-1: ROEセクション全体の構造

**対象セクション**: 企業分析詳細編②スクリーニング編 - ROE

**削除する要素**:
- 個人名への言及
- 「ROEと無借金経営の罠」セクション全体
- 竹本レンタカーの例
- 口語的な表現

**維持する要素**:
- ROEの定義
- ROE = 純利益 ÷ 自己資本
- ROEが高い企業の特徴
- 札幌ビールの例（非常にわかりやすいため維持）

---

### F-2: デュポン分析の数式展開を追加

**新規追加セクション**: 「ROEの分解（デュポン分析）」

**HTML**:
```html
<h4>ROEの分解（デュポン分析）</h4>

<p>ROEは以下の3つの要素に分解できます。これを「デュポン分析」と呼びます。</p>

<div class="formula-breakdown">
    <p class="formula-inline">
        <strong>ROE = </strong>
        <span class="fraction">
            <span class="numerator">純利益</span>
            <span class="denominator">自己資本</span>
        </span>
    </p>
    
    <p style="text-align: center; margin: 20px 0; font-size: 20px;">↓</p>
    
    <p class="formula-inline">
        <strong>ROE = </strong>
        <span class="fraction">
            <span class="numerator">純利益</span>
            <span class="denominator">売上高</span>
        </span>
        ×
        <span class="fraction">
            <span class="numerator">売上高</span>
            <span class="denominator">総資産</span>
        </span>
        ×
        <span class="fraction">
            <span class="numerator">総資産</span>
            <span class="denominator">自己資本</span>
        </span>
    </p>
</div>

<div class="info-box">
    <h4>なぜこの式が成り立つのか？</h4>
    <p>分子と分母で「売上高」と「総資産」が約分されるため、最終的に「純利益 ÷ 自己資本」に戻ります。</p>
    
    <p><strong>計算例：</strong></p>
    <ul>
        <li>純利益：100億円</li>
        <li>売上高：1000億円</li>
        <li>総資産：2000億円</li>
        <li>自己資本：500億円</li>
    </ul>
    
    <p><strong>①売上高純利益率 = 100 ÷ 1000 = 10%</strong><br>
    売上に対してどれだけ利益を出せるか</p>
    
    <p><strong>②総資産回転率 = 1000 ÷ 2000 = 0.5回</strong><br>
    資産をどれだけ効率的に使って売上を生んでいるか</p>
    
    <p><strong>③財務レバレッジ = 2000 ÷ 500 = 4倍</strong><br>
    自己資本に対してどれだけ総資産（借入含む）を使っているか</p>
    
    <p><strong>ROE = 10% × 0.5 × 4 = 20%</strong></p>
    
    <p>直接計算：ROE = 100 ÷ 500 = 20%（一致）</p>
</div>

<p><strong>デュポン分析の意義</strong><br>
ROEが高い企業は、①利益率が高いか、②資産効率が良いか、③借入を活用しているか、のいずれか（または複数）が優れています。この分解により、企業の強みがどこにあるのかを見極められます。</p>
```

---

### F-3: 札幌ビールの例は維持

**理由**: 非常にわかりやすく、ROEの本質を理解するのに適しているため

**維持する内容**:
- 札幌ビールの資産売却とROE向上の事例
- 資産効率の重要性の説明
