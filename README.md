# marketing-consulting-hp

販売促進・マーケティング・営業コンサルティング会社のコーポレートサイト（リニューアル案・デザインサンプル）。
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
| `assets/style.css` / `assets/main.js` | 共通スタイル・スクリプト |

## 本番化の前に差し替えるもの（ソース内の「要差替」コメント）

- 社名・代表者名・所在地・電話・FAX・メール（すべて架空の値）
- 料金・数値（25年／120件／15業種）・導入事例・お知らせ・代表の経歴
- 代表者写真（`.portrait` のプレースホルダ）、地図（`company.html` の `.map` を Google マップの iframe に）
- お問い合わせフォームの送信先（`contact.html` の `action` と `data-demo="true"`）
- 全ページの `<meta name="robots" content="noindex, nofollow">` を削除
- フッターの「デザインサンプルです」注記を削除
- プライバシーポリシーは専門家の確認を受ける

## ローカル確認

```
python -m http.server 3120
```

http://localhost:3120/ を開く。
