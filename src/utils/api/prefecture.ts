import { useCallback } from 'react';

import useSWR from 'swr';

import { Prefecture } from 'types/resas/prefecture';

import { requestResasGet } from './axios';

type prefecturesResponse = {
  message: string | null;
  result: Prefecture[];
};

export const getPrefectures = async (): Promise<Prefecture[]> => {
  const { data } = await requestResasGet<prefecturesResponse>(
    '/api/v1/prefectures',
  );

  return data.result;
};

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
