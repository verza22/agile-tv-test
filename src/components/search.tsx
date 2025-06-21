import React from 'react';

interface SearchProps {
  className?: string,
  search: string,
  onSearch: (search: string) => void,
}

class Search extends React.Component<SearchProps> {
  static defaultProps = {
    className: ''
  };
  
  render() {
    return (
        <div className={"search "+this.props.className} style={{width: 400}}>
            <img src="/src/assets/search.svg" className="inputIcon" />
            <input value={this.props.search} onChange={(e) => this.props.onSearch(e.target.value)}/>
            <button onClick={() => this.props.onSearch('')} className="btn-none">
              <img src="/src/assets/cancel.svg" className="inputIcon" />
            </button>
        </div>
    );
  }
}

export default Search;
