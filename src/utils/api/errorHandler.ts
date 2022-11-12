import { ResasErrorResponse } from 'types/resas';

export const handleResasApiError = (error: ResasErrorResponse) => {
  switch (error.statusCode) {
    case '400':
      throw new Error(
        'Resas APIに必要なパラメータが設定されておらずうまく取得できませんでした',
      );
    case '403':
      throw new Error('APIキーがないため取得できません');
    case '404':
      throw new Error('指定したデータが存在しません');
    case '429':
      throw new Error('リクエスト回数の制限を超えました');
  }
};
