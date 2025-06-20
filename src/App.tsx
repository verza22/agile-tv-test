import React from 'react';

import Header from './components/header.tsx';
import MainSearch from './components/mainSearch.tsx';
import Result from './components/result.tsx';
import Footer from './components/footer.tsx';

interface AppState {
  enableSearch: boolean,
  search: string
}

class App extends React.Component<{}, AppState> {

  constructor(props: any){
    super(props);

    this.state = {
      enableSearch: false,
      search: ''
    }
  }

  onSearch = (search: string) => {
    this.setState({search});
  }
  
  setEnableSearch = (enableSearch: boolean) => {
    this.setState({enableSearch})
  }

  render() {
    return (
      <div className="app flex">
        <Header 
          enableSearch={this.state.enableSearch}
          search={this.state.search}
          onSearch={this.onSearch}
          setEnableSearch={this.setEnableSearch}
        />
        <div className="px-16 flex-1 flex">
          {
            this.state.enableSearch ? 
            <>
              <Result 
                search={this.state.search}
              />
            </> :
            <MainSearch
              search={this.state.search}
              onSearch={this.onSearch}
              setEnableSearch={this.setEnableSearch}
            />
          }
          {/*  */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
