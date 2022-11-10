import React from 'react';

import styled from 'styled-components';

import { HEADER_HEIGHT, Header } from './Header';

type Props = {
  children?: React.ReactNode;
};

export const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

const Container = styled.div`
  padding-top: ${HEADER_HEIGHT};
`;
