import { useCallback, useEffect, useState } from 'react';

import { usePrefectures } from 'utils/api/prefecture';

import { Prefecture } from 'types/resas/prefecture';

/** 都道府県選択I/F */
export type PrefectureSelection = Prefecture & {
  selected: boolean;
};

/** 都道府県選択フック */
export const usePrefectureSelections = () => {
  const { data: prefectures } = usePrefectures();
  const [prefectureSelections, setPrefectureSelections] = useState<
    PrefectureSelection[]
  >([]);

  useEffect(() => {
    if (!prefectures) return;

    const selections = prefectures.map((prefecture) => ({
      ...prefecture,
      selected: false,
    }));
    setPrefectureSelections(selections);
  }, [prefectures]);

  /** 指定した都道府県の選択状態を変更する関数 */
  const togglePrefectureSelection = useCallback(
    (prefCode: number) => {
      setPrefectureSelections((prevState) =>
        prevState.map((p) => {
          if (p.prefCode === prefCode) {
            return { ...p, selected: !p.selected };
          }
          return p;
        }),
      );
    },
    [setPrefectureSelections],
  );

  return { prefectureSelections, togglePrefectureSelection };
};
