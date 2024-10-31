import SlideShow from './pages/SlideShow';
import VrShow from './pages/VrShow';
import { HashRouter  as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

function App() {



  return (
    <>
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={SlideShow} />
        <Route path="/vrshow" component={VrShow} />
      </Switch>
    </Router>
    </div>
    </>
  );
}

export default App;
