import React, { Suspense, useEffect, useState } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';

import { BaseLayout } from 'components/common/BaseLayout';
import { PrefectureSelectorSection } from 'components/pages/top/PrefectureSelectorSection';

import { Prefecture } from 'types/resas/prefecture';

const TopPage: React.FC = () => {
  const [selectedPrefecture, setSelectedPrefecture] = useState<Prefecture[]>(
    [],
  );

  // TODO: 確認用のため削除
  useEffect(() => {
    console.log(selectedPrefecture);
  }, [selectedPrefecture]);

  return (
    <BaseLayout>
      <PageContainer>
        <SectionWrapper>
          <ErrorBoundary fallback={<p>error</p>}>
            <Suspense fallback={<p>now loading</p>}>
              <PrefectureSelectorSection
                onChangeSelection={setSelectedPrefecture}
              />
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
