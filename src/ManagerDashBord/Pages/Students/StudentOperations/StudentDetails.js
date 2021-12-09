import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

class StudentDetails extends React.Component {

    showStudentDetails = (data) => {
        return (
          <div>
             <p>{data.firstname}</p>
             <p>{data.middlename}</p>
             <p>{data.firstname}</p>
             <p>{data.birthdate}</p>
             <p>{data.nationality}</p>
             <p>{data.gender}</p>
          </div>
        );
    }
    render(){
        return (
           <div>
              { this.props.location.state === undefined ? <Spinner animation="grow" variant="success" />: this.showStudentDetails(this.props.location.state.student)}
           </div>
        );
    }
}

export default StudentDetails;