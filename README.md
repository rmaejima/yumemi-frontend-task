# 株式会社ゆめみフロントエンドコーディング試験

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
