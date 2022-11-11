import React from 'react';

import { ComponentMeta, Story } from '@storybook/react';

import { LoadingSpinner, Props } from 'components/common/LoadingSpinner';

export default {
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

export const Index: Story<Props> = (args) => <LoadingSpinner {...args} />;
