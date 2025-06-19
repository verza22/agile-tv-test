import React from 'react';

import Header from './components/header.tsx';
import Footer from './components/footer.tsx';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="centerSearch">Google</div>
        <Footer />
      </div>
    );
  }
}

export default App;
