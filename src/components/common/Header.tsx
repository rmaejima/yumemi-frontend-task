import React from 'react';

import styled from 'styled-components';

/** ヘッダーの高さ */
export const HEADER_HEIGHT = '64px';

/** ヘッダーコンポーネント */
export const Header: React.FC = () => {
  return (
    <Container>
      <Title>総人口推移グラフ表示アプリ</Title>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${HEADER_HEIGHT};
  background-color: ${(p) => p.theme.colors.gray[100]};
  border-bottom: 1px solid ${(p) => p.theme.colors.gray[200]};

  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;

  @media (max-width: ${(p) => p.theme.breaks.sm}) {
    font-size: 1rem;
  }
`;
