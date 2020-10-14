import * as React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { createHashHistory } from 'history';
import LandingPage from './LandingPage/LandingPage';

const history = createHashHistory();

const App = () => {
  const Context = React.createContext<{ user: string }>({ user: null });

  return (
    <div>
      <Context.Provider value={{ user: 'a' }}>
        <HashRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={() =>
                LandingPage({
                  history,
                })
              }
            />
          </Switch>
        </HashRouter>
      </Context.Provider>
    </div>
  );
};

export default App;
