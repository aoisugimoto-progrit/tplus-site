# グループF: 大規模な構成変更

## 📋 概要
- **実装時間**: 2時間
- **リスク**: 高
- **効果**: 説明の質が大幅に向上

---

## ⚠️ 注意事項
- **必ずバックアップを取る**: 実行前に`git commit`
- セクション全体を書き換えるため、慎重に
- 実装後、必ずブラウザで確認

---

## ✅ 変更リスト

### F-1: トヨタと日産の比較を質問形式に

**対象セクション**: スクリーニング編 - PER

**元のHTMLパターン**:
```html
<div class="info-box">
    <p><strong>具体例：トヨタと日産を比較してみよう</strong></p>
    <!-- ... 元の内容 ... -->
</div>
```

**新しいHTML**:
```html
<div class="info-box">
    <p><strong>株価の絶対値だけで割安と判断できるか？</strong></p>
    <p>「トヨタの株価は5000円、日産の株価は3000円だから、日産の方が安い」</p>
    <p>このような判断は<strong>間違い</strong>です。なぜなら、<strong>株価の絶対値（そのままの価格）には意味がない</strong>からです。</p>
    <p style="margin-top: 15px;"><strong>具体例：トヨタと日産を比較してみよう</strong></p>
    <p>2024年時点のデータ（仮定）：</p>
    <ul>
        <li><strong>トヨタ</strong>：時価総額50兆円、純利益5兆円 → PER = 10倍</li>
        <li><strong>日産</strong>：時価総額3兆円、純利益1000億円 → PER = 30倍</li>
    </ul>
    <p>「トヨタの方が利益が50倍多いのに、株価（時価総額）は16倍しか違わない。なぜ？」</p>
    <p><strong>答え：</strong>PERが違うからです。</p>
    <p style="margin-top: 15px;"><strong>PERの方が割安さが分かりやすい</strong></p>
    <p>日産の方がPERが高い（30倍）＝市場が高い成長を期待している。<br>トヨタの方がPERが低い（10倍）＝成長余地が少ないか、割安と見られている。</p>
    <p><strong>結論：</strong>株価の絶対値ではなく、<strong>時価総額と利益の関係（PER）</strong>を見ないと、割安・割高は判断できません。</p>
</div>
```

---

### F-2: 織り込み済み + 矢印 + 市場とのギャップ

**対象セクション**: スクリーニング編 - PER

**挿入位置**: 「成長が予想されていれば、すでに織り込み済み」のhighlight-boxの直後

**挿入HTML**:
```html
<div style="text-align: center; margin: 30px 0; font-size: 40px; color: #2563EB; font-weight: 700;">
    ↓
</div>

<div class="highlight-box">
    <span class="section-label label-essence">本質</span>
    <h4>市場とのギャップこそが利益</h4>
    <p>要するに、<strong>市場との差が重要</strong>です。</p>
    <p>「この会社は伸びるから株価が上がります」というだけでは不十分です。</p>
    <p><strong>「この会社は市場がそこまで伸びるとは思っていないが、実際には伸びる」</strong></p>
    <p>という市場とのギャップが、株価にすべて反映されてきます。</p>
    <p><strong>具体例：</strong>みんなが「売上10%増」と予想している中、実際には「売上30%増」になる企業を見つける。このギャップが利益になります。</p>
</div>
```

---

### F-3: 価格弾力性の説明追加

**対象セクション**: スクリーニング編 - PER

**挿入位置**: 「シャンパン：景気が良くなると...」の後、「結果：」の前

**挿入HTML**:
```html
<p style="margin-top: 15px;"><strong>これが「価格弾力性」の違いです</strong></p>
<p>経済学では、これを<strong>価格弾力性</strong>と呼びます。</p>
<ul>
    <li><strong>価格弾力性が低い（非弾力的）</strong>：歯磨きチューブのように、景気や価格が変わっても需要があまり変わらない商品</li>
    <li><strong>価格弾力性が高い（弾力的）</strong>：シャンパンのように、景気や価格が変わると需要が大きく変動する商品</li>
</ul>
<p>価格弾力性が低い商品を扱う企業は、<strong>業績が安定しやすい</strong>ため、投資家は高いPERでも買います。<br>逆に、価格弾力性が高い商品を扱う企業は、<strong>業績が不安定</strong>なため、投資家はリスクを織り込んで低いPERでないと買いません。</p>
```

