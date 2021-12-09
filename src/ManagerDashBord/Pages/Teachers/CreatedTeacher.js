import React from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

const CreatedTeacher = () => {

    const showAddedTeacher = () => {
        return (
            <div>
                <p>{ this.props.addedTeacher.identity }</p>
                <p>{ this.props.addedTeacher.password }</p>
            </div>    
        )
    }
    return (
        <div>
          { this.props.addedTeacher ? showAddedTeacher(): <Spinner animation="grow" variant="success" /> }             
        </div>
    );
}

const mapStateToProps = state => {
    return {
      addedTeacher: state.Admin.addedTeacher
    }
  }

export default connect(mapStateToProps)(CreatedTeacher);