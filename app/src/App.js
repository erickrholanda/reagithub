import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Header from './components/Header';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Favoritos from './pages/Favoritos';


import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Box my={2}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/favoritos" component={Favoritos} />
              <Route path="/perfil/:username" component={Perfil} />
            </Switch>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;
