import { useCallback } from 'react';

import useSWR from 'swr';

import { Prefecture } from 'types/resas/prefecture';

import { requestResasGet } from './axios';

/**
 *  都道府県一覧APIレスポンスI/F
 *  @see https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
 */
type PrefecturesResponse = {
  message: string | null;
  result: Prefecture[];
};

/** 都道府県一覧取得する関数 */
export const getPrefectures = async (): Promise<Prefecture[]> => {
  const { data } = await requestResasGet<PrefecturesResponse>(
    '/api/v1/prefectures',
  );

  return data.result;
};

/** 都道府県一覧取得フック */
export const usePrefectures = () => {
  const { data, error, mutate } = useSWR('/api/v1/prefectures', getPrefectures);

  const refetchPrefectures = useCallback(() => {
    mutate();
  }, [mutate]);

  return {
    data,
    error,
    refetchPrefectures,
  };
};
