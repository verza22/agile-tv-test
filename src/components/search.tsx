import React from 'react';

interface SearchProps {
  className?: string
}

class Search extends React.Component<SearchProps> {
  render() {
    return (
        <div className={"search "+this.props.className} style={{width: 400}}>
            <img src="/src/assets/search.svg" className="inputIcon" />
            <input/>
            <img src="/src/assets/cancel.svg" className="inputIcon" />
        </div>
    );
  }
}

export default Search;
