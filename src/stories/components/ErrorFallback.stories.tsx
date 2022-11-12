import React from 'react';

import { ComponentMeta, Story } from '@storybook/react';

import { ErrorFallback, Props } from 'components/common/ErrorFallback';

export default {
  component: ErrorFallback,
} as ComponentMeta<typeof ErrorFallback>;

export const Index: Story<Props> = (args) => <ErrorFallback {...args} />;
Index.args = {
  error: {
    name: 'Not Found',
    message: '指定したデータが存在しません',
  },
};
