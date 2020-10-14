import { Customer } from '../type/Customer';

/**
 * 顧客のリストを取得するためのメソッド
 *
 * 本来であればサーバー側にデータベースが用意されていてそこにみんなでアクセスしにいく。
 **/

export const getCustomerList = (): Customer[] => {
  return [
    {
      id: 1,
      name: 'hoge山 hoge美',
      year: 2,
      plan: 'A',
    },
    {
      id: 2,
      name: 'hoge杉 hoge信',
      year: 3,
      plan: 'B',
    },
  ];
};
