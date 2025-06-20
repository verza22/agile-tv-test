import React from 'react';

import Logo from "./logo.tsx";
import Search from './search.tsx';

class Header extends React.Component {
  render() {
    return (
      <div className="flex px-16 border-bottom-1">
        {/* <p className="flex-1">
           <b>Agile Content</b> Frontend test 
        </p> */}
        <div className="flex-1 flex my-8">
          <div className="mr-16">
            <Logo height={40} width={120} />
          </div>
          <Search/>
        </div>
        <div className="m-auto">
          <img src="/src/assets/menu.png" className="mx-8" />
          <img src="/src/assets/profile.png" className="br-20 profile" />
        </div>
      </div>
    );
  }
}

export default Header;
