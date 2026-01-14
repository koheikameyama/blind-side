# Blind Side 仕様書

**作成日**: 2026-01-15
**バージョン**: 1.0
**ステータス**: 設計フェーズ
**リポジトリ**: https://github.com/koheikameyama/blind-side.git

---

## 目次

1. [プロジェクト概要](#1-プロジェクト概要)
2. [プロダクトビジョン](#2-プロダクトビジョン)
3. [MVP機能定義（Phase 1）](#3-mvp機能定義phase-1)
4. [技術スタック](#4-技術スタック)
5. [アーキテクチャ設計](#5-アーキテクチャ設計)
6. [実装タイムライン](#6-実装タイムライン)
7. [stock-analyzerとの差別化](#7-stock-analyzerとの差別化)
8. [将来の拡張（Phase 2以降）](#8-将来の拡張phase-2以降)

---

## 1. プロジェクト概要

### 1.1 プロダクト名

**Blind Side（ブラインドサイド）**

**名前の由来**:
- **Blind**: 見えない、盲目的
- **Side**: 裏側、隠された側面
- **意味**: 「見えない強み」「盲点を突く」

### 1.2 キャッチコピー

> **「見ないから、勝てる。」**

### 1.3 コンセプト

投資家の最大の敵は「感情」です。含み損を見て恐怖で売却し、含み益を見て早期利確してしまう。Blind Sideは、**損益を意図的に見えなくする**ことで、感情に左右されない合理的な投資判断を支援するツールです。

**コアアイデア**:
- 📊 **損益を非表示**: 購入後、目標達成まで株価・含み損益を隠す
- 🎯 **ルールベース投資**: 購入前に決めた利確・損切りルールに従う
- 🧘 **メンタルの平穏**: 毎日株価をチェックするストレスから解放
- 🎮 **ゲーミフィケーション**: バッジ・励ましで継続をサポート

### 1.4 なぜ今作るのか

**背景**:
- 当初、Blind Sideは「stock-analyzer」の将来機能として位置づけられていた
- しかし、**個人開発であればリソース制約は同じ**
- **作りたいものを作る**という原則に立ち返り、別リポジトリで開発を決定

**メリット**:
- ✅ 独立したブランド構築が可能
- ✅ 異なるターゲット層（中級〜上級者）に訴求
- ✅ 高価格帯（¥9,800-¥29,800）での収益化
- ✅ 技術的実験の場として活用
- ✅ モチベーション維持（作りたいものを作る）

---

## 2. プロダクトビジョン

### 2.1 ターゲットユーザー

**メインターゲット**: 中級〜上級の個人投資家

```
ペルソナ:
  名前: 田中太郎（35歳）
  職業: IT企業勤務
  投資歴: 3年
  資産: 投資額500万円

  悩み:
    ├─ 「損切りルールを決めても守れない」
    ├─ 「含み益が出ると怖くてすぐ利確してしまう」
    ├─ 「毎日株価をチェックして一喜一憂している」
    └─ 「感情に左右されず、機械的に投資したい」

  目標:
    └─ 年利10-15%を安定的に達成したい
```

**サブターゲット**:
- 初心者でも「感情コントロール」に興味がある層
- 行動経済学に関心がある投資家
- ゲーミフィケーション要素を楽しめる層

### 2.2 解決する課題

#### 課題1: プロスペクト理論による非合理的行動

```
【人間の心理的傾向】

損失回避バイアス:
  含み損 -10%: 「まだ戻るかも...」（塩漬け）
  含み損 -30%: 「もう耐えられない！」（最悪のタイミングで売却）

確実性効果:
  含み益 +5%: 「利益が消えるのが怖い」（早期利確）
  含み益 +50%になるチャンスを逃す

毎日チェックの弊害:
  株価を見る → 一喜一憂 → ストレス → 非合理的な判断
```

#### 課題2: 自己コントロールの限界

```
投資前の自分:
  「損切りは-10%で！利確は+20%まで待つ！」

投資後の自分:
  含み損 -5%: 「まだ大丈夫...」
  含み損 -15%: 「ここまで来たら戻るまで待つ...」
  含み益 +3%: 「もう利確しちゃおう！」

→ ルールを守れない
```

### 2.3 独自の価値提案

**Blind Sideが提供する価値**:

```
1. 感情の排除
   └─ 損益を見せない = 感情が動かない

2. ルールへの強制力
   └─ 「解除不可モード」で自分を拘束

3. メンタルの平穏
   └─ 毎日チェック不要 = ストレスフリー

4. ゲーム化された体験
   └─ バッジ・励まし = 楽しく続けられる

5. プロトレーダーの手法を民主化
   └─ 機関投資家の訓練法「ブラインドトレード」を個人に
```

**差別化ポイント**:

| 要素 | 従来ツール | Blind Side |
|------|-----------|-----------|
| データ表示 | すべて表示 | **損益を隠す** |
| 感情対策 | なし | **積極的サポート** |
| ルール順守 | 自己管理 | **強制力あり** |
| 体験 | ストレス | **ゲーム化** |
| 価格帯 | ¥0-¥2,980 | **¥9,800-¥29,800** |

---

## 3. MVP機能定義（Phase 1）

### 3.1 Phase 1スコープ

**実装する機能**: Blind Mode（コア機能）のみ
**実装しない機能**: オルタナティブデータ（採用動向、SNS分析など）

**理由**:
- ✅ 法的リスクが低い（スクレイピング不要）
- ✅ データコストゼロ
- ✅ 実装期間が短い（3-4週間）
- ✅ コンセプトの尖りを維持
- ✅ MVP検証に集中できる

### 3.2 Blind Mode機能詳細

#### 3.2.1 ポートフォリオ管理

**機能**:
- 保有銘柄の登録・管理
- 購入日、購入価格、購入数量の記録
- 銘柄の基本情報表示（企業名、銘柄コード）

**UI例**:
```
┌─────────────────────────────────────┐
│ ポートフォリオ                        │
├─────────────────────────────────────┤
│ [+ 新規銘柄を追加]                   │
├─────────────────────────────────────┤
│ トヨタ自動車（7203）                 │
│ 購入日: 2026-01-10                   │
│ 購入株数: 100株                      │
│ [詳細を見る]                         │
├─────────────────────────────────────┤
│ ソニーグループ（6758）               │
│ 購入日: 2026-01-05                   │
│ 購入株数: 50株                       │
│ [詳細を見る]                         │
└─────────────────────────────────────┘

※ 現在価格・含み損益は非表示
```

#### 3.2.2 Blind Mode設定

**購入時の設定フロー**:

```
【Step 1: 銘柄選択】
  銘柄コード入力: 7203
  銘柄名: トヨタ自動車

【Step 2: 購入情報入力】
  購入価格: ¥3,000
  購入株数: 100株
  購入日: 2026-01-10

【Step 3: 出口戦略設定】
  利確条件: +20% （目標価格: ¥3,600）
  損切り条件: -10% （損切り価格: ¥2,700）

【Step 4: Blind Mode設定】
  ☑️ Blind Modeで運用する
      └─ 損益を非表示にし、条件達成まで隠します

  ☑️ 解除不可モードを有効にする（オプション）
      └─ 条件達成まで解除できません
      └─ 強制解除にはペナルティ ¥1,000

  [ キャンセル ] [ この条件で購入 ]
```

#### 3.2.3 Blind Mode運用中の表示

**通常モード（従来型）**:
```
┌──────────────────────────────────┐
│ トヨタ自動車（7203）              │
├──────────────────────────────────┤
│ 現在価格: ¥2,850 (-¥150, -5.0%) │ ← ストレス源
│ 購入価格: ¥3,000                 │
│ 含み損益: -¥15,000 😱            │ ← 恐怖
├──────────────────────────────────┤
│ [売却] [追加購入]               │
└──────────────────────────────────┘
```

**Blind Mode**:
```
┌──────────────────────────────────┐
│ 🔒 トヨタ自動車（7203）運用中    │
├──────────────────────────────────┤
│ 購入日: 2026-01-10               │
│ 経過日数: 15日                   │
│                                  │
│ 📊 目標達成度                    │
│ ▓▓▓▓▓░░░░░░░░░░░░░░░ 25%       │
│                                  │
│ 🎯 利確条件: +20%                │
│ 🛡️  損切り条件: -10%             │
│                                  │
│ ステータス: 🟢 運用継続中        │
│ （条件達成時に自動通知します）   │
├──────────────────────────────────┤
│ [⚙️ 設定確認] [❓ ヘルプ]        │
│                                  │
│ ※ 現在価格・含み損益は非表示     │
└──────────────────────────────────┘

💬 応援メッセージ:
   「15日間お疲れ様です！
    長期投資家への道を歩んでいます 🏃」
```

**表示する情報**:
- ✅ 銘柄名、銘柄コード
- ✅ 購入日、経過日数
- ✅ 利確・損切り条件
- ✅ 目標達成度（プログレスバー）
- ✅ 励ましメッセージ

**表示しない情報**:
- ❌ 現在価格
- ❌ 含み損益（金額・パーセント）
- ❌ 株価チャート
- ❌ 最新ニュース（感情を動かす情報）

#### 3.2.4 目標達成度の表示ロジック

```
【計算ロジック】

利確条件: +20%
損切り条件: -10%
現在の騰落率: +5%

目標達成度の計算:
  ├─ プラス側の進捗: 5% / 20% = 25%
  ├─ マイナス側の進捗: 表示しない（不安を煽るため）
  └─ プログレスバーは利確側のみ表示

表示:
  ▓▓▓▓▓░░░░░░░░░░░░░░░ 25%
  「目標まであと+15%！」
```

**ポイント**:
- プラス圏内の場合のみ進捗を表示
- マイナス圏内の場合は「運用継続中」とだけ表示
- 損切りに近づいても具体的な数値は見せない（恐怖を避ける）

#### 3.2.5 通知機能

**通知タイミング**:

```
【条件達成時】
  🎉 「トヨタ自動車、+22%で利確条件達成！」
     「売却しますか？」
     [ 今すぐ売却 ] [ もう少し待つ ]

【損切り条件達成時】
  ⚠️ 「トヨタ自動車、損切り条件に達しました」
     「損失を確定しますか？」
     [ 損切りする ] [ 待つ（非推奨）]

【定期励まし】
  7日目: 🎊 「1週間達成！握力が鍛えられています」
  30日目: 🏆 「1ヶ月達成！長期投資家の仲間入りです」
  90日目: 💎 「3ヶ月達成！マスター投資家です」
```

#### 3.2.6 解除不可モード（オプション機能）

**仕組み**:

```
【設定時の警告】
  ⚠️ 解除不可モードを有効にしますか？

  このモードを有効にすると:
    ├─ 条件達成まで Blind Mode を解除できません
    ├─ 株価・損益の確認ができなくなります
    ├─ 強制解除にはペナルティ ¥1,000 がかかります

  この制約により、感情的な判断を防ぎます。

  [ キャンセル ] [ 理解して有効にする ]

【運用中の解除試行】
  ユーザー: 「Blind Modeを解除したい」

  システム:
    ⚠️ 解除不可モードが有効です

    運用開始から 20日 が経過しました。
    目標達成まであと少しです。

    どうしても解除する場合、¥1,000 のペナルティが
    発生します。これまでの努力が水の泡になります。

    [ やっぱりやめる ] [ ¥1,000払って解除 ]
```

**効果**:
- 「ユリシーズの契約」（自分で自分を拘束）
- 心理的ハードルでルール順守を強制
- ゲーム感覚で挫折を防ぐ

#### 3.2.7 ゲーミフィケーション

**バッジシステム**:

```
🥉 鉄の意志 Bronze
   「Blind Modeで7日間運用」

🥈 鉄の意志 Silver
   「Blind Modeで30日間運用」

🥇 鉄の意志 Gold
   「Blind Modeで90日間運用」

💎 マスター投資家
   「Blind Modeで5回以上利確成功」

🧘 禅の境地
   「運用中に詳細画面を1度も開かなかった」

🔥 連続達成
   「連続して3回利確成功」

🎯 完璧主義者
   「設定した条件ピッタリで利確」
```

**進捗トラッキング**:
```
┌─────────────────────────────────────┐
│ 🏆 あなたの実績                      │
├─────────────────────────────────────┤
│ 獲得バッジ: 3個                      │
│ 🥉 🥈 💎                             │
│                                      │
│ 現在の挑戦:                          │
│ 🥇 鉄の意志 Gold                     │
│ ▓▓▓▓▓▓░░░░░░░░░░░░░░ 35/90日      │
│                                      │
│ 統計:                                │
│ ├─ Blind Mode利用回数: 8回          │
│ ├─ 平均運用日数: 42日                │
│ ├─ 利確成功: 5回                     │
│ └─ 損切り: 3回                       │
└─────────────────────────────────────┘
```

### 3.3 除外する機能（Phase 2以降）

**Phase 1では実装しない**:

```
❌ オルタナティブデータ分析
   ├─ 採用動向スコア（Wantedly等）
   ├─ 社長SNS分析（X、note）
   └─ 組織健康度スコア（OpenWork）

❌ 空気指数の算出

❌ 証券会社API連携
   └─ 自動売買機能

❌ コミュニティ機能
   └─ リーダーボード、体験談共有

❌ モバイルアプリ（iOS/Android）
```

**理由**:
- MVPはBlind Modeのコンセプト検証に集中
- 法的リスク・データコストを最小化
- 実装期間を短縮（3-4週間でローンチ）

---

## 4. 技術スタック

### 4.1 技術選定の方針

**原則**:
- stock-analyzerと同じスタックを基本とする（知見の再利用）
- 新しい技術も試せる余地を残す（学習の場）
- 個人開発に適したシンプルな構成

### 4.2 フロントエンド

**選択肢の検討**:

| 技術 | メリット | デメリット |
|------|---------|-----------|
| **Next.js 15** | stock-analyzerと同じ、App Router、RSC | 学習機会が少ない |
| **Remix** | フォームハンドリングが優秀、シンプル | 新規学習コスト |
| **SvelteKit** | 軽量、書きやすい | エコシステムが小さい |

**推奨**: **Next.js 15 (App Router)**

**理由**:
- ✅ stock-analyzerで使用中（知見を活用）
- ✅ React Server Componentsで高速化
- ✅ Vercelへの簡単デプロイ
- ✅ 豊富なエコシステム
- ✅ TypeScript統合が優秀

**UIライブラリ**:
- **shadcn/ui** + **Radix UI** + **Tailwind CSS**
- 理由: stock-analyzerと統一、カスタマイズ性高い

**状態管理**:
- **Zustand** または **Jotai**
- 理由: シンプルで軽量、学習コスト低い

### 4.3 バックエンド

**選択肢の検討**:

| 技術 | メリット | デメリット |
|------|---------|-----------|
| **Next.js API Routes** | フロントエンドと統合、簡単 | 複雑なロジックには不向き |
| **tRPC** | 型安全、E2E型推論 | 学習コスト |
| **REST API（別サーバー）** | 独立性、柔軟性 | インフラ管理コスト |

**推奨**: **Next.js API Routes + tRPC**

**理由**:
- ✅ Next.jsに統合（インフラシンプル）
- ✅ tRPCで型安全なAPI
- ✅ 個人開発に最適な規模
- ✅ 将来的な分離も可能

### 4.4 データベース

**選択肢の検討**:

| 技術 | メリット | デメリット |
|------|---------|-----------|
| **PostgreSQL（Neon）** | stock-analyzerと同じ、リレーショナル | - |
| **Supabase** | PostgreSQL + Auth統合 | ベンダーロックイン |
| **MongoDB** | スキーマレス、柔軟 | 型安全性低い |
| **PlanetScale** | MySQL、ブランチ機能 | PostgreSQLの知見が使えない |

**推奨**: **PostgreSQL (Neon/Supabase)**

**理由**:
- ✅ stock-analyzerと同じ（知見活用）
- ✅ リレーショナルデータに適している
- ✅ Prisma ORMで型安全
- ✅ Neonは無料枠が充実

**ORM**:
- **Prisma**
- 理由: 型安全、マイグレーション管理、開発体験良い

### 4.5 認証

**選択肢の検討**:

| 技術 | メリット | デメリット |
|------|---------|-----------|
| **Clerk** | 簡単、UIコンポーネント付き | 月額コスト |
| **NextAuth.js** | 無料、柔軟 | 設定が複雑 |
| **Supabase Auth** | PostgreSQL統合 | Supabase依存 |
| **Auth.js (v5)** | NextAuth後継、シンプル | まだ新しい |

**推奨**: **Clerk**

**理由**:
- ✅ 実装が超簡単（1時間で完了）
- ✅ UI/UXが優れている
- ✅ 無料枠で十分（10,000 MAU）
- ✅ OAuth、メール認証対応
- ✅ ユーザー管理画面付き

### 4.6 株価データ取得

**Phase 1の方針**: 手動入力 + Yahoo Finance API

**選択肢**:

| 方法 | メリット | デメリット |
|------|---------|-----------|
| **手動入力** | コストゼロ、法的問題なし | UX悪い |
| **Yahoo Finance API** | 無料、日本株対応 | 非公式、制限あり |
| **Alpha Vantage** | 公式API、無料枠あり | 日本株少ない |
| **証券会社API** | 公式、リアルタイム | 高コスト |

**推奨**: **手動入力（MVP）→ Yahoo Finance API（Phase 2）**

**MVP実装**:
```
【購入時】
  ユーザーが購入価格を手動入力

【条件達成判定】
  1日1回、Yahoo Finance APIで最新価格を取得
  利確・損切り条件と比較
  達成時に通知

【コスト】
  Yahoo Finance API: 無料
  ※ レート制限に注意（1分100リクエストまで）
```

### 4.7 通知

**選択肢**:

| 技術 | メリット | デメリット |
|------|---------|-----------|
| **メール（Resend/SendGrid）** | 簡単、確実 | リアルタイム性低い |
| **プッシュ通知（Web Push）** | リアルタイム | 実装複雑 |
| **LINE Notify** | 日本で普及 | LINE依存 |

**推奨**: **メール（Resend）+ Web Push（将来）**

**理由**:
- ✅ Resendは無料枠3,000通/月
- ✅ 実装が簡単
- ✅ 確実に届く
- ✅ Web Pushは Phase 2で追加

### 4.8 デプロイ

**選択肢**:

| サービス | メリット | デメリット |
|---------|---------|-----------|
| **Vercel** | Next.js最適化、簡単 | 関数実行時間制限 |
| **Cloudflare Pages** | 無料枠大きい、速い | 機能制限 |
| **Railway** | フルスタック対応 | コスト |

**推奨**: **Vercel**

**理由**:
- ✅ Next.js最適化
- ✅ Git連携で自動デプロイ
- ✅ 無料枠で十分（Hobby plan）
- ✅ エッジ関数、ISR対応

### 4.9 技術スタックまとめ

```
【確定スタック】

フロントエンド:
  ├─ Next.js 15 (App Router)
  ├─ TypeScript
  ├─ Tailwind CSS
  ├─ shadcn/ui + Radix UI
  └─ Zustand (状態管理)

バックエンド:
  ├─ Next.js API Routes
  ├─ tRPC (型安全API)
  └─ Zod (バリデーション)

データベース:
  ├─ PostgreSQL (Neon)
  └─ Prisma ORM

認証:
  └─ Clerk

株価データ:
  └─ Yahoo Finance API (非公式)

通知:
  └─ Resend (メール)

デプロイ:
  └─ Vercel

開発ツール:
  ├─ ESLint + Prettier
  ├─ Husky (Git hooks)
  └─ GitHub Actions (CI/CD)
```

---

## 5. アーキテクチャ設計

### 5.1 システム構成図

```
┌─────────────────────────────────────────────────────────┐
│                        ユーザー                          │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                    Vercel (Next.js)                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────────────────────────────────┐          │
│  │  フロントエンド (App Router)              │          │
│  ├──────────────────────────────────────────┤          │
│  │  Pages:                                   │          │
│  │    ├─ / (ホーム)                         │          │
│  │    ├─ /portfolio (ポートフォリオ)        │          │
│  │    ├─ /stock/[id] (銘柄詳細)            │          │
│  │    ├─ /badges (バッジ)                   │          │
│  │    └─ /settings (設定)                   │          │
│  └──────────────────────────────────────────┘          │
│                                                          │
│  ┌──────────────────────────────────────────┐          │
│  │  バックエンド (API Routes + tRPC)        │          │
│  ├──────────────────────────────────────────┤          │
│  │  Routers:                                 │          │
│  │    ├─ stock.router.ts                    │          │
│  │    │   ├─ getStock()                     │          │
│  │    │   └─ listStocks()                   │          │
│  │    │                                      │          │
│  │    ├─ portfolio.router.ts                │          │
│  │    │   ├─ addPosition()                  │          │
│  │    │   ├─ getPositions()                 │          │
│  │    │   ├─ updatePosition()               │          │
│  │    │   └─ deletePosition()               │          │
│  │    │                                      │          │
│  │    ├─ blindMode.router.ts                │          │
│  │    │   ├─ enableBlindMode()              │          │
│  │    │   ├─ disableBlindMode()             │          │
│  │    │   └─ getBlindStatus()               │          │
│  │    │                                      │          │
│  │    └─ badge.router.ts                    │          │
│  │        ├─ getBadges()                    │          │
│  │        └─ checkBadgeProgress()           │          │
│  └──────────────────────────────────────────┘          │
│                                                          │
└────────────────────┬────────────────────────────────────┘
                     │
         ┌───────────┼───────────┐
         │           │           │
         ▼           ▼           ▼
    ┌────────┐  ┌────────┐  ┌─────────┐
    │ Neon   │  │ Clerk  │  │ Resend  │
    │ (DB)   │  │ (Auth) │  │ (Email) │
    └────────┘  └────────┘  └─────────┘
         │
         │
         ▼
    ┌──────────────────────┐
    │ Yahoo Finance API    │
    │ (株価データ)          │
    └──────────────────────┘

【Cron Job (Vercel Cron)】
  └─ 1日1回、全ポジションの株価をチェック
     ├─ 利確・損切り条件達成を判定
     └─ 通知送信（Resend）
```

### 5.2 データモデル（Prisma Schema）

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ユーザー（Clerkで管理、最小限の情報のみDB保存）
model User {
  id        String   @id @default(cuid())
  clerkId   String   @unique // ClerkのユーザーID
  email     String   @unique
  name      String?

  positions Position[]
  badges    UserBadge[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}

// ポジション（保有銘柄）
model Position {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  // 銘柄情報
  stockCode   String   // 銘柄コード（例: 7203）
  stockName   String   // 銘柄名（例: トヨタ自動車）

  // 購入情報
  purchaseDate   DateTime
  purchasePrice  Float    // 購入価格
  quantity       Int      // 購入株数

  // Blind Mode設定
  blindModeEnabled   Boolean  @default(false)
  unlockable         Boolean  @default(true)  // 解除可能か（解除不可モード）

  // 出口戦略
  targetProfitRate   Float    // 利確条件（例: 0.20 = 20%）
  stopLossRate       Float    // 損切り条件（例: -0.10 = -10%）

  // ステータス
  status    String   @default("ACTIVE")  // ACTIVE, CLOSED
  closedAt  DateTime?
  closePrice Float?   // 決済価格
  closeReason String? // 決済理由（TARGET_REACHED, STOP_LOSS, MANUAL）

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([stockCode])
  @@map("positions")
}

// バッジ定義
model Badge {
  id          String   @id @default(cuid())
  key         String   @unique  // 例: "iron_will_bronze"
  name        String              // 例: "鉄の意志 Bronze"
  description String              // 例: "Blind Modeで7日間運用"
  icon        String              // 絵文字またはアイコンパス
  condition   Json                // 条件（JSON）

  userBadges UserBadge[]

  createdAt DateTime @default(now())

  @@map("badges")
}

// ユーザーが獲得したバッジ
model UserBadge {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  badgeId   String
  badge     Badge    @relation(fields: [badgeId], references: [id])

  earnedAt  DateTime @default(now())

  @@unique([userId, badgeId])
  @@index([userId])
  @@map("user_badges")
}

// 株価履歴（キャッシュ用）
model StockPrice {
  id        String   @id @default(cuid())
  stockCode String
  price     Float
  date      DateTime @default(now())

  @@unique([stockCode, date])
  @@index([stockCode])
  @@map("stock_prices")
}

// 通知履歴
model Notification {
  id        String   @id @default(cuid())
  userId    String

  type      String   // TARGET_REACHED, STOP_LOSS, MILESTONE, ENCOURAGEMENT
  title     String
  message   String

  read      Boolean  @default(false)
  sentAt    DateTime @default(now())

  @@index([userId])
  @@map("notifications")
}
```

### 5.3 主要API設計（tRPC）

#### 5.3.1 ポートフォリオ管理API

```typescript
// server/routers/portfolio.router.ts

import { z } from 'zod';
import { router, protectedProcedure } from '../trpc';

export const portfolioRouter = router({
  // ポジション追加
  addPosition: protectedProcedure
    .input(z.object({
      stockCode: z.string(),
      stockName: z.string(),
      purchaseDate: z.date(),
      purchasePrice: z.number().positive(),
      quantity: z.number().int().positive(),
      blindModeEnabled: z.boolean(),
      unlockable: z.boolean(),
      targetProfitRate: z.number(), // 例: 0.20
      stopLossRate: z.number(),     // 例: -0.10
    }))
    .mutation(async ({ ctx, input }) => {
      const position = await ctx.prisma.position.create({
        data: {
          userId: ctx.user.id,
          ...input,
          status: 'ACTIVE',
        },
      });

      // バッジ進捗チェック
      await checkBadgeProgress(ctx.user.id);

      return position;
    }),

  // ポジション一覧取得
  getPositions: protectedProcedure
    .input(z.object({
      status: z.enum(['ACTIVE', 'CLOSED', 'ALL']).optional(),
    }))
    .query(async ({ ctx, input }) => {
      const where = {
        userId: ctx.user.id,
        ...(input.status && input.status !== 'ALL' && { status: input.status }),
      };

      const positions = await ctx.prisma.position.findMany({
        where,
        orderBy: { createdAt: 'desc' },
      });

      return positions;
    }),

  // ポジション詳細取得（Blind Mode考慮）
  getPosition: protectedProcedure
    .input(z.object({
      positionId: z.string(),
      forceReveal: z.boolean().optional(), // 強制表示（ペナルティ支払い後）
    }))
    .query(async ({ ctx, input }) => {
      const position = await ctx.prisma.position.findUnique({
        where: { id: input.positionId },
      });

      if (!position || position.userId !== ctx.user.id) {
        throw new Error('Position not found');
      }

      // Blind Mode有効時は現在価格を隠す
      if (position.blindModeEnabled && !input.forceReveal) {
        return {
          ...position,
          currentPrice: null,
          currentProfitLoss: null,
          currentProfitLossRate: null,
          progressToTarget: calculateProgressToTarget(position), // 目標達成度のみ
        };
      }

      // 株価取得
      const currentPrice = await fetchStockPrice(position.stockCode);
      const profitLoss = (currentPrice - position.purchasePrice) * position.quantity;
      const profitLossRate = (currentPrice / position.purchasePrice) - 1;

      return {
        ...position,
        currentPrice,
        currentProfitLoss: profitLoss,
        currentProfitLossRate: profitLossRate,
        progressToTarget: calculateProgressToTarget(position, profitLossRate),
      };
    }),

  // ポジション決済
  closePosition: protectedProcedure
    .input(z.object({
      positionId: z.string(),
      closePrice: z.number().positive(),
      closeReason: z.enum(['TARGET_REACHED', 'STOP_LOSS', 'MANUAL']),
    }))
    .mutation(async ({ ctx, input }) => {
      const position = await ctx.prisma.position.update({
        where: { id: input.positionId },
        data: {
          status: 'CLOSED',
          closedAt: new Date(),
          closePrice: input.closePrice,
          closeReason: input.closeReason,
        },
      });

      // バッジ進捗チェック
      await checkBadgeProgress(ctx.user.id);

      return position;
    }),

  // Blind Mode解除（ペナルティ支払い）
  disableBlindMode: protectedProcedure
    .input(z.object({
      positionId: z.string(),
      payPenalty: z.boolean(),
    }))
    .mutation(async ({ ctx, input }) => {
      const position = await ctx.prisma.position.findUnique({
        where: { id: input.positionId },
      });

      if (!position || position.userId !== ctx.user.id) {
        throw new Error('Position not found');
      }

      if (!position.unlockable && !input.payPenalty) {
        throw new Error('Penalty payment required');
      }

      // ペナルティ処理（ここでは記録のみ、実際の決済は別途実装）
      if (!position.unlockable) {
        await ctx.prisma.notification.create({
          data: {
            userId: ctx.user.id,
            type: 'PENALTY_PAID',
            title: 'ペナルティが発生しました',
            message: `${position.stockName}のBlind Modeを解除しました。¥1,000のペナルティが発生します。`,
          },
        });
      }

      // Blind Mode解除
      await ctx.prisma.position.update({
        where: { id: input.positionId },
        data: { blindModeEnabled: false },
      });

      return { success: true };
    }),
});

// ヘルパー関数
function calculateProgressToTarget(
  position: Position,
  currentRate?: number
): number | null {
  if (!currentRate) return null;

  // プラス圏内の場合のみ進捗を返す
  if (currentRate >= 0) {
    return Math.min((currentRate / position.targetProfitRate) * 100, 100);
  }

  return null; // マイナス圏内は進捗表示しない
}
```

#### 5.3.2 バッジ管理API

```typescript
// server/routers/badge.router.ts

export const badgeRouter = router({
  // ユーザーのバッジ一覧取得
  getBadges: protectedProcedure
    .query(async ({ ctx }) => {
      // 全バッジ定義取得
      const allBadges = await ctx.prisma.badge.findMany();

      // ユーザーが獲得したバッジ取得
      const userBadges = await ctx.prisma.userBadge.findMany({
        where: { userId: ctx.user.id },
        include: { badge: true },
      });

      const earnedBadgeIds = new Set(userBadges.map(ub => ub.badgeId));

      // 各バッジの進捗を計算
      const badgesWithProgress = await Promise.all(
        allBadges.map(async (badge) => {
          const earned = earnedBadgeIds.has(badge.id);
          const progress = earned ? 100 : await calculateBadgeProgress(ctx.user.id, badge);

          return {
            ...badge,
            earned,
            progress,
            earnedAt: userBadges.find(ub => ub.badgeId === badge.id)?.earnedAt,
          };
        })
      );

      return badgesWithProgress;
    }),

  // バッジ進捗チェック（内部用、Cron Jobからも呼ばれる）
  checkProgress: protectedProcedure
    .mutation(async ({ ctx }) => {
      await checkBadgeProgress(ctx.user.id);
      return { success: true };
    }),
});

// バッジ進捗計算関数
async function calculateBadgeProgress(userId: string, badge: Badge): Promise<number> {
  const condition = badge.condition as any;

  switch (badge.key) {
    case 'iron_will_bronze': // 7日間運用
      return await calculateDaysProgress(userId, 7);

    case 'iron_will_silver': // 30日間運用
      return await calculateDaysProgress(userId, 30);

    case 'iron_will_gold': // 90日間運用
      return await calculateDaysProgress(userId, 90);

    case 'master_investor': // 5回利確成功
      return await calculateProfitCountProgress(userId, 5);

    // その他のバッジ...

    default:
      return 0;
  }
}

async function calculateDaysProgress(userId: string, targetDays: number): Promise<number> {
  // 最も古いアクティブポジションの経過日数を計算
  const oldestPosition = await prisma.position.findFirst({
    where: {
      userId,
      status: 'ACTIVE',
      blindModeEnabled: true,
    },
    orderBy: { purchaseDate: 'asc' },
  });

  if (!oldestPosition) return 0;

  const daysPassed = Math.floor(
    (Date.now() - oldestPosition.purchaseDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return Math.min((daysPassed / targetDays) * 100, 100);
}

async function calculateProfitCountProgress(userId: string, targetCount: number): Promise<number> {
  const profitCount = await prisma.position.count({
    where: {
      userId,
      status: 'CLOSED',
      closeReason: 'TARGET_REACHED',
      blindModeEnabled: true,
    },
  });

  return Math.min((profitCount / targetCount) * 100, 100);
}

// バッジ獲得チェック（新規獲得時に通知）
async function checkBadgeProgress(userId: string): Promise<void> {
  const allBadges = await prisma.badge.findMany();
  const userBadges = await prisma.userBadge.findMany({
    where: { userId },
  });

  const earnedBadgeIds = new Set(userBadges.map(ub => ub.badgeId));

  for (const badge of allBadges) {
    if (earnedBadgeIds.has(badge.id)) continue; // 既に獲得済み

    const progress = await calculateBadgeProgress(userId, badge);

    if (progress >= 100) {
      // バッジ獲得！
      await prisma.userBadge.create({
        data: {
          userId,
          badgeId: badge.id,
        },
      });

      // 通知送信
      await prisma.notification.create({
        data: {
          userId,
          type: 'BADGE_EARNED',
          title: 'バッジを獲得しました！',
          message: `おめでとうございます！「${badge.name}」を獲得しました。${badge.icon}`,
        },
      });
    }
  }
}
```

### 5.4 Cron Job設計（条件達成チェック）

```typescript
// app/api/cron/check-positions/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { fetchStockPrice } from '@/lib/yahoo-finance';
import { sendEmail } from '@/lib/resend';

export async function GET(request: Request) {
  // Vercel Cron からのリクエストか検証
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // すべてのアクティブポジションを取得
    const activePositions = await prisma.position.findMany({
      where: { status: 'ACTIVE' },
      include: { user: true },
    });

    console.log(`Checking ${activePositions.length} positions...`);

    for (const position of activePositions) {
      try {
        // 株価取得
        const currentPrice = await fetchStockPrice(position.stockCode);

        // 損益率計算
        const profitLossRate = (currentPrice / position.purchasePrice) - 1;

        // 利確条件チェック
        if (profitLossRate >= position.targetProfitRate) {
          await handleTargetReached(position, currentPrice, profitLossRate);
        }

        // 損切り条件チェック
        if (profitLossRate <= position.stopLossRate) {
          await handleStopLoss(position, currentPrice, profitLossRate);
        }

        // 株価履歴に保存（キャッシュ）
        await prisma.stockPrice.upsert({
          where: {
            stockCode_date: {
              stockCode: position.stockCode,
              date: new Date(),
            },
          },
          update: { price: currentPrice },
          create: {
            stockCode: position.stockCode,
            price: currentPrice,
            date: new Date(),
          },
        });

      } catch (error) {
        console.error(`Error checking position ${position.id}:`, error);
      }
    }

    return NextResponse.json({ success: true, checked: activePositions.length });

  } catch (error) {
    console.error('Cron job error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

async function handleTargetReached(
  position: Position & { user: User },
  currentPrice: number,
  profitLossRate: number
) {
  // 通知作成
  await prisma.notification.create({
    data: {
      userId: position.userId,
      type: 'TARGET_REACHED',
      title: '🎉 利確条件達成！',
      message: `${position.stockName}が目標の+${(position.targetProfitRate * 100).toFixed(1)}%に達しました！現在+${(profitLossRate * 100).toFixed(1)}%です。`,
    },
  });

  // メール送信
  await sendEmail({
    to: position.user.email,
    subject: `【Blind Side】${position.stockName}が利確条件達成！`,
    html: `
      <h2>🎉 おめでとうございます！</h2>
      <p>${position.stockName}（${position.stockCode}）が目標に達しました。</p>
      <ul>
        <li>購入価格: ¥${position.purchasePrice.toLocaleString()}</li>
        <li>現在価格: ¥${currentPrice.toLocaleString()}</li>
        <li>損益率: +${(profitLossRate * 100).toFixed(2)}%</li>
      </ul>
      <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/portfolio">ポートフォリオを確認</a></p>
    `,
  });

  console.log(`Target reached for position ${position.id}`);
}

async function handleStopLoss(
  position: Position & { user: User },
  currentPrice: number,
  profitLossRate: number
) {
  // 通知作成
  await prisma.notification.create({
    data: {
      userId: position.userId,
      type: 'STOP_LOSS',
      title: '⚠️ 損切り条件達成',
      message: `${position.stockName}が損切りライン${(position.stopLossRate * 100).toFixed(1)}%に達しました。現在${(profitLossRate * 100).toFixed(1)}%です。`,
    },
  });

  // メール送信
  await sendEmail({
    to: position.user.email,
    subject: `【Blind Side】${position.stockName}が損切り条件達成`,
    html: `
      <h2>⚠️ 損切り条件に達しました</h2>
      <p>${position.stockName}（${position.stockCode}）が損切りラインに達しました。</p>
      <ul>
        <li>購入価格: ¥${position.purchasePrice.toLocaleString()}</li>
        <li>現在価格: ¥${currentPrice.toLocaleString()}</li>
        <li>損益率: ${(profitLossRate * 100).toFixed(2)}%</li>
      </ul>
      <p>損失を確定するかご検討ください。</p>
      <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/portfolio">ポートフォリオを確認</a></p>
    `,
  });

  console.log(`Stop loss triggered for position ${position.id}`);
}
```

**Vercel Cronの設定** (`vercel.json`):

```json
{
  "crons": [
    {
      "path": "/api/cron/check-positions",
      "schedule": "0 9 * * *"
    }
  ]
}
```

---

## 6. 実装タイムライン

### 6.1 Week 1-2: セットアップとコア機能

**目標**: プロジェクト初期化、認証、DB設計

**タスク**:
- [ ] Next.js 15プロジェクト作成
- [ ] 技術スタックのインストール（shadcn/ui, Prisma, Clerk等）
- [ ] Neon DBセットアップ
- [ ] Prisma Schemaの実装
- [ ] DB migration実行
- [ ] Clerk認証の統合
- [ ] tRPC初期設定
- [ ] ベースレイアウト・ナビゲーション実装

**成果物**:
- 認証機能が動作するアプリ
- DBスキーマ完成

### 6.2 Week 3-4: ポートフォリオ管理とBlind Mode

**目標**: コア機能の実装

**タスク**:
- [ ] ポートフォリオ一覧ページ
- [ ] 銘柄追加フォーム
  - 購入情報入力
  - Blind Mode設定
  - 出口戦略設定
- [ ] ポジション詳細ページ
  - Blind Mode時の表示制御
  - 目標達成度プログレスバー
- [ ] 解除不可モードの実装
- [ ] Yahoo Finance API統合（株価取得）
- [ ] Cron Job実装（条件達成チェック）
- [ ] 通知機能（Resend統合）

**成果物**:
- Blind Modeが動作するポートフォリオ管理機能

### 6.3 Week 5-6: ゲーミフィケーションとポリッシュ

**目標**: バッジ、UI/UX改善、テスト

**タスク**:
- [ ] バッジシステム実装
  - バッジ定義（seed data）
  - 進捗計算ロジック
  - バッジ獲得通知
- [ ] バッジページ
- [ ] 励ましメッセージ機能
- [ ] 統計情報表示
  - 平均運用日数
  - 利確/損切り回数
- [ ] UI/UXポリッシュ
  - アニメーション
  - レスポンシブ対応
- [ ] エラーハンドリング
- [ ] ユニットテスト（重要部分）

**成果物**:
- ローンチ可能なMVP

### 6.4 Week 7: ベータテストとフィードバック

**目標**: 実ユーザーでの検証

**タスク**:
- [ ] Vercelへのデプロイ
- [ ] ベータテスター募集（X、知人）
- [ ] フィードバック収集
- [ ] バグ修正
- [ ] ドキュメント作成（使い方）

**成果物**:
- ベータ版公開

### 6.5 Week 8: 正式ローンチ

**目標**: 一般公開

**タスク**:
- [ ] 最終調整
- [ ] Product Hunt投稿準備
- [ ] ランディングページ作成
- [ ] SEO対策
- [ ] SNSマーケティング（X、note）
- [ ] 正式ローンチ

**成果物**:
- 正式サービス開始

---

## 7. stock-analyzerとの差別化

### 7.1 コンセプトの違い

| 要素 | stock-analyzer | Blind Side |
|------|---------------|-----------|
| **コンセプト** | AIで情報を分かりやすく | 見ないから、勝てる |
| **ブランドメッセージ** | 透明性、可視化 | 非表示、制約 |
| **アプローチ** | 情報提供 | 感情コントロール |

### 7.2 ターゲットユーザーの違い

**stock-analyzer**:
```
初心者〜中級者
  ├─ 「財務諸表が読めない」
  ├─ 「どの株を買えばいいかわからない」
  └─ 「情報がわかりやすく欲しい」
```

**Blind Side**:
```
中級〜上級者
  ├─ 「ルールを決めても守れない」
  ├─ 「感情に左右される」
  └─ 「メンタルを鍛えたい」
```

### 7.3 価格帯の違い

**stock-analyzer**:
```
Free: ¥0
  └─ 基本分析、15銘柄

Premium: ¥980/月
  └─ 500銘柄、カスタムスクリーニング

Pro: ¥2,980/月
  └─ 全銘柄、リアルタイム更新
```

**Blind Side**:
```
Free: ¥0
  └─ デモトレード（仮想資金）
  └─ バッジ獲得体験

Standard: ¥9,800/月
  └─ 本番運用
  └─ Blind Mode無制限
  └─ メール通知

Pro: ¥29,800/月（Phase 2以降）
  └─ オルタナティブデータ分析
  └─ 空気指数
  └─ 証券API連携
```

**価格設定の根拠**:
- プレミアム層をターゲット
- 感情コントロール = 損失回避の価値
- 月数万円の損失を防げれば元が取れる

### 7.4 技術的な違い

**stock-analyzer**:
```
データソース:
  ├─ Yahoo Finance（株価）
  ├─ IR BANK（財務）
  ├─ NewsAPI（ニュース）
  └─ OpenAI（分析）

コア技術:
  ├─ データ収集・集約
  ├─ AI分析（GPT-4o mini）
  └─ スコアリングエンジン
```

**Blind Side（Phase 1）**:
```
データソース:
  └─ Yahoo Finance（株価のみ）

コア技術:
  ├─ 行動経済学ベースのUI/UX
  ├─ ゲーミフィケーション
  └─ 条件達成自動判定
```

### 7.5 相乗効果

**2つのサービスは競合しない**:

```
ユーザージャーニー:

1. stock-analyzerで銘柄を分析
   「トヨタ自動車のスコアが85点、買いかも」

2. Blind Sideで購入・運用
   「利確+20%、損切り-10%で設定」
   「Blind Mode ONで放置」

3. 条件達成で通知
   「+22%で利確しました！」

4. 次の銘柄をstock-analyzerで探す
```

**クロスセル可能**:
- stock-analyzerユーザーにBlind Sideを提案
- Blind Sideユーザーにstock-analyzerを提案

---

## 8. 将来の拡張（Phase 2以降）

### 8.1 Phase 2: オルタナティブデータ統合（6-12ヶ月後）

**追加機能**:
```
空気解析エンジン:
  ├─ 採用動向スコア（Wantedly, LinkedIn）
  ├─ 経営マインドスコア（X, note）
  └─ 組織健康度スコア（OpenWork）

→ 「空気指数」算出
```

**実装条件**:
- Phase 1で月間¥50万以上の収益
- ユーザー500人以上
- PMF達成

**コスト**:
- X API Pro: $5,000/月
- データ提供会社契約: ¥10-30万/月

### 8.2 Phase 3: 証券API連携（1-2年後）

**追加機能**:
```
自動売買:
  ├─ auカブコム証券API
  ├─ 条件達成で自動決済
  └─ ユーザーのAPIキーで実行
```

**実装条件**:
- 法的確認（金融庁への相談）
- ユーザー1,000人以上

### 8.3 Phase 4: モバイルアプリ（2年後〜）

**追加機能**:
```
iOS/Androidアプリ:
  ├─ Web Push通知
  ├─ ウィジェット（目標達成度）
  └─ オフライン対応
```

**技術**:
- React Native または Flutter

---

## 付録

### A. 参考リンク

**行動経済学**:
- プロスペクト理論（ダニエル・カーネマン）
- ユリシーズの契約
- ナッジ理論

**類似サービス**:
- Acorns（米国、自動投資）
- Stash（米国、簡単投資）
- ※ Blind Modeの直接競合は未確認

**技術ドキュメント**:
- Next.js: https://nextjs.org/docs
- Prisma: https://www.prisma.io/docs
- Clerk: https://clerk.com/docs
- tRPC: https://trpc.io/docs

### B. 次のステップ

**このドキュメント確定後**:

1. **リポジトリのセットアップ**
   - Next.js 15プロジェクト作成
   - README.md作成
   - ディレクトリ構造の整理

2. **技術検証**
   - Clerk認証のテスト
   - Yahoo Finance API動作確認
   - tRPC初期設定

3. **Week 1タスクの着手**
   - Prisma Schemaの実装
   - DBセットアップ

---

**ドキュメント終わり**

**作成者**: Claude
**承認**: 未承認（レビュー待ち）
**次回更新**: 実装開始時
