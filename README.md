# marketing-consulting-hp

有限会社K.OTSUKA（茨城県つくば市）のコーポレートサイト・リニューアル案。
社名・代表者名・所在地・電話・FAX・メール・代表の経歴は実データ（2026-11-27 掲載許可済み）。
素の HTML / CSS / JS のみ。ビルド不要で GitHub Pages にそのまま置ける構成です。

## ページ構成

| ファイル | 内容 |
|---|---|
| `index.html` | トップ（ローディング → KV のキー演出「上昇線」→ コンセプト → サービス → 体制と数字 → 事例 → お知らせ → CTA） |
| `about.html` | はじめての方へ（代表あいさつ・三つの習慣・プロフィール） |
| `service.html` | サービス（コンサルティング／プロモーション／マーケティング・料金の目安・流れ・FAQ） |
| `works.html` | 導入事例（6件） |
| `company.html` | 会社概要・アクセス |
| `contact.html` / `thanks.html` | お問い合わせフォーム（デモ）／送信完了 |
| `privacy.html` | プライバシーポリシー（サンプル文面） |
| `logo.html` | ロゴ案（シンボル共通・社名10書体の比較。サイトは案01 Cormorant Garamond を採用） |
| `assets/style.css` / `assets/main.js` | 共通スタイル・スクリプト |

## 本番化の前に差し替えるもの（ソース内の「要差替」コメント）

- お知らせ（サンプル）
- 料金は現行サイトの金額を転記済み。52,500円・63,000円・262,500円などは消費税5%時代の税込額の可能性があるため、現行税率で確認（`service.html` の「要確認」コメント）
- 代表あいさつ（現行サイトの趣旨をもとに書き直した案。代表ご本人の確認が必要）
- 代表者写真（`.portrait` のプレースホルダ）
- 本番ドメインに移すときは canonical / og:url / JSON-LD の url を `https://www.k-otsuka.com/` に変更
- お問い合わせフォームの送信先（`contact.html` の `action` と `data-demo="true"`）
- 全ページの `<meta name="robots" content="noindex, nofollow">` を削除
- フッターの「デザインサンプルです」注記を削除
- プライバシーポリシーは専門家の確認を受ける

## デザイン

- 高級感版：生成り＋濃紺 `#0f1d30`＋金 `#b8955a`、見出しは Shippori Mincho、ロゴ社名は Cormorant Garamond
- 背景に金の七宝柄（地紋）を薄く重ねる。ロゴ書体を変えるときは `assets/style.css` の `--font-latin` と各ページの Google Fonts の読み込みを変更

## ローカル確認

```
python -m http.server 3120
```

http://localhost:3120/ を開く。
