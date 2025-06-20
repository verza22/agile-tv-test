import React from 'react';

import Header from './components/header.tsx';
import MainSearch from './components/mainSearch.tsx';
import Result from './components/result.tsx';
import Loading from './components/loading.tsx';
import NotFound from './components/notFound.tsx';
import Footer from './components/footer.tsx';

class App extends React.Component {
  render() {
    return (
      <div className="app flex">
        <Header />
        <div className="px-16 flex-1 flex">
          <MainSearch/>
          {/* <Result /> */}
          {/* <Loading/> */}
          {/* <NotFound search="xxx"/> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
