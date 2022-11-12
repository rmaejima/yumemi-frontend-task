import { useCallback } from 'react';

import useSWR from 'swr';
import { z } from 'zod';

import {
  Population,
  Prefecture,
  PrefecturePopulations,
  populationSchema,
  resasErrorResponseSchema,
} from 'schemas/resas';

import { requestResasGet } from './axios';
import { handleResasApiError } from './errorHandler';

/** 人口構成取得APIのレスポンスのresult部分のスキーマ */
const populationResponseResultSchema = z.object({
  boundaryYear: z.number(),
  data: z.array(
    z.object({
      label: z.string(),
      data: z.array(populationSchema),
    }),
  ),
});

/**
 *  人口構成取得APIのレスポンスのスキーマ
 *  @see https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
 */
const populationResponseSchema = z.object({
  message: z.string().nullable(),
  result: populationResponseResultSchema,
});
/** 人口構成取得APIのレスポンスのI/F  */
export type PopulationResponse = z.infer<typeof populationResponseSchema>;

/** 都道府県の年単位の人口構成を取得する関数 */
export const getPopulation = async (
  prefCode: number,
): Promise<Population[] | undefined> => {
  const { data } = await requestResasGet(
    `/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
  );

  const errorResponse = resasErrorResponseSchema.safeParse(data);
  if (errorResponse.success) {
    handleResasApiError(errorResponse.data);
    return;
  }

  try {
    const populationResponse = populationResponseSchema.parse(data);
    const population =
      populationResponse.result.data.find((data) => data.label === '総人口')
        ?.data ?? [];

    return population;
  } catch {
    throw new Error('人口構成取得に失敗しました');
  }
};

/** 都道府県の年単位の人口構成を取得するフック */
export const usePopulation = (prefCode: number) => {
  const { data, mutate } = useSWR(
    [prefCode, '/api/v1/population/composition/perYear'],
    getPopulation,
  );

  const refetchPopulation = useCallback(() => {
    mutate();
  }, [mutate]);

  return {
    data,
    refetchPopulation,
  };
};

/** 複数都道府県の年単位の人口構成を取得するフック */
export const usePrefecturePopulations = (prefectures: Prefecture[]) => {
  const { data, mutate } = useSWR(
    prefectures.map((pref) => pref.prefCode),
    async (): Promise<PrefecturePopulations[]> =>
      Promise.all(
        prefectures.map(async (pref) => {
          const populations = await getPopulation(pref.prefCode);
          return { ...pref, populations: populations ?? [] };
        }),
      ),
  );

  const refetchPrefecturePopulations = useCallback(() => {
    mutate();
  }, [mutate]);

  return {
    data,
    refetchPrefecturePopulations,
  };
};
