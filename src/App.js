import React from 'react';
import { Switch, Route } from 'react';
//Import Pages below here:
import Home from '../src/Pages/Home'



class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          Component={Home}
        >

        </Route>

      </Switch>
    );
  }
}


export default App;
