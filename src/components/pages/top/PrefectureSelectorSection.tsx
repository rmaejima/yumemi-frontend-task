import React, { useEffect, useMemo } from 'react';

import styled from 'styled-components';

import { PrefectureSelector } from 'components/prefecture/PrefectureSelector';

import { usePrefectureSelections } from 'utils/hooks/usePrefectureSelections';

import { Prefecture } from 'types/resas/prefecture';

type Props = {
  onChangeSelection: (prefecture: Prefecture[]) => void;
  className?: string;
};

export const PrefectureSelectorSection: React.FC<Props> = ({
  onChangeSelection,
  className,
}) => {
  const { prefectureSelections, togglePrefectureSelection } =
    usePrefectureSelections();

  const selectedPrefecture = useMemo(
    () => prefectureSelections.filter((pref) => pref.selected === true),
    [prefectureSelections],
  );

  useEffect(() => {
    onChangeSelection(selectedPrefecture);
  }, [selectedPrefecture]);
  return (
    <section className={className}>
      <SectionTitle>都道府県</SectionTitle>
      <PrefectureSelector
        prefectureSelections={prefectureSelections}
        onChangeSelection={togglePrefectureSelection}
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
