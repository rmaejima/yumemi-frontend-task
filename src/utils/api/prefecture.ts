import { useCallback } from 'react';

import useSWR from 'swr';
import { z } from 'zod';

import {
  Prefecture,
  prefectureSchema,
  resasErrorResponseSchema,
} from 'schemas/resas';

import { requestResasGet } from './axios';
import { handleResasApiError } from './errorHandler';

/**
 *  都道府県一覧APIレスポンススキーマ
 *  @see https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
 */
const prefecturesResponseSchema = z.object({
  message: z.string().nullable(),
  result: z.array(prefectureSchema),
});
/** 都道府県一覧APIレスポンスI/F  */
export type PrefecturesResponse = z.infer<typeof prefecturesResponseSchema>;

/** 都道府県一覧取得する関数 */
export const getPrefectures = async (): Promise<Prefecture[] | undefined> => {
  const { data } = await requestResasGet('/api/v1/prefectures');

  const errorResponse = resasErrorResponseSchema.safeParse(data);
  if (errorResponse.success) {
    handleResasApiError(errorResponse.data);
    return;
  }

  try {
    const prefecturesResponse = prefecturesResponseSchema.parse(data);
    return prefecturesResponse.result;
  } catch {
    throw new Error('都道府県一覧取得に失敗しました');
  }
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
