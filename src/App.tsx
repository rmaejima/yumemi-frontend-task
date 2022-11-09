import React from 'react';

import styled from 'styled-components';

function App() {
  return <ColorText>App template</ColorText>;
}

export default App;

const ColorText = styled.p`
  color: ${(p) => p.theme.colors.primary[500]};
`;
