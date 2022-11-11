import { useCallback } from 'react';

import useSWR from 'swr';

import { Population } from 'types/resas/population';

import { requestResasGet } from './axios';

/**
 *  人口構成取得APIのレスポンスのI/F
 *  @see https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
 */
type PopulationResponse = {
  message: string | null;
  result: PopulationResponseResult;
};

/** 人口構成取得APIのレスポンスのresult部分のI/F */
type PopulationResponseResult = {
  boundaryYear: number;
  data: {
    label: string;
    data: Population[];
  }[];
};

/** 都道府県の年単位の人口構成を取得する関数 */
export const getPopulation = async (
  prefCode: number,
): Promise<Population[]> => {
  const { data } = await requestResasGet<PopulationResponse>(
    `/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
  );

  const population =
    data.result.data.find((data) => data.label === '総人口')?.data ?? [];

  return population;
};

/** 都道府県の年単位の人口構成を取得するフック */
export const usePopulation = (prefCode: number) => {
  const { data, error, mutate } = useSWR(
    [prefCode, '/api/v1/population/composition/perYear'],
    getPopulation,
  );

  const refetchPopulation = useCallback(() => {
    mutate();
  }, [mutate]);

  return {
    data,
    error,
    refetchPopulation,
  };
};
