import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

class RankDetails extends React.Component {

    showRankDetails = (data) => {
        return (
          <div>
             <p>{data.rankName}</p>
             <p>{data.rankHead}</p>
             <p>{data.totalMembers}</p>
             <p>{data.rankDescription}</p>
          </div>
        );
    }
    render(){
        return (
           <div>
              { this.props.location.state === undefined ? <Spinner animation="grow" variant="success" />: this.showRankDetails(this.props.location.state.rank)}
           </div>
        );
    }
}

export default RankDetails;

