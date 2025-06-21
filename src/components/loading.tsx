import React, { Component } from 'react';

interface LoadingState {
    results: number[]
}

class Loading extends Component<{}, LoadingState> {
  constructor(props: any) {
    super(props);
    this.state = {
      results: Array.from({ length: 12 }, (_, i) => i)
    };
  }

  render() {

    return (
        <div className="resultsContainer">
        {/* Section A */}
        <div className="sectionA">
          {this.state.results.map((result, index) => (
            <div key={index} className="loadingDiv">
              <div className="loading" style={{height: 14, width: '40%'}}></div>
              <div className="loading" style={{height: 20, width: '60%'}}></div>
              <div className="loading" style={{height: 14, width: '100%'}}></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Loading;