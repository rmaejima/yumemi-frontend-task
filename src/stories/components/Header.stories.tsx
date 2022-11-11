import React from 'react';

import { ComponentMeta } from '@storybook/react';

import { Header } from 'components/common/Header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const CommonHeader = () => <Header />;
