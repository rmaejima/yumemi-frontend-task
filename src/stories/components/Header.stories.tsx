import React from 'react';

import { ComponentMeta } from '@storybook/react';

import { Header } from 'components/common/Header';

export default {
  component: Header,
} as ComponentMeta<typeof Header>;

export const Index = () => <Header />;