---

### F-4: 財務諸表の説明を詳細化

**対象セクション**: スクリーニング編 - 財務3表

**挿入位置**: 「財務3表の基本：PL・BS・CSとは？」の最初のpタグの前

**挿入HTML**:
```html
<p><strong>そもそも財務諸表って何？</strong></p>
<p>財務諸表とは、企業の経営状態を数字で表した報告書です。<strong>上場企業はすべて財務諸表を公開する義務</strong>があります。</p>
<p><strong>なぜ公開するのか？</strong><br>株主や投資家を守るためです。企業がどれだけ儲けているのか、財務状況は健全か、お金の流れはどうかを透明にすることで、投資家が正しい判断をできるようにしています。<br>上場していない企業は公開義務がありませんが、上場企業は四半期ごとに必ず公開します。</p>
```

---

### F-5: 減価償却をコラム化＋充実

**対象セクション**: スクリーニング編 - 財務3表

**置き換え対象**: 「減価償却：3表の繋がりを最もよく示す概念」のhighlight-box全体

**新しいHTML**:
```html
<div class="info-box">
    <span class="section-label label-column">コラム</span>
    <h3>減価償却：3表の繋がりを最もよく示す概念</h3>
    <p><strong>減価償却とは？</strong><br>建物や機械などの固定資産は、時間とともに価値が減っていきます。<br>その価値の減少分を、毎年費用として計上する会計処理が「減価償却」です。</p>
    <p><strong>例：</strong>1億円の機械を買って、10年で償却する場合、<br>毎年1000万円ずつ減価償却費として費用計上します。</p>
    <p style="margin-top: 15px;"><strong>なぜ一気に費用計上しないのか？</strong></p>
    <p>もし1億円の機械を買った年に全額費用計上すると、その年だけPLが大赤字になり、翌年以降は費用ゼロになります。<br>しかし実際には、その機械は10年間使い続けて利益を生み出します。</p>
    <p><strong>会計の基本原則：費用と収益の対応</strong><br>機械が10年間で生み出す収益に対応させて、費用も10年間で分散させる。<br>これにより、<strong>毎年のPLが企業の実態を正しく反映</strong>します。<br>もし一気に費用計上してしまうと、投資家が企業の本当の収益力を判断できなくなるため、減価償却という仕組みが存在します。</p>
</div>
```

---

### F-6: 19の隠れたインサイトを縦羅列に

**対象セクション**: 19の隠れたインサイト

**削除対象**: 「19の隠れたインサイトマトリックス」セクション全体（マトリックスHTMLを含む）

**新しいHTML**:
```html
<h3>19の「隠れたインサイト」</h3>

<div class="insight-list">
    <div class="insight-item">
        <span class="insight-number">①</span>
        <div>
            <h4>市場の構造的な伸び</h4>
            <p>外部環境の変化により、市場全体が成長している</p>
        </div>
    </div>
    <div class="insight-item">
        <span class="insight-number">②</span>
        <div>
            <h4>新規市場の創造</h4>
            <p>既存の市場ではなく、新しい市場を作り出している</p>
        </div>
    </div>
    <!-- ③〜⑲まで同様に続く -->
</div>
```

**CSS追加**:
```css
.insight-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.insight-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding: 20px;
    background: white;
    border-radius: 8px;
    border-left: 4px solid var(--color-primary);
}

.insight-number {
    font-size: 24px;
    font-weight: 700;
    color: var(--color-primary);
    min-width: 40px;
}

.insight-item h4 {
    margin: 0 0 8px 0;
    font-size: 18px;
}

.insight-item p {
    margin: 0;
    color: #6B7280;
    font-size: 14px;
}
```
