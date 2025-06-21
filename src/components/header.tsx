import React from 'react';

import Logo from "./logo.tsx";
import Search from './search.tsx';

interface HeaderProps {
  enableSearch: boolean,
  search: string,
  onSearch: (search: string) => void,
  setEnableSearch: (enableSearch: boolean) => void
}

class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <div className="flex px-16 border-bottom-1">
        {
          this.props.enableSearch ? 
          <div id="header" className="flex-1 flex my-8">
            <div className="mr-16">
              <button className="btn-none" onClick={()=> this.props.setEnableSearch(false)}>
                <Logo height={40} width={120} />
              </button>
            </div>
            <Search
              search={this.props.search}
              onSearch={this.props.onSearch}
            />
          </div> :
            <p className="flex-1">
            <b>Agile Content</b> Frontend test 
          </p>
        }
        <div id="menuRight" className="m-auto">
          <img src="/src/assets/menu.png" className="mx-8" />
          <img src="/src/assets/profile.png" className="br-20 profile" />
        </div>
      </div>
    );
  }
}

export default Header;
