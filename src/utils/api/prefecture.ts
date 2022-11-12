import { useCallback } from 'react';

import useSWR from 'swr';

import { Prefecture, ResasErrorResponse } from 'schemas/resas';

import { requestResasGet } from './axios';
import { handleResasApiError } from './errorHandler';

/**
 *  都道府県一覧APIレスポンスI/F
 *  @see https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
 */
type PrefecturesResponse = {
  message: string | null;
  result: Prefecture[];
};

/** 都道府県一覧取得する関数 */
export const getPrefectures = async (): Promise<Prefecture[] | undefined> => {
  const { data } = await requestResasGet<
    PrefecturesResponse | ResasErrorResponse
  >('/api/v1/prefectures');

  if ('statusCode' in data) {
    handleResasApiError(data);
    return;
  }

  return data.result;
};

/** 都道府県一覧取得フック */
export const usePrefectures = () => {
  const { data, mutate } = useSWR('/api/v1/prefectures', getPrefectures);

  const refetchPrefectures = useCallback(() => {
    mutate();
  }, [mutate]);

  return {
    data,
    refetchPrefectures,
  };
};
