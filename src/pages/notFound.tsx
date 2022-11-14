import React from 'react';

import styled from 'styled-components';

import { BaseLayout } from 'components/common/BaseLayout';

/** 404 ページコンポーネント */
export const NotFoundPage: React.FC = () => {
  return (
    <BaseLayout>
      <PageContainer>
        <PageTitle>404 Not Found</PageTitle>
        <Description>お探しのページが見つかりませんでした。</Description>
      </PageContainer>
    </BaseLayout>
  );
};

const PageContainer = styled.div`
  max-width: ${(p) => p.theme.breaks.lg};
  margin: 0 auto;
  padding: 1rem;
`;

const PageTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const Description = styled.p`
  font-size: 1rem;
`;
