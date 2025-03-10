# みりーのねこ通信

[みりーのねこ通信](https://miry.cat)のソースコードリポジトリへようこそ！

## サイト概要

みりーのねこ通信は、猫に関する情報や日常を共有するウェブサイトです。猫の写真、日常の出来事、猫と暮らすヒントなどを発信しています。

## 技術スタック

このサイトは以下の技術を使用して構築されています：

- [Solid.js](https://solidjs.com) - 高速で軽量なリアクティブJSフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全なJavaScript
- [Vite](https://vitejs.dev/) - 次世代フロントエンドツール
- [Bootstrap](https://getbootstrap.com/) - レスポンシブなUIコンポーネント

## 開発方法

### 必要条件

- Node.js 18以上
- pnpm（推奨）、npm、またはyarn

### インストール

```bash
# 依存関係のインストール
pnpm install
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて開発中のサイトを確認できます。

### ビルド

```bash
# 本番用にビルド
pnpm build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

## デプロイ

`dist` フォルダを静的ホスティングサービス（Netlify、Vercel、GitHub Pagesなど）にデプロイできます。

## ライセンス

このプロジェクトは[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/)の下でライセンスされています。

- **表示（Attribution）**: 作品のクレジットを表示する必要があります
- **非営利（NonCommercial）**: 商業目的での使用は許可されていません
- **継承（ShareAlike）**: 改変した場合は、元の作品と同じライセンスで公開する必要があります