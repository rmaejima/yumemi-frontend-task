/** 人口構成I/F */
export type Population = {
  year: number;
  value: number;
};

/** 都道府県I/F */
export type Prefecture = {
  prefCode: number;
  prefName: string;
};

/** 県と人口構成I/F */
export type PrefecturePopulations = Prefecture & {
  populations: Population[];
};

/** Resas APIのエラーレスポンスI/F */
export type ResasErrorResponse = {
  statusCode: string;
  message: string;
  description: string;
};
