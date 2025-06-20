import React, { Component } from 'react';

import data from "./../utils/Faker"

type Result = {
  url: string;
  title: string;
  description: string;
  image?: string;
};

type SearchResultState = {
  results: Result[];
  featured: Result;
};

class SearchResults extends Component<{}, SearchResultState> {
  constructor(props) {
    super(props);
    this.state = {
      results: data,
      featured: {
        url: data[0].url,
        title: data[0].title,
        description: data[0].description,
        image: data[0].image
      }
    };
  }

  render() {
    const { results, featured } = this.state;

    return (
        <div className="resultsContainer">
        {/* Sección A */}
        <div className="sectionA">
          {results.map((result, index) => (
            <div key={index} className="resultItem">
              <a href={result.url} className="resultUrl">{result.url}</a>
              <h3 className="resultTitle">{result.title}</h3>
              <p className="resultDescription">{result.description}</p>
            </div>
          ))}
        </div>
      
        {/* Sección B */}
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
      </div>
    );
  }
}

export default SearchResults;