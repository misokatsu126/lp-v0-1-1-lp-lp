# まずここを見てください

## 今の状態

- LP本体は作成済みです。
- ブランド基本情報に沿って「MUSUBU / 人と人を結ぶ、健康づくりの輪」を軸にした公式サイト初期版へ更新済みです。
- 現在は、余白の広いウェルビーイングLPの空気感を参考にしながら、あわじ結び・食・動・美・心が静かに伝わる全面リデザイン版です。
- Heroは複数の静かな写真が6〜8秒ごとにクロスフェードする構成です。
- 写真順は「明るい食卓 → 明るい手元 → 影のある休息 → 明るい運動 → 明るい交流」です。
- 提供ロゴを入れ、ヘッダー・フッター・装飾モチーフに反映しています。
- 現在は、カードや説明ブロックを減らし、余白・写真・文字組みで見せるブランドサイト寄りの構成です。
- スクロール時に写真・見出し・本文が静かに現れ、Heroの重なり写真には控えめな奥行きとパララックス風の動きを入れています。
- 見出しに Zen Kaku Gothic New、本文に Noto Sans JP を優先し、細いウェイト、広い行間、詩的な改行で文字組みを整えています。
- Next.js / TypeScript / Tailwind CSS のプロジェクトとして動く状態です。
- `npm run lint` と `npm run build` は確認済みです。
- GitHubに上げる準備として `.gitignore` も入っています。
- Codex側の権限制限でコミット操作は止まりましたが、通常のWindowsユーザーやGitHub Desktopからは進められます。

## すぐ画面を見たい場合

このファイルと同じ場所にある `preview.html` をダブルクリックしてください。

これはサーバーを起動しなくても見られる確認用ページです。
本番用のNext.js版と完全に同じ仕組みではありませんが、見た目と内容の確認には使えます。

## Next.jsとして見たい場合

ターミナルでこのフォルダを開いて、以下を実行します。

```bash
npm install
npm run build
npm run start
```

その後、ブラウザで以下を開きます。

```text
http://localhost:3000
```

もし `npm` が見つからないと言われたら、Node.js LTSを入れてください。

## GitHubへ上げる一番簡単な方法

GitHub Desktopを使うのが一番簡単です。

1. GitHub Desktopを開く
2. GitHubアカウントでログインする
3. `File` → `Add local repository...` を押す
4. このフォルダを選ぶ

```text
C:\Users\Misokatsu\Documents\Codex\2026-05-10\lp-v0-1-1-lp-lp
```

5. 変更一覧が出たら、左下のSummaryに以下を入力する

```text
Initial LP implementation
```

6. `Commit to main` を押す
7. 右上の `Publish repository` を押す
8. Repository name を `musubu-lp` などにする
9. 公開したくなければ `Keep this code private` にチェックを入れる
10. `Publish repository` を押す

これでGitHubにアップできます。

## 主な編集場所

- LP本文：`app/page.tsx`
- 確認用HTML：`preview.html`
- 写真枠・余白・色・軽いフェードイン・写真のゆるやかなズーム：`app/globals.css`
- Hero写真：`public/images/hero-table.png`、`hero-rice.png`、`hero-rest.png`、`hero-movement.png`、`hero-community.png`
- ロゴ：`public/images/logo-musubu-original.jpg`、`logo-musubu-mark.png`、`logo-musubu-full.png`
- 起動方法：`README.md`
