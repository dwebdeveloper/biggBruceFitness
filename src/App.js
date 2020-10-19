import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Imported Pages below here:
import NavBar from '../src/Components/navbar/NavBar';
import Home from '../src/Pages/Home';
import Programs from '../src/Pages/Programs';
import NotFound from '../src/Pages/NotFound';

function App() {

  return (
    <Router>

      <div className='App'>
        <NavBar />

        <Switch>
          <Route
            exact path='/home'
            Component={Home}

          />

          <Route exact path='/programs'
            Component={Programs}
          />

          <Route
            exact path='*'
            Component={NotFound}
          />

        </Switch>
      </div>

    </Router>


  );

}


export default App;
