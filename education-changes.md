# education.html 変更指示書

## ✅ 完了済み
- [x] Phase 1: 「このセクションで学ぶこと」削除
- [x] Phase 1: 青文字ツールチップ削除

---

## 📝 実装待ち変更リスト

### 🔹 削除項目（正規表現で一括削除可能）

```json
{
  "deletions": [
    {
      "id": "del-001",
      "target": "ファネル型アプローチ",
      "pattern": "<div class=\"highlight-box\">\\s*<h3>4000社から1社へ：ファネル型アプローチ</h3>.*?</div>",
      "section": "企業分析の流れ"
    },
    {
      "id": "del-002",
      "target": "19の隠れたインサイトで統合",
      "pattern": "<div class=\"highlight-box\">\\s*<h3>最後に：19の隠れたインサイトで統合</h3>.*?</div>\\s*\\n\\s*</section>",
      "section": "企業分析の流れ"
    },
    {
      "id": "del-003",
      "target": "良い業界とは",
      "pattern": "<div class=\"info-box\">\\s*<p><strong>良い業界とは？</strong></p>.*?</div>\\s*\\n",
      "section": "外部環境分析編"
    },
    {
      "id": "del-004",
      "target": "なぜ19の隠れたインサイトが必要なのか",
      "pattern": "<div class=\"highlight-box\">\\s*<h3>なぜ「19の隠れたインサイト」が必要なのか？</h3>.*?</div>\\s*\\n",
      "section": "19の隠れたインサイト編"
    },
    {
      "id": "del-005",
      "target": "不動産投資で考えるとわかりやすい",
      "pattern": "<div class=\"info-box\">\\s*<p><strong>不動産投資で考えるとわかりやすい</strong></p>.*?</div>\\s*\\n",
      "section": "スクリーニング編 - PER"
    },
    {
      "id": "del-006",
      "target": "成長株投資の醍醐味",
      "pattern": "<div class=\"highlight-box\">\\s*<h4>成長株投資の醍醐味.*?</div>\\s*\\n",
      "section": "スクリーニング編 - PER"
    },
    {
      "id": "del-007",
      "target": "決算をまたぐべきか",
      "pattern": "<div class=\"highlight-box\">\\s*<h4>決算をまたぐべきか.*?</div>\\s*\\n",
      "section": "スクリーニング編 - PER"
    },
    {
      "id": "del-008",
      "target": "PEGレシオの具体例",
      "pattern": "<p><strong>具体例：</strong>.*?PEGレシオ.*?</p>\\s*<ul>.*?</ul>\\s*",
      "section": "スクリーニング編 - PER"
    },
    {
      "id": "del-009",
      "target": "ROEの基本的な見方",
      "pattern": "<p><strong>ROEの基本的な見方</strong></p>.*?<ul>.*?ROEが高い.*?</ul>\\s*\\n",
      "section": "スクリーニング編 - ROE"
    },
    {
      "id": "del-010",
      "target": "業種ごとのROE",
      "pattern": "<div class=\"info-box\">\\s*<p><strong>業種ごとのROE.*?</div>\\s*\\n",
      "section": "スクリーニング編 - ROE"
    },
    {
      "id": "del-011",
      "target": "現場の社員もROEを意識すべき理由",
      "pattern": "<div class=\"info-box\">\\s*<p><strong>現場の社員もROEを意識すべき理由</strong></p>.*?</div>\\s*\\n",
      "section": "スクリーニング編 - ROE"
    },
    {
      "id": "del-012",
      "target": "指標の関係性セクション全体",
      "pattern": "<h3>指標の関係性.*?</h3>.*?<div class=\"highlight-box\">\\s*<h3>指標は道具であり、万能ではない</h3>",
      "replacement": "<div class=\"highlight-box\">\\n                    <h3>指標は道具であり、万能ではない</h3>",
      "section": "スクリーニング編"
    },
    {
      "id": "del-013",
      "target": "イベントドリブンの活用法",
      "pattern": "<div class=\"highlight-box\">\\s*<h3>イベントドリブンの活用法.*?</div>\\s*\\n",
      "section": "イベントドリブン編"
    },
    {
      "id": "del-014",
      "target": "Amazon/Googleのビジネスモデル例",
      "patterns": [
        "<li><strong>Amazon：</strong>.*?</li>\\s*",
        "<li><strong>Google：</strong>.*?</li>\\s*"
      ],
      "section": "内部環境分析編"
    }
  ]
}
```

### 🔹 テキスト置換（単純な文字列置換）

```json
{
  "replacements": [
    {
      "id": "rep-001",
      "old": "順張りの考え方：風に乗る",
      "new": "順張りの考え方",
      "section": "外部環境分析編"
    },
    {
      "id": "rep-002",
      "old": "なぜなら、良い環境にいる企業は、多少経営が下手でも成長できるからです。",
      "new": "なぜなら、順張りで成功する確率が逆張りで成功する確率よりも圧倒的に高いからです。",
      "section": "外部環境分析編"
    },
    {
      "id": "rep-003",
      "old": "中山レンタカー",
      "new": "滝本レンタカー",
      "section": "スクリーニング編 - ROE"
    }
  ]
}
```

