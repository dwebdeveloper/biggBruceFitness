import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/App.css'
//Imported Pages below here:
import NavBar from '../src/Components/navbar/NavBar';
import Home from '../src/Pages/Home';
import Programs from '../src/Pages/Programs';
import About from '../src/Pages/About';
import Videos from '../src/Pages/Videos';
import NotFound from '../src/Pages/NotFound';


function App() {

  return (
    <Router>

      <div className='App'>
        <NavBar />

        <Switch>
          <Route
            exact path='/'
            component={Home}
          />

          <Route
            exact path='/home'
            component={Home}

          />

          <Route
            exact path='/aboutbigbrucefitness'
            component={About}

          />

          <Route
            exact path='/programs'
            component={Programs}
          />

          <Route
            exact path='videos'
            component={Videos}
          />

          <Route
            exact path='*'
            component={NotFound}
          />

        </Switch>
      </div>

    </Router>


  );

}


export default App;
