import { Prefecture } from './prefecture';

/** 人口構成I/F */
export type Population = {
  year: number;
  value: number;
};

/** 県と人口構成I/F */
export type PrefecturePopulations = Prefecture & {
  populations: Population[];
};
