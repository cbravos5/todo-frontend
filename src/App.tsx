import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/HomePage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

const App: React.FC<Record<string, never>> = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
