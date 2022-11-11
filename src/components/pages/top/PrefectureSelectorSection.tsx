import React, { useCallback, useEffect, useMemo } from 'react';

import styled from 'styled-components';

import { PrefectureSelector } from 'components/prefecture/PrefectureSelector';

import { usePrefectureSelections } from 'utils/hooks/usePrefectureSelections';

import { Prefecture } from 'types/resas/prefecture';

type Props = {
  onChangeSelection: (prefecture: Prefecture[]) => void;
  className?: string;
};

/** 都道府県選択セクションコンポーネント */
export const PrefectureSelectorSection: React.FC<Props> = ({
  onChangeSelection,
  className,
}) => {
  const {
    prefectureSelections,
    togglePrefectureSelection,
    selectAll,
    unSelectAll,
  } = usePrefectureSelections();

  const selectedPrefecture = useMemo(
    () => prefectureSelections.filter((pref) => pref.selected === true),
    [prefectureSelections],
  );

  const onChangeSelectAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        selectAll();
      } else {
        unSelectAll();
      }
    },
    [selectAll, unSelectAll],
  );

  useEffect(() => {
    onChangeSelection(selectedPrefecture);
  }, [onChangeSelection, selectedPrefecture]);

  return (
    <section className={className}>
      <SectionTitle>都道府県</SectionTitle>
      <PrefectureSelector
        prefectureSelections={prefectureSelections}
        onChangeSelection={togglePrefectureSelection}
        onChangeSelectAll={onChangeSelectAll}
      />
    </section>
  );
};

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.25rem;

  @media (max-width: ${(p) => p.theme.breaks.sm}) {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;
