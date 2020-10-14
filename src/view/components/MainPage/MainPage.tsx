import * as React from 'react';
import styled from 'styled-components';
import CustomerList from '../CustomerList/CustomerList';
import './MainPage.scss';

type Prop = {
  // no value
};

const Root = styled.div`
  height: 100%;
`;

/**
 * サイトアクセス時の初期表示ページ
 */
const MainPage = (props: Prop) => {
  return (
    <Root className="main-page">
      <div className="header">
        <div className=" title" onClick={() => alert('this is title')}>
          this is title
        </div>
      </div>
      <CustomerList />
    </Root>
  );
};

export default MainPage;
