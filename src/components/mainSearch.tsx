import React from 'react';

import Search from "./search.tsx"
import Logo from "./logo.tsx"

class MainSearch extends React.Component {
  render() {
    return (
        <div className="centerSearch">
            <Logo height={"auto"} width={"auto"} className="m-auto mb-16"/>
            <Search className="m-auto" />
            <div className="divSearch">
                <button className="btnSearch">Buscar</button>
            </div>
        </div>
    );
  }
}

export default MainSearch;
