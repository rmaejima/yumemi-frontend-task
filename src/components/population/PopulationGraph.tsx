import React, { useMemo } from 'react';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';

import { colors } from 'utils/theme';

import { PrefecturePopulations } from 'schemas/resas';

const MIN_YEAR = 1980;
const MAX_YEAR = new Date().getFullYear();

/** グラフオプション */
const options: Highcharts.Options = {
  chart: {
    type: 'spline',
    backgroundColor: 'transparent',
    polar: true,
  },
  title: {
    text: '',
  },
  lang: {
    noData: '都道府県を選択してください',
  },
  noData: {
    style: {
      fontWeight: 'bold',
      fontSize: '1rem',
      color: colors.text.base,
    },
  },
  xAxis: {
    offset: 0,
    title: {
      text: '年度',
      align: 'high',
      textAlign: 'left',
      rotation: 0,
      offset: 0,
      margin: 0,
      y: 30,
      x: -27,
    },
  },
  yAxis: {
    visible: true,
    tickPosition: 'inside',
    offset: 0,
    title: {
      text: '人口数',
      align: 'high',
      textAlign: 'left',
      rotation: 0,
      offset: 0,
      margin: 0,
      y: -20,
      x: -47,
    },
  },
};

NoDataToDisplay(Highcharts);

type Props = {
  prefecturePopulations: PrefecturePopulations[];
};

/** 人口構成グラフコンポーネント */
export const PopulationGraph: React.FC<Props> = ({ prefecturePopulations }) => {
  const series = useMemo(() => {
    if (prefecturePopulations.length === 0) {
      return [{ data: [], showInLegend: false }];
    }

    return prefecturePopulations.map((pref) => ({
      id: pref.prefCode,
      index: pref.prefCode,
      name: pref.prefName,
      data: pref.populations
        .filter((p) => p.year >= MIN_YEAR && p.year <= MAX_YEAR)
        .map((p) => [p.year, p.value]),
      showInLegend: true,
    }));
  }, [prefecturePopulations]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'chart'}
      options={{ ...options, series }}
    />
  );
};
