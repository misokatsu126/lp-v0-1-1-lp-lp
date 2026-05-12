# 一般社団法人 結 LP

一般社団法人 結（むすぶ）の1ページLPです。Next.js + TypeScript + Tailwind CSSで作成しています。

## 現在のデザインについて

ブランド基本情報に基づき、「人と人を結ぶ、健康づくりの輪」を中心コピーにした公式サイト初期版です。
今回の全面リデザインでは、余白の広いウェルビーイングLPの空気感を参考にしながら、MUSUBU独自の「あわじ結び」「食・動・美・心」「4色の結び紐」が静かに伝わる構成へ整理しています。
Heroでは静かな写真が6〜8秒ごとにクロスフェードし、軽くズームしながら切り替わります。
写真順は「明るい食卓 → 明るい手元 → 影のある休息 → 明るい運動 → 明るい交流」です。

- 正式名称：一般社団法人 結
- 読み：むすぶ
- 英字・ブランド名：MUSUBU
- 設立日：2024年7月29日
- 理事長：渡邉裕子
- コアコピー：人と人を結ぶ、健康づくりの輪

食・動・美・心の4要素と、あわじ結びを想起させる柔らかい線・輪をデザイン要素にしています。架空の実績、住所、電話番号は掲載していません。
提供ロゴを `public/images/logo-musubu-original.jpg` として保管し、表示用に `logo-musubu-mark.png` と `logo-musubu-full.png` を作成しています。

## 起動方法

Node.js 20.9以上を想定しています。

```bash
npm install
npm run dev
```

起動後、ブラウザで `http://localhost:3000` を開いてください。

## すぐ見たい場合

サーバーを起動せずに確認したい場合は、`preview.html` をブラウザで開いてください。
これは確認用の静的HTMLです。本番用の編集は `app/page.tsx` で行います。

## 主な編集ファイル

- `app/page.tsx`：LP本文、ナビゲーション、各セクションの内容
- `preview.html`：サーバーなしで見られる確認用HTML
- `app/globals.css`：余白、背景、あわじ結び風の線、4色表現、スクロール時の軽いフェードイン、レスポンシブ調整
- `tailwind.config.ts`：色、影などのデザイントークン
- `next.config.mjs`：Next.jsのビルド設定
- `public/images/`：Heroと写真セクションで使う仮写真
- `public/images/logo-musubu-*.png`：実ロゴから作成した表示用ロゴ素材

## 差し替えポイント

- お問い合わせ先：現在は `準備中` 表記です。公開用メールアドレスやフォームURLが決まり次第、`app/page.tsx` の CONTACT セクションを差し替えてください。
- 所在地・電話番号：未確定のため掲載していません。公開情報が決まってから追加してください。
- 写真：現在は生成した仮写真を `public/images/hero-table.png`、`hero-rice.png`、`hero-rest.png`、`hero-movement.png`、`hero-community.png` に入れています。実写真が用意できたら同じファイル名で差し替えるか、`app/page.tsx` の `heroImages` と `quietPhotos` を更新してください。
