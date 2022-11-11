import React from 'react';

import styled from 'styled-components';

import { PopulationGraph } from 'components/population/PopulationGraph';

import { usePrefecturePopulations } from 'utils/api/population';

import { Prefecture } from 'types/resas/prefecture';

interface Props {
  prefectures: Prefecture[];
}

export const PopulationGraphSection: React.FC<Props> = ({ prefectures }) => {
  const { data } = usePrefecturePopulations(prefectures);
  return (
    <section>
      <SectionTitle>人口構成</SectionTitle>
      <PopulationGraph prefecturePopulations={data ?? []} />
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
