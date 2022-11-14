import React from 'react';

export type Props = {
  error: Error;
};

/** エラー時表示コンポーネント */
export const ErrorFallback: React.FC<Props> = ({ error }) => {
  return <p>{error.message}</p>;
};
