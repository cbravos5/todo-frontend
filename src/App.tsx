import React from 'react';
import './styles/page.css';
import './styles/todo.css';
import './styles/form.css';
import Home from './pages/HomePage';

const App: React.FC<Record<string, never>> = () => {
  return <Home />;
};

export default App;
