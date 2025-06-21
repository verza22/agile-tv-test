import React, { Component } from 'react';

import data from "./../utils/Faker"
import Loading from './loading.tsx';
import NotFound from './notFound.tsx';

interface Result {
  url: string;
  title: string;
  description: string;
  image?: string;
};

interface SearchResultsProps {
  search: string
}

interface SearchResultState {
  results: Result[];
  featured: Result|null;
  loading: boolean;
};

class SearchResults extends Component<SearchResultsProps, SearchResultState> {
  constructor(props: SearchResultsProps) {
    super(props);
    this.state = {
      results: data,
      featured: null,
      loading: false
    };
  }

  handleResult = (result: Result) => {
    this.setState({
      featured: result
    })
  }

  handleSearch = () => {
    this.setState({loading: true});
    setTimeout(()=>{
      this.setState({loading: false});
      const search = this.props.search.toLowerCase();
      const newData = data.filter(x=> x.title.toLowerCase().includes(search) || x.type.toLowerCase().includes(search));
      this.setState({results: newData});
    },500);
  }

  componentDidMount(): void {
    this.handleSearch();
  }

  componentDidUpdate(prevProps: Readonly<SearchResultsProps>, prevState: Readonly<SearchResultState>, snapshot?: any): void {
    if(prevProps.search !== this.props.search)
    this.handleSearch();
  }

  overlayClick = () => {
    this.setState({featured: null});
  }

  render() {
    const { results, featured } = this.state;

    return (
      <>
        {
          this.state.loading ? <Loading/> :
          <>
            {
              (this.state.results.length === 0 || this.props.search === "") ?
              <NotFound search={this.props.search} /> :
              <div className="resultsContainer">
              {/* Section A */}
              <div className="sectionA">
                {results.map((result, index) => (
                  <div key={index} className="resultItem">
                    <a href={result.url} target='_blank' className="resultUrl">{result.url}</a>
                    <h3 className="resultTitle" onClick={()=> this.handleResult(result)}>{result.title}</h3>
                    <p className="resultDescription">{result.description}</p>
                  </div>
                ))}
              </div>
            
              {/* Section B */}
              {
                featured !== null &&
                <>
                  <div id="overlay" onClick={() => this.overlayClick()}></div>
                  <div className="sectionB">
                    <div className="featureBox">
                      {featured.image && (
                        <img src={featured.image} alt="Featured" className="featureImage" />
                      )}
                      <a href={featured.url} className="resultUrl">{featured.url}</a>
                      <h3 className="resultTitle">{featured.title}</h3>
                      <p className="resultDescription">{featured.description}</p>
                    </div>
                  </div>
                </>
              }
              </div>
            }
          </>

        }
      </>
    );
  }
}

export default SearchResults;