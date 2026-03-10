# 開発規約

## 概要

本プロジェクトは、Vue 3 + Vite + Pinia + Tailwind CSS を用いたフロントエンドアプリケーションです。AIによるコード生成を活用しつつ、コードの品質を一定に保つために、以下の開発規約を遵守してください。

## システム概要

本システムは、Vue3 + Vite + Pinia + Tailwind v4を用いたシステムとなっている。
フォルダ構成は以下の通りである。

```
src/
├ components/     # 再利用可能なコンポーネント
├ views/          # ページコンポーネント
├ stores/         # Piniaストア（状態管理）
├ services/       # API通信などのサービス層
├ router/         # Vue Router設定
├ assets/         # 静的アセット（画像、フォントなど）
├ types/          # TypeScript型定義
├ utils/          # ユーティリティ関数
├ style.css       # グローバルスタイル
├ App.vue         # ルートコンポーネント
└ main.ts         # エントリーポイント
```

## 命名規則

### ファイル名

- コンポーネントファイル：PascalCase（例: `UserProfile.vue`）
- ユーティリティファイル：camelCase（例: `dateUtils.ts`）
- 型定義ファイル：PascalCase + `.type.ts`（例: `User.type.ts`）

### 変数・関数

- camelCaseを使用（例: `userName`, `getUserData()`）
- 定数：UPPER_SNAKE_CASE（例: `API_BASE_URL`）

### コンポーネント

- コンポーネント名：PascalCase（例: `<UserProfile>`）
- プロパティ：camelCase（例: `userName`）

## コードスタイル

### TypeScript

- 常に型を明示的に指定する
- `any`型の使用を避け、適切な型を使用する
- インターフェースはPascalCaseで命名

### Vue.js

- Composition APIを使用
- `<script setup>`構文を推奨
- リアクティブなデータは`ref()`または`reactive()`を使用
- テンプレートは簡潔に保つ

### インデント・フォーマット

- インデント：2スペース
- セミコロン：必須
- シングルクォートを使用（文字列リテラル）

## コンポーネント設計

### 構造

```vue
<template>
  <!-- テンプレート -->
</template>

<script setup lang="ts">
// インポート
// 型定義
// リアクティブデータ
// 計算プロパティ
// メソッド
</script>

<style scoped>
/* スタイル */
</style>
```

### プロパティ

- 必須プロパティは`required: true`を設定
- デフォルト値は適切に設定

### イベント

- イベント名：camelCase（例: `updateUser`）
- emitイベントは`defineEmits`で定義

## 状態管理（Pinia）

- ストアは機能ごとに分割
- ストア名：PascalCase（例: `useUserStore`）
- アクション名：camelCase（例: `fetchUser`）

## API通信

- API呼び出しは`services`フォルダに集約
- エラーハンドリングを適切に行う
- レスポンスデータの型を定義

## テスト

- コンポーネントテスト：Vitest + Vue Test Utilsを使用
- テストファイル：`*.spec.ts`または`*.test.ts`
- カバレッジ目標：80%以上

## コミットメッセージ

- 形式：`[タイプ]: 説明`
- タイプ例：
  - `feat`: 新機能
  - `fix`: バグ修正
  - `docs`: ドキュメント更新
  - `style`: コードスタイル修正
  - `refactor`: リファクタリング
  - `test`: テスト追加

## ドキュメント

- コンポーネントにはJSDocコメントを記述
- README.mdを更新し、機能追加時はドキュメント化

## セキュリティ

- ユーザー入力の検証を行う
- XSS対策として、テンプレートでは`v-html`を避ける
- 機密情報は環境変数で管理

## パフォーマンス

- 不要なリアクティブデータを避ける
- 大きなリストは仮想スクロールを検討
- バンドルサイズを監視

## レビューポイント

コードレビュー時は以下の点をチェック：

- 命名規則の遵守
- 型の適切な使用
- エラーハンドリング
