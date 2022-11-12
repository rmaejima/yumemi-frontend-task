import React from 'react';

import { ComponentMeta, Story } from '@storybook/react';

import { PopulationGraph, Props } from 'components/population/PopulationGraph';

export default {
  component: PopulationGraph,
} as ComponentMeta<typeof PopulationGraph>;

const Template: Story<Props> = (args) => <PopulationGraph {...args} />;

export const Index = Template.bind({});
Index.args = {
  prefecturePopulations: [
    {
      prefCode: 1,
      prefName: '北海道',
      populations: [
        { year: 1960, value: 5039206 },
        { year: 1965, value: 5171800 },
        { year: 1970, value: 5184287 },
        { year: 1975, value: 5338206 },
        { year: 1980, value: 5575989 },
        { year: 1985, value: 5679439 },
        { year: 1990, value: 5643647 },
        { year: 1995, value: 5692321 },
        { year: 2000, value: 5683062 },
        { year: 2005, value: 5627737 },
        { year: 2010, value: 5506419 },
        { year: 2015, value: 5381733 },
        { year: 2020, value: 5216615 },
        { year: 2025, value: 5016554 },
        { year: 2030, value: 4791592 },
        { year: 2035, value: 4546357 },
        { year: 2040, value: 4280427 },
        { year: 2045, value: 4004973 },
      ],
    },
    {
      prefCode: 2,
      prefName: '青森県',
      populations: [
        { year: 1960, value: 1426606 },
        { year: 1965, value: 1416591 },
        { year: 1970, value: 1427520 },
        { year: 1975, value: 1468646 },
        { year: 1980, value: 1523907 },
        { year: 1985, value: 1524448 },
        { year: 1990, value: 1482873 },
        { year: 1995, value: 1481663 },
        { year: 2000, value: 1475728 },
        { year: 2005, value: 1436657 },
        { year: 2010, value: 1373339 },
        { year: 2015, value: 1308265 },
        { year: 2020, value: 1235971 },
        { year: 2025, value: 1157332 },
        { year: 2030, value: 1076393 },
        { year: 2035, value: 993737 },
        { year: 2040, value: 908974 },
        { year: 2045, value: 823610 },
      ],
    },
    {
      prefCode: 23,
      prefName: '愛知県',
      populations: [
        { year: 1960, value: 4206313 },
        { year: 1965, value: 4798653 },
        { year: 1970, value: 5386163 },
        { year: 1975, value: 5923569 },
        { year: 1980, value: 6221638 },
        { year: 1985, value: 6455172 },
        { year: 1990, value: 6690603 },
        { year: 1995, value: 6868336 },
        { year: 2000, value: 7043300 },
        { year: 2005, value: 7254704 },
        { year: 2010, value: 7410719 },
        { year: 2015, value: 7483128 },
        { year: 2020, value: 7505224 },
        { year: 2025, value: 7455615 },
        { year: 2030, value: 7359302 },
        { year: 2035, value: 7227958 },
        { year: 2040, value: 7070766 },
        { year: 2045, value: 6899465 },
      ],
    },
  ],
};
