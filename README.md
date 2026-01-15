# Blind Side

**見ないから、勝てる。**

感情に左右されない投資を実現するBlind Mode投資ツール

## プロジェクト概要

Blind Sideは、投資家の最大の敵である「感情」をコントロールするためのツールです。損益を意図的に見えなくすることで、感情に左右されない合理的な投資判断を支援します。

詳細な仕様書は [docs/blind-side-spec.md](./docs/blind-side-spec.md) を参照してください。

## 技術スタック

- **フロントエンド**: Next.js 15 (App Router), React 19, TypeScript
- **UIライブラリ**: shadcn/ui, Radix UI, Tailwind CSS
- **バックエンド**: Next.js API Routes, tRPC
- **データベース**: PostgreSQL (Neon)
- **ORM**: Prisma
- **認証**: Clerk
- **デプロイ**: Vercel

## セットアップ手順

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example`を`.env`にコピーして、以下の環境変数を設定してください:

```bash
cp .env.example .env
```

#### Neon DB（PostgreSQL）

1. [Neon](https://neon.tech)でアカウント作成
2. 新しいプロジェクトとデータベースを作成
3. 接続文字列を`.env`の`DATABASE_URL`に設定

```env
DATABASE_URL="postgresql://username:password@ep-xxx.region.aws.neon.tech/blind_side?sslmode=require"
```

#### Clerk認証

1. [Clerk](https://clerk.com)でアカウント作成
2. 新しいアプリケーションを作成
3. APIキーを`.env`に設定

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
```

#### アプリURL

```env
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. データベースのマイグレーション

Neon DBの接続が完了したら、Prismaマイグレーションを実行:

```bash
npx prisma migrate dev --name init
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3000 でアプリケーションにアクセスできます。

## Week 1-2 実装状況

### ✅ 完了したタスク

- [x] Next.js 15プロジェクト作成
- [x] 技術スタックのインストール（shadcn/ui, Prisma, Clerk等）
- [x] Prisma Schemaの実装
- [x] Clerk認証の統合
- [x] tRPC初期設定
- [x] ベースレイアウト・ナビゲーション実装

### ⏳ 次のステップ（ユーザー対応が必要）

- [ ] Neon DBセットアップ（環境変数の設定）
- [ ] DB migration実行（`npx prisma migrate dev --name init`）

### 🎯 次回の実装（Week 3-4）

- ポートフォリオ管理機能
- Blind Mode機能
- Yahoo Finance API統合
- 通知機能

## プロジェクト構造

```
blind-side/
├── app/                      # Next.js App Router
│   ├── api/                 # API Routes
│   │   └── trpc/           # tRPC endpoints
│   ├── portfolio/          # ポートフォリオページ
│   ├── badges/             # バッジページ
│   ├── settings/           # 設定ページ
│   ├── sign-in/            # ログインページ
│   ├── sign-up/            # サインアップページ
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ホームページ
│   └── globals.css         # グローバルスタイル
├── components/              # Reactコンポーネント
│   ├── ui/                 # shadcn/uiコンポーネント
│   └── Navigation.tsx      # ナビゲーション
├── lib/                     # ユーティリティ
│   ├── prisma.ts           # Prismaクライアント
│   ├── trpc/               # tRPC設定
│   └── utils.ts            # ヘルパー関数
├── prisma/                  # Prismaスキーマ
│   └── schema.prisma       # データベーススキーマ
├── server/                  # サーバーサイドコード
│   ├── routers/            # tRPCルーター
│   └── trpc/               # tRPC設定
└── docs/                    # ドキュメント
    └── blind-side-spec.md  # 仕様書
```

## 利用可能なスクリプト

- `npm run dev` - 開発サーバー起動
- `npm run build` - プロダクションビルド
- `npm run start` - プロダクションサーバー起動
- `npm run lint` - ESLint実行
- `npx prisma studio` - Prisma Studio起動（DB管理UI）
- `npx prisma migrate dev` - マイグレーション作成・実行
- `npx prisma generate` - Prismaクライアント生成

## トラブルシューティング

### データベース接続エラー

`.env`ファイルの`DATABASE_URL`が正しく設定されているか確認してください。

### Clerk認証エラー

Clerk環境変数（`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`と`CLERK_SECRET_KEY`）が正しく設定されているか確認してください。

### tRPCエラー

開発サーバーを再起動してください:

```bash
npm run dev
```

## 関連リンク

- [仕様書](./docs/blind-side-spec.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [shadcn/ui](https://ui.shadcn.com/)

## ライセンス

Private - All Rights Reserved
