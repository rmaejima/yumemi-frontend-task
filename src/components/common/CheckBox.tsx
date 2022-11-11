import React from 'react';

import styled from 'styled-components';

export type Props = React.ComponentProps<'input'> & {
  label: string;
};

/** チェックボックスコンポーネント */
export const CheckBox: React.FC<Props> = ({ label, ...props }) => {
  return (
    <StyledCheckBox>
      <input {...props} type="checkbox" />
      {label}
    </StyledCheckBox>
  );
};

const StyledCheckBox = styled.label`
  display: flex;
  gap: 0.25rem;

  input {
    appearance: none;
    place-content: center;
    display: grid;
    width: 1.25rem;
    height: 1.25rem;
    margin: 0;
    border: 2px solid currentColor;
    border-radius: 0.25rem;

    &::before {
      content: '';
      clip-path: polygon(
        14% 44%,
        0 65%,
        50% 100%,
        100% 16%,
        80% 0%,
        43% 62%
      ); // check layout
      transform: scale(0);
      transform-origin: bottom left;
      transition: 120ms transform ease-in-out;

      width: 0.75rem;
      height: 0.75rem;
      background-color: ${(p) => p.theme.colors.primary[700]};
    }

    :checked {
      &::before {
        transform: scale(1);
      }
    }
  }
`;
