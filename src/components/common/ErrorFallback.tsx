import React from 'react';

type Props = {
  error: Error;
};

export const ErrorFallback: React.FC<Props> = ({ error }) => {
  return <p>{error.message}</p>;
};
