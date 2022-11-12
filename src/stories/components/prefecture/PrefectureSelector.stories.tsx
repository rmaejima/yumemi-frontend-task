import React from 'react';

import { ComponentMeta, Story } from '@storybook/react';

import {
  PrefectureSelector,
  Props,
} from 'components/prefecture/PrefectureSelector';

export default {
  component: PrefectureSelector,
} as ComponentMeta<typeof PrefectureSelector>;

export const Index: Story<Props> = (args) => <PrefectureSelector {...args} />;
Index.args = {
  prefectureSelections: [
    { prefCode: 1, prefName: '北海道', selected: true },
    { prefCode: 2, prefName: '青森県', selected: false },
    { prefCode: 3, prefName: '岩手県', selected: false },
    { prefCode: 4, prefName: '宮城県', selected: false },
    { prefCode: 5, prefName: '秋田県', selected: false },
    { prefCode: 6, prefName: '山形県', selected: false },
    { prefCode: 7, prefName: '福島県', selected: false },
    { prefCode: 8, prefName: '茨城県', selected: false },
    { prefCode: 9, prefName: '栃木県', selected: false },
    { prefCode: 10, prefName: '群馬県', selected: false },
    { prefCode: 11, prefName: '埼玉県', selected: false },
    { prefCode: 12, prefName: '千葉県', selected: false },
    { prefCode: 13, prefName: '東京都', selected: false },
    { prefCode: 14, prefName: '神奈川県', selected: false },
    { prefCode: 15, prefName: '新潟県', selected: false },
    { prefCode: 16, prefName: '富山県', selected: false },
    { prefCode: 17, prefName: '石川県', selected: false },
    { prefCode: 18, prefName: '福井県', selected: false },
    { prefCode: 19, prefName: '山梨県', selected: false },
    { prefCode: 20, prefName: '長野県', selected: false },
    { prefCode: 21, prefName: '岐阜県', selected: false },
    { prefCode: 22, prefName: '静岡県', selected: false },
    { prefCode: 23, prefName: '愛知県', selected: false },
    { prefCode: 24, prefName: '三重県', selected: false },
    { prefCode: 25, prefName: '滋賀県', selected: false },
    { prefCode: 26, prefName: '京都府', selected: false },
    { prefCode: 27, prefName: '大阪府', selected: false },
    { prefCode: 28, prefName: '兵庫県', selected: false },
    { prefCode: 29, prefName: '奈良県', selected: false },
    { prefCode: 30, prefName: '和歌山県', selected: false },
    { prefCode: 31, prefName: '鳥取県', selected: false },
    { prefCode: 32, prefName: '島根県', selected: false },
    { prefCode: 33, prefName: '岡山県', selected: false },
    { prefCode: 34, prefName: '広島県', selected: false },
    { prefCode: 35, prefName: '山口県', selected: false },
    { prefCode: 36, prefName: '徳島県', selected: false },
    { prefCode: 37, prefName: '香川県', selected: false },
    { prefCode: 38, prefName: '愛媛県', selected: false },
    { prefCode: 39, prefName: '高知県', selected: false },
    { prefCode: 40, prefName: '福岡県', selected: false },
    { prefCode: 41, prefName: '佐賀県', selected: false },
    { prefCode: 42, prefName: '長崎県', selected: false },
    { prefCode: 43, prefName: '熊本県', selected: false },
    { prefCode: 44, prefName: '大分県', selected: false },
    { prefCode: 45, prefName: '宮崎県', selected: false },
    { prefCode: 46, prefName: '鹿児島県', selected: false },
    { prefCode: 47, prefName: '沖縄県', selected: false },
  ],
};
