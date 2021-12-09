import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

class TeacherDetails extends React.Component {

    showTeacherDetails = (data) => {

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
              { this.props.location.state == undefined ? <Spinner animation="grow" variant="success" />: this.showTeacherDetails(this.props.location.state.teacher)}
            </div>
        );
    }
}

export default TeacherDetails;