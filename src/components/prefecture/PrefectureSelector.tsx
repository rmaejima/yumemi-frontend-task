import React from 'react';

import styled from 'styled-components';

import { CheckBox } from 'components/common/CheckBox';

import { PrefectureSelection } from 'utils/hooks/usePrefectureSelections';

type Props = {
  prefectureSelections: PrefectureSelection[];
  onChangeSelection: (prefCode: number) => void;
};

/** 都道府県選択コンポーネント */
export const PrefectureSelector: React.FC<Props> = ({
  prefectureSelections,
  onChangeSelection,
}) => {
  return (
    <Container>
      {prefectureSelections.map((pref) => (
        <CheckBox
          key={pref.prefCode}
          id={`prefecture_selection__${pref.prefCode}`}
          name={pref.prefName}
          checked={pref.selected}
          onChange={() => onChangeSelection(pref.prefCode)}
          label={pref.prefName}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.25rem;
`;
