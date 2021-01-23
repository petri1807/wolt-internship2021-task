import * as React from 'react';
import './App.css';
import { Venues } from './components/Venues';

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return <Venues />;
};

export default App;
