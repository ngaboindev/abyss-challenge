import React from 'react';
import Header from './components/Header';
import TreeWrapper from './components/TreeWrapper';

const App = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <TreeWrapper />
      </div>
    </>
  );
};

export default App;
