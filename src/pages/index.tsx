import React, { Suspense, useState } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';

import { BaseLayout } from 'components/common/BaseLayout';
import { ErrorFallback } from 'components/common/ErrorFallback';
import { LoadingSpinner } from 'components/common/LoadingSpinner';
import { PopulationGraphSection } from 'components/pages/top/PopulationGraphSection';
import { PrefectureSelectorSection } from 'components/pages/top/PrefectureSelectorSection';

import { Prefecture } from 'types/resas';

/** トップページコンポーネント */
const TopPage: React.FC = () => {
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>(
    [],
  );

  return (
    <BaseLayout>
      <PageContainer>
        <SectionWrapper>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense
              fallback={
                <LoadingSpinnerContainer>
                  <LoadingSpinner />
                </LoadingSpinnerContainer>
              }
            >
              <PrefectureSelectorSection
                onChangeSelection={setSelectedPrefectures}
              />
            </Suspense>
          </ErrorBoundary>
        </SectionWrapper>
        <SectionWrapper>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense
              fallback={
                <LoadingSpinnerContainer>
                  <LoadingSpinner />
                </LoadingSpinnerContainer>
              }
            >
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

const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem;
`;
