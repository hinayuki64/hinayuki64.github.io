# Researcher Homepage

GitHub Pages 向けの研究者ホームページひな型です。

## 公開方法

1. このリポジトリを GitHub に push する（リポジトリ名: `hinayuki64.github.io`）
2. GitHub リポジトリの **Settings → Pages** を開く
3. **Source** を `Deploy from a branch`、**Branch** を `main` / `/ (root)` に設定
4. 数分後、`https://hinayuki64.github.io` で公開されます

## カスタマイズ

| ファイル | 内容 |
|---------|------|
| `index.html` | 名前・所属・論文・経歴などのテキスト |
| `css/style.css` | 色・フォント（`:root` の CSS 変数を変更） |
| `assets/profile.svg` | プロフィール写真（`profile.jpg` 等に差し替え可） |

### 主な編集ポイント

- **Your Name** → 自分の名前に置換（全文検索がおすすめ）
- **your.email@example.ac.jp** → 連絡先メールアドレス
- **論文リスト** → `<article class="pub-item">` ブロックをコピーして追加
- **CV (PDF)** → `assets/cv.pdf` を置いてリンクを更新

## ローカル開発（ホットリロード）

ファイルを保存するとブラウザが自動でリロードされます。

```bash
npm install
npm run dev
```

http://localhost:8000 が開き、`index.html` / `css/` / `js/` / `assets/` の変更を監視します。

ビルド不要の静的サイトなので、GitHub Pages への公開には `node_modules` は不要です（push しなくて OK）。

## 構成

```
.
├── index.html      # メインページ
├── css/style.css   # スタイル
├── js/main.js      # ナビ・論文フィルター
├── assets/         # 画像・PDF など
├── package.json    # 開発用（ホットリロード）
└── README.md
```

## ライセンス

テンプレート部分は自由に改変・利用できます。
