import * as React from 'react';
import styled from 'styled-components';
import EnumManager from '../EnumManager/EnumManager';

type Prop = {
  history: any;
};

const Root = styled.div`
  height: 100%;
`;

/**
 * サイトアクセス時の初期表示ページ
 */
const LandingPage = (props: Prop) => {
  return (
    <Root>
      <EnumManager />
    </Root>
  );
};

export default LandingPage;
