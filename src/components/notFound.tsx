import React from 'react';

import data from './../utils/Faker'

interface NotFoundProps {
    search: string
}

interface NotFoundState {
    result: string
}

class NotFound extends React.Component<NotFoundProps, NotFoundState> {

    constructor(props: NotFoundProps){
        super(props);

        this.state = {
            result: data.filter((x,i) => i<10).map(x=> x.type).join(", ")
        }
    }

  render() {
    return <div>
        {
            this.props.search !== "" &&
            <p>No results found for <b>'{this.props.search}'</b></p>
        }
        <p>Try looking for: <b>{this.state.result}</b></p>
    </div>
  }
}

export default NotFound;
