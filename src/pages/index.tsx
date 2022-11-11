import React, { Suspense, useState } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';

import { BaseLayout } from 'components/common/BaseLayout';
import { PopulationGraphSection } from 'components/pages/top/PopulationGraphSection';
import { PrefectureSelectorSection } from 'components/pages/top/PrefectureSelectorSection';

import { Prefecture } from 'types/resas/prefecture';

/** トップページコンポーネント */
const TopPage: React.FC = () => {
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>(
    [],
  );

  return (
    <BaseLayout>
      <PageContainer>
        <SectionWrapper>
          <ErrorBoundary fallback={<p>error</p>}>
            <Suspense fallback={<p>now loading</p>}>
              <PrefectureSelectorSection
                onChangeSelection={setSelectedPrefectures}
              />
            </Suspense>
          </ErrorBoundary>
        </SectionWrapper>
        <SectionWrapper>
          <ErrorBoundary fallback={<p>error</p>}>
            <Suspense fallback={<p>now loading</p>}>
              <PopulationGraphSection prefectures={selectedPrefectures} />
            </Suspense>
          </ErrorBoundary>
        </SectionWrapper>
      </PageContainer>
    </BaseLayout>
  );
};

export default TopPage;

const PageContainer = styled.div`
  max-width: ${(p) => p.theme.breaks.lg};
  margin: 0 auto;
  padding: 1rem;
`;

const SectionWrapper = styled.div`
  margin-bottom: 2rem;
`;