### 🔹 ラベル追加（挿入）

```json
{
  "label_additions": [
    {
      "id": "label-001",
      "type": "column",
      "target": "会社の利益は誰のものか",
      "insert_before": "<p><strong>会社の利益は誰のものか？</strong></p>",
      "insert_html": "<span class=\"section-label label-column\">コラム</span>",
      "parent": "<div class=\"info-box\">"
    },
    {
      "id": "label-002",
      "type": "essence",
      "target": "成長が予想されていれば、すでに織り込み済み",
      "insert_before": "<h4>成長が予想されていれば、すでに織り込み済み</h4>",
      "insert_html": "<span class=\"section-label label-essence\">本質</span>",
      "parent": "<div class=\"highlight-box\">"
    },
    {
      "id": "label-003",
      "type": "essence",
      "target": "100%信じられる指標は存在しない",
      "insert_before": "<h4>重要：100%信じられる指標は存在しない</h4>",
      "insert_html": "<span class=\"section-label label-essence\">本質</span>",
      "parent": "<div class=\"highlight-box\">"
    },
    {
      "id": "label-004",
      "type": "essence",
      "target": "指標は道具であり万能ではない",
      "insert_before": "<h3>指標は道具であり、万能ではない</h3>",
      "insert_html": "<span class=\"section-label label-essence\">本質</span>",
      "parent": "<div class=\"highlight-box\">"
    },
    {
      "id": "label-005",
      "type": "essence",
      "target": "PERは絶対値では判断できない",
      "insert_before": "<h4>PERは絶対値では判断できない</h4>",
      "insert_html": "<span class=\"section-label label-essence\">本質</span>"
    },
    {
      "id": "label-006",
      "type": "column",
      "target": "東証のPBR改革",
      "insert_before": "<p><strong>東証のPBR改革</strong></p>",
      "insert_html": "<span class=\"section-label label-column\">コラム</span>",
      "parent": "<div class=\"info-box\">"
    },
    {
      "id": "label-007",
      "type": "column",
      "target": "ROE 8%が基準なのよ",
      "insert_before": "<p><strong>ROE 8%が基準なのよ</strong></p>",
      "insert_html": "<span class=\"section-label label-column\">コラム</span>",
      "parent": "<div class=\"info-box\">"
    },
    {
      "id": "label-008",
      "type": "column",
      "target": "企業がROEを改善する方法",
      "insert_before": "<p><strong>企業がROEを改善する方法 ー アクティビスト投資家の視点</strong></p>",
      "insert_html": "<span class=\"section-label label-column\">コラム</span>",
      "parent": "<div class=\"info-box\">"
    },
    {
      "id": "label-009",
      "type": "essence",
      "target": "ビジネスモデルの理解",
      "insert_before": "<h3>ビジネスモデルの理解 ー 誰からお金をもらっているのか</h3>",
      "insert_html": "<span class=\"section-label label-essence\">本質</span>"
    },
    {
      "id": "label-010",
      "type": "essence",
      "target": "収益構造の深掘り",
      "insert_before": "<h3>収益構造の深掘り ー 何が成長ドライバーなのか</h3>",
      "insert_html": "<span class=\"section-label label-essence\">本質</span>"
    },
    {
      "id": "label-011",
      "type": "essence",
      "target": "IR取材の重要性",
      "insert_before": "<h3>IR取材の重要性 ー 一次情報を取りに行く</h3>",
      "insert_html": "<span class="section-label label-essence">本質</span>",
      "parent": "<div class=\"highlight-box\">"
    }
  ]
}
```

### 🔹 書籍の星付け

```json
{
  "book_ratings": [
    {"id": "IMG_1278.JPG", "name": "デイトレチャート大全", "priority": 1},
    {"id": "book_new1.png", "name": "株式投資の基礎", "priority": 1},
    {"id": "IMG_1276.JPG", "name": "ミクロ経済の力", "priority": 1},
    {"id": "IMG_1273.JPG", "name": "金利が上がると", "priority": 2},
    {"id": "IMG_1287.JPG", "name": "マンキュー Ⅰ", "priority": 2},
    {"id": "IMG_1288.JPG", "name": "マンキュー Ⅱ", "priority": 2}
  ]
}
```

### 🔹 分数表示への変換

