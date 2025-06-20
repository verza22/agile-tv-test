import React from 'react';

import Search from "./search.tsx"
import Logo from "./logo.tsx"

interface MainSearchProps {
  search: string,
  onSearch: (search: string) => void,
  setEnableSearch: (enableSearch: boolean) => void
}

class MainSearch extends React.Component<MainSearchProps> {
  render() {
    return (
        <div className="centerSearch">
            <Logo height={"auto"} width={"auto"} className="m-auto mb-16"/>
            <Search 
              className="m-auto"
              search={this.props.search}
              onSearch={this.props.onSearch}
            />
            <div className="divSearch">
                <button 
                disabled={this.props.search === ""}
                className="btnSearch" 
                onClick={() => this.props.setEnableSearch(true)}
                >Buscar</button>
            </div>
        </div>
    );
  }
}

export default MainSearch;
