import React from 'react';

import { ComponentMeta, Story } from '@storybook/react';

import { CheckBox, Props } from 'components/common/CheckBox';

export default {
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: Story<Props> = (args) => <CheckBox {...args} />;

export const Index = Template.bind({});
Index.args = {
  label: 'チェックボックスラベル',
};