```json
{
  "formula_conversions": [
    {
      "id": "formula-001",
      "old": "<p><strong>PER = 株価 ÷ 1株あたり純利益(EPS)</strong></p>",
      "new": "<p class=\"formula-inline\"><strong>PER = </strong><span class=\"fraction\"><span class=\"numerator\">株価</span><span class=\"denominator\">1株あたり純利益(EPS)</span></span></p>"
    },
    {
      "id": "formula-002",
      "old": "<p>または、<strong>PER = 時価総額 ÷ 純利益</strong></p>",
      "new": "<p class=\"formula-inline\">または、<strong>PER = </strong><span class=\"fraction\"><span class=\"numerator\">時価総額</span><span class=\"denominator\">純利益</span></span></p>"
    },
    {
      "id": "formula-003",
      "old": "<p><strong>PBR = 株価 ÷ 1株あたり純資産(BPS)</strong></p>",
      "new": "<p class=\"formula-inline\"><strong>PBR = </strong><span class=\"fraction\"><span class=\"numerator\">株価</span><span class=\"denominator\">1株あたり純資産(BPS)</span></span></p>"
    },
    {
      "id": "formula-004",
      "old": "<p><strong>ROE = (純利益÷売上) × (売上÷総資産) × (総資産÷自己資本)</strong></p>",
      "new": "<p class=\"formula-inline\"><strong>ROE = </strong><span class=\"fraction\"><span class=\"numerator\">純利益</span><span class=\"denominator\">売上</span></span> × <span class=\"fraction\"><span class=\"numerator\">売上</span><span class=\"denominator\">総資産</span></span> × <span class=\"fraction\"><span class=\"numerator\">総資産</span><span class=\"denominator\">自己資本</span></span></p>"
    }
  ]
}
```

### 🔹 大規模な構成変更（要注意）

#### 1. トヨタと日産の比較を質問形式に

**元のHTMLパターン:**
```html
<div class="info-box">
    <p><strong>具体例：トヨタと日産を比較してみよう</strong></p>
    <!-- ... 元の内容 ... -->
</div>
```

**新しいHTML:**
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

#### 2. 織り込み済み + 矢印 + 市場とのギャップ

**「成長が予想されていれば、すでに織り込み済み」のhighlight-boxの直後に挿入:**

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

#### 3. 価格弾力性の説明追加

**「シャンパン：景気が良くなると...」の後、「結果：」の前に挿入:**

```html
<p style="margin-top: 15px;"><strong>これが「価格弾力性」の違いです</strong></p>
<p>経済学では、これを<strong>価格弾力性</strong>と呼びます。</p>
<ul>
    <li><strong>価格弾力性が低い（非弾力的）</strong>：歯磨きチューブのように、景気や価格が変わっても需要があまり変わらない商品</li>
    <li><strong>価格弾力性が高い（弾力的）</strong>：シャンパンのように、景気や価格が変わると需要が大きく変動する商品</li>
</ul>
<p>価格弾力性が低い商品を扱う企業は、<strong>業績が安定しやすい</strong>ため、投資家は高いPERでも買います。<br>逆に、価格弾力性が高い商品を扱う企業は、<strong>業績が不安定</strong>なため、投資家はリスクを織り込んで低いPERでないと買いません。</p>
```

#### 4. 財務諸表の説明を詳細化

**「財務3表の基本：PL・BS・CSとは？」の最初のpタグの前に挿入:**

```html
<p><strong>そもそも財務諸表って何？</strong></p>
<p>財務諸表とは、企業の経営状態を数字で表した報告書です。<strong>上場企業はすべて財務諸表を公開する義務</strong>があります。</p>
<p><strong>なぜ公開するのか？</strong><br>株主や投資家を守るためです。企業がどれだけ儲けているのか、財務状況は健全か、お金の流れはどうかを透明にすることで、投資家が正しい判断をできるようにしています。<br>上場していない企業は公開義務がありませんが、上場企業は四半期ごとに必ず公開します。</p>
```

#### 5. 減価償却をコラム化＋充実

**元の「減価償却：3表の繋がりを最もよく示す概念」のhighlight-boxを置き換え:**

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

#### 6. PERの正しい使い方を縦並びに

**変更前:**
```html
<h4>PERの正しい使い方</h4>
<div class="card-grid">
    <!-- cards -->
</div>
```

**変更後:**
```html
<h4>PERの正しい使い方</h4>
<div class="vertical-cards">
    <!-- cards -->
</div>
```

#### 7. 19の隠れたインサイトを縦羅列に

**「19の隠れたインサイトマトリックス」セクション全体（マトリックスHTMLを含む）を削除し、以下のシンプルなリストに置き換え:**

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
    <!-- 以下②〜⑲まで同様の構造 -->
</div>
```

---

## 🛠️ 実装方法の提案

### オプション1: 段階的な手動実装
1. 上記の変更リストを見ながら
2. VSCodeなどで検索・置換機能を使って
3. 1つずつ確実に実装

### オプション2: Pythonスクリプトで一括実行
- この指示書を元にスクリプトを作成
- 各変更ごとにバックアップを取りながら実行
- エラーが出たら前の状態に戻す

### オプション3: セクションごとに分割
1. education.htmlを大きなセクションごとに分割
2. セクションごとに変更を適用
3. 最後に結合

---

## ⚠️ 注意事項

- **必ずバックアップを取る**: 各大きな変更の前に`cp education.html education.html.backup`
- **セクションを壊さない**: 正規表現は慎重に。`</section>`を誤って削除しない
- **段階的に確認**: 1つの変更グループ（削除、ラベル追加など）ごとにブラウザで確認
- **スクリーニング編に注意**: 前回スクリーニング編が消えた。PER/PBR/ROEのセクションは特に慎重に

