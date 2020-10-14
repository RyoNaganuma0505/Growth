import * as React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import MainPage from './MainPage/MainPage';

// Reactの本体
const App = () => {
  const Context = React.createContext<{ user: string }>({ user: null });

  return (
    <div>
      <Context.Provider value={{ user: 'a' }}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </HashRouter>
      </Context.Provider>
    </div>
  );
};

export default App;
