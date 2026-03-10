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

### テスト方針

- **テストファースト**: 新機能開発時は、まずテストを書いてから実装を行う（TDD）
- **包括的なテスト**: ユニットテスト、統合テスト、E2Eテストを組み合わせる
- **継続的テスト**: CI/CDパイプラインで自動実行
- **テスト品質**: テストは本番コードと同等の品質で記述

### 使用ツール

- **ユニットテスト**: Vitest + @vue/test-utils
- **テストファイル命名**: `*.spec.ts` または `*.test.ts`
- **テスト環境**: jsdom（DOM操作のテスト用）
- **アサーション**: Vitestのexpectを使用

### テスト実行方法

```bash
# 継続監視モード（ファイル変更時に自動実行）
npm test

# 一度だけ実行
npm test -- --run

# カバレッジレポート生成
npm test -- --coverage

# 特定のテストファイル実行
npm test dateUtils.spec.ts

# UIモード（ブラウザでテスト実行）
npm test -- --ui
```

### カバレッジ目標

- **全体カバレッジ**: 80%以上
- **ブランチカバレッジ**: 75%以上
- **関数カバレッジ**: 90%以上
- **行カバレッジ**: 80%以上

### テストの種類と書き方

#### ユニットテスト

- **対象**: 個別の関数、コンポーネント、ユーティリティ
- **原則**: 外部依存をモック化し、単体機能をテスト
- **例**: dateUtils.spec.ts

```typescript
import { describe, it, expect } from "vitest";
import { formatDate } from "@/utils/dateUtils";

describe("formatDate", () => {
  it("should format date correctly", () => {
    const date = new Date(2024, 0, 15);
    expect(formatDate(date)).toBe("2024-01-15");
  });
});
```

#### コンポーネントテスト

- **対象**: Vueコンポーネント
- **ツール**: @vue/test-utils
- **テスト内容**: レンダリング、イベント、プロパティ、emit

```typescript
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UserCard from "@/components/UserCard.vue";

describe("UserCard", () => {
  it("renders user name and email", () => {
    const user = { id: 1, name: "John", email: "john@example.com" };
    const wrapper = mount(UserCard, { props: { user } });

    expect(wrapper.text()).toContain("John");
    expect(wrapper.text()).toContain("john@example.com");
  });
});
```

#### ストアテスト

- **対象**: Piniaストア
- **テスト内容**: 状態変更、アクション、ゲッター

#### APIサービステスト

- **対象**: servicesフォルダの関数
- **モック**: fetch APIをモック化

### テストベストプラクティス

- **AAAパターン**: Arrange（準備）- Act（実行）- Assert（検証）
- **テストデータの分離**: テスト専用データをfixtureとして管理
- **モックの使用**: 外部APIや複雑な依存をモック
- **テストの独立性**: 各テストは他のテストに依存しない
- **記述的なテスト名**: 何をテストしているかが明確にわかる名前

### CI/CDでのテスト

- **プッシュ時自動実行**: GitHub Actionsなどでテストを実行
- **カバレッジレポート**: プルリクエスト時にレポートを生成
- **品質ゲート**: カバレッジが基準を下回る場合はマージをブロック

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

## ブランチ戦略

- **main**: 本番環境用ブランチ。安定版のみマージ。
- **develop**: 開発統合ブランチ。featureブランチからのマージ先。
- **feature/**: 新機能開発用ブランチ。developから分岐し、developにマージ。
- **hotfix/**: 緊急修正用ブランチ。mainから分岐し、mainとdevelopにマージ。
- マージはプルリクエスト経由で行い、レビュー必須。

## サンプルファイル

このプロジェクトはひな型として使用できるよう、各ディレクトリにサンプルファイルを追加しています：

- `components/UserCard.vue`: ユーザー情報を表示するコンポーネント
- `views/Home.vue`: ホームページのビューコンポーネント
- `stores/userStore.ts`: ユーザー管理のPiniaストア
- `types/User.type.ts`: ユーザー関連のTypeScript型定義
- `utils/dateUtils.ts`: 日付操作のユーティリティ関数
- `router/index.ts`: Vue Routerの設定
- `services/apiService.ts`: API通信のサービス関数
- `assets/README.txt`: アセットフォルダの説明

これらのファイルを参考に、実際のアプリケーション開発を行ってください。
