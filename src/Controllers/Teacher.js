import axios from '../url';
import {  TEACHER_HOME_DISPLAYS, TEACHER_STUDENTS_CLASS,
          TEACHER_CLASS_INFO, STUDENT_CLASS_INFO,
          STUDENT_CLASS_GRADES_INFO, TEACHER_GUARDIAN_INFO,
          TEACHER_ADDED_ASSIGNMENT, TEACHER_ASSIGNMENTS, EDITED_ASSIGNMENT, DELETED_ASSIGNMENT,
          TEACHER_SUBJECTS 
       }
          from '../Components/Constants';


          
export const teacherHomeDisplays = (teacherHomeDisplaysVAR) => {
  return {
      type: TEACHER_HOME_DISPLAYS,
        teacherHomeDisplaysVAR  
  };
};

export const teacherStudentsForClass = (teacherStudentsClassVAR) => {
  return {
      type: TEACHER_STUDENTS_CLASS,
        teacherStudentsClassVAR  
  };
};

export const teacherClassInfo = (teacherClassVAR) => {
  return {
      type: TEACHER_CLASS_INFO,
       teacherClassVAR  
  };
};

export const studentClassInfo = (studentClassVAR) => {
  return {
      type: STUDENT_CLASS_INFO,
       studentClassVAR  
  };
};

export const studentClassGradesInfo = (studentClassGradesVAR) => {
  return {
      type: STUDENT_CLASS_GRADES_INFO,
       studentClassGradesVAR  
  };
};

export const teacherGuardianInfo = (teacherGuardianVAR) => {
  return {
      type: TEACHER_GUARDIAN_INFO,
       teacherGuardianVAR  
  };
};

export const teacherAddedAsignment = (teacherAddedAssignmentVAR) => {
  return {
      type: TEACHER_ADDED_ASSIGNMENT,
       teacherAddedAssignmentVAR  
  };
};

export const teacherAssignemts = (teacherAssignmentsVAR) => {
  return {
      type: TEACHER_ASSIGNMENTS,
       teacherAssignmentsVAR  
  };
};

export const editedTeacherAssignment = (editedAssignmentVAR) => {
  return {
      type: EDITED_ASSIGNMENT,
       editedAssignmentVAR  
  };
};

export const deletedAssignment = (deletedAssignmentVAR) => {
  return {
      type: DELETED_ASSIGNMENT,
       deletedAssignmentVAR  
  };
};

export const teacherSubjects = (teacherSubjectsVAR) => {
  return {
      type: TEACHER_SUBJECTS,
       teacherSubjectsVAR  
  };
};

// teacher

export const getTeacherHomeDisplays = (data) => {
  return dispatch => {
      axios.get(`/teacherhome/display/:${data}`)
        .then(response => {
          dispatch(teacherHomeDisplays(response.data));
        })
        .catch(err=> {
            console.log("something went wrong, please contact the admin");
        });
  }   
}

export const getTeacherStudentsForTeacher = (data) => {
  return dispatch => {
      axios.post(`/teacherstudentforteacher`, {data})
        .then(response => {
          dispatch(teacherStudentsForClass(response.data));
        })
        .catch(err=> {
            console.log("something went wrong, please contact the admin");
        });
  }   
}


  export const getTeacherClassessInfo = (data) => {
    return dispatch => {
        axios.get(`/teacherclass/info/:${data}`)
          .then(response => {
            dispatch(teacherClassInfo(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const getStudentsClassesInfo = (data) => {
    return dispatch => {
        axios.get(`/studentclass/info/:${data}`)
          .then(response => {
            dispatch(studentClassInfo(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }
  
  export const getStudentClassGradesInfo = (data) => {
    return dispatch => {
        axios.get(`/studentgrades/class/:${data}`)
          .then(response => {
            dispatch(studentClassGradesInfo(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const getTeacherGuardianInfo = (data) => {
    return dispatch => {
        axios.get(`/teacher/guardian/:${data}`)
          .then(response => {
            dispatch(teacherGuardianInfo(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const getTeacherAssignments = (data) => {
    return dispatch => {
        axios.get(`/assignments/teacher/:${data}`)
          .then(response => {
            dispatch(teacherAssignemts(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const teacherAddsNewAssignment = (data) => {
    return dispatch => {
        axios.post(`/newassignment/teacher`, { data })
          .then(response => {
            dispatch(teacherAddedAsignment(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const deleteAssignment = (id) => {
    return dispatch => {
  axios.delete(`/delete/assignment/:${id}`)
          .then(response => {
            dispatch(deletedAssignment(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }
 
  export const editTeacherAssignment = (values) => {
    return dispatch => {
  axios.put(`/edit/teacher/assignment`, {values})
          .then(response => {
            dispatch(editedTeacherAssignment(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const getTeacherSubjects = (data) => {
    return dispatch => {
        axios.get(`/subjects/teacher/:${data}`)
          .then(response => {
            dispatch(teacherSubjects(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }