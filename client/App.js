import React from 'react';
import ContentContainer from './containers/ContentContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="app">
      <div className="header">
        <HeaderContainer />
      </div>
      <div className="content">
        <ContentContainer />
      </div>
    </div>
  );
}

export default App;
