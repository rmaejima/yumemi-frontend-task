# 株式会社ゆめみフロントエンドコーディング試験

## 課題提出記載欄

- 閲覧 URL: https://yumemi-frontend-task-three.vercel.app/
- 課題合計時間: 約 20 時間
- 総合的なプログラミング歴: 3 ~ 4 年
  （大学 1 年時から授業で触っていました。授業外で本気で取り組み始めたのは大学 4 年生の春からです。）
- これまでの WEB フロントエンドプログラミング歴: 1 年 5 ヶ月

## 使用技術

- React.js (v18.2.0)
- Typescript
- Node.js (v16.16.0)
- Styled Components
- Story Book
- SWR
- Prettier
- ESlint
- CommitLint
- zod

## スクリーンショット

![Kapture 2022-11-13 at 22 29 25](https://user-images.githubusercontent.com/82492270/201524264-13384ec1-5102-4a92-802a-ecdd1d5b29f8.gif)

## 環境構築

1. RESAS API の API キーを取得する。 (https://opendata.resas-portal.go.jp/)
2. `.env.example` を`.env` にコピーし、`REACT_APP_RESAS_API_KEY`に 1 で取得した API キーをセットする。

   ```
   cp .env.example .env
   ```

3. パッケージのインストール (注: Node.js のバージョンが 16 以上でないとインストールできません。)
   ```
   yarn
   ```
4. アプリの起動

   ```
   yarn start
   ```

- ストーリーブックを見たい場合

  ```
  yarn storybook
  ```

## 工夫したポイント

### Suspense や ErrorBoundary を使用し宣言的な UI を構築

非同期処理が絡むコンポーネントを Suspense と ErrorBoundary によって囲むことによって、より宣言的に UI を構築するようにしました。Suspense と ErrorBoundary を使用することにより、`{data, isLoading, error} = useCustomHook()`などの`isLoading, error`の値を使用することなく UI を制御することが可能となります。

### StoryBook を使用し、コンポーネントの確認を簡略化

StoryBook を使用することにより、コンポーネントごとの UI の確認や Props による変化などを簡単に確認することができます。

### Zod を使用し、API レスポンスのバリデーションを実装

zod を使用し、RESAS API のレスポンスをバリデーションをかけるようにしました。これにより、実際にコンポーネントで使用されるよりも前の段階で API レスポンスの型の整合性を確認することができ、エラーハンドリングが行いやすくなっています。また、今後 form などを実装する際にも入力値のバリデーションをかけることが期待できます。

### その他工夫

- .node-version, .nvmrc ファイルを記載
- 1 人での実装だったが、PR と Issue を活用（チーム開発を意識）
- priority ラベルの追加
- PR, Issue テンプレートの追加
- Github Actions を使用しテストを実行
- Husky, lint-staged を使用し commit 前に確認処理
- CommitLint によるコミット文の制御
- Typescript の使用
