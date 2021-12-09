import axios from '../url';
import { ADMIN_HOME_DISPLAYS,
         LIST_TEACHERS, ADDED_TEACHER, EDITED_TEACHER, ADDED_GUARDIAN,
         LIST_STUDENTS, EDITED_STUDENT, ADDED_STUDENT, LIST_GUARDIANS, EDITED_GUARDIAN,
         SUBJECT_TEACHER, SUBJECT_STUDENT, CLASS_TEACHER, CLASS_STUDENT,
         DELETED_TEACHER, DELETED_STUDENT, DELETED_GUARDIAN,
         LIST_RANKS, ADDED_RANK, EDITED_RANK, DELETED_RANK,
         LIST_CANDIDATES, ADDED_CANDIDATE, EDITED_CANDIDATE, DELETED_CANDIDATE
         }
          from '../Components/Constants';



export const adminGotDisplays = (adminHomeDisplaysVAR) => {
  return {
      type: ADMIN_HOME_DISPLAYS,
        adminHomeDisplaysVAR  
  };
};


export const listTeachers = (teachers) => {
    return {
        type: LIST_TEACHERS,
         teachers  
    };
 };

 export const addedTeacher = (addedTeacherVAR) => {
  return {
      type: ADDED_TEACHER,
       addedTeacherVAR  
  };
};

export const addedStudent = (addedStudentVAR) => {
  return {
      type: ADDED_STUDENT,
       addedStudentVAR  
  };
};

export const editedTeacher = (editedTeacher) => {
  return {
      type: EDITED_TEACHER,
       editedTeacher  
  };
};

export const deletedTeacher = (deletedTeacherVAR) => {
  return {
      type: DELETED_TEACHER,
       deletedTeacherVAR  
  };
};

export const listStudents = (students) => {
  return {
      type: LIST_STUDENTS,
       students  
  };
};

export const editedStudent = (editedStudentVAR) => {
  return {
      type: EDITED_STUDENT,
       editedStudentVAR  
  };
};

export const deletedStudent = (deletedStudentVAR) => {
  return {
      type: DELETED_STUDENT,
       deletedStudentVAR  
  };
};

export const listGuardians = (guardians) => {
  return {
      type: LIST_GUARDIANS,
       guardians  
  };
};

export const addedGuardian = (addedGuardianVAR) => {
  return {
      type: ADDED_GUARDIAN,
       addedGuardianVAR  
  };
};

export const editedGuardian = (editedGuardianVAR) => {
  return {
      type: EDITED_GUARDIAN,
       editedGuardianVAR  
  };
};

export const deletedGuardian = (deletedGuardianVAR) => {
  return {
      type: DELETED_GUARDIAN,
       deletedGuardianVAR  
  };
};

export const subjectTeacher = (subjectTeacher) => {
  return {
      type: SUBJECT_TEACHER,
      subjectTeacher  
  };
};

export const subjectStudent = (subjectStudent) => {
  return {
      type: SUBJECT_STUDENT,
      subjectStudent  
  };
};

export const classTeacher = (classTeacher) => {
  return {
      type: CLASS_TEACHER,
      classTeacher  
  };
};

export const classStudent = (classStudent) => {
  return {
      type: CLASS_STUDENT,
      classStudent  
  };
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*                    RANKS                       */                                                         
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const listRanks = (ranks) => {
  return {
      type: LIST_RANKS,
       ranks  
  };
};

export const addedRank = (addedRankVAR) => {
  return {
      type: ADDED_RANK,
       addedRankVAR  
  };
};

export const editedRank = (editedRankVAR) => {
  return {
      type: EDITED_RANK,
       editedRankVAR  
  };
};

export const deletedRank = (deletedRankVAR) => {
  return {
      type: DELETED_RANK,
       deletedRankVAR  
  };
};

// 
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*                    CANDIDATES                       */                                                         
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const listCandidates = (candidates) => {
  return {
      type: LIST_CANDIDATES,
       candidates  
  };
};
   
export const addedCandidate = (addedCandidateVAR) => {
  return {
      type: ADDED_CANDIDATE,
       addedCandidateVAR  
  };
};

export const editedCandidate = (editedCandidateVAR) => {
  return {
      type: EDITED_CANDIDATE,
       editedCandidateVAR  
  };
};

export const deletedCandidate = (deletedCandidateVAR) => {
  return {
      type: DELETED_CANDIDATE,
       deletedCandidateVAR  
  };
};


export const getAdminHomeDisplays = (schoolId) => {
  return dispatch => {
      axios.get(`/adminhome/display/:${schoolId}`)
        .then(response => {
          dispatch(adminGotDisplays(response.data));
        })
        .catch(err=> {
            console.log("something went wrong, please contact the admin");
        });

  }   
}


  export const getTeachers = (schoolId) => {
    return dispatch => {
        axios.get(`/list/teachers/:${schoolId}`)
          .then(response => {
            dispatch(listTeachers(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
  
    }   
  }

  export const addTeachers = (data) => {
    return dispatch => {
      axios.post(`/add/teacher`, {data})
          .then(response => {
            dispatch(addedTeacher(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
  
    }   
  }

  export const editTeacher = (values) => {
    return dispatch => {
  axios.put(`/edit/teacher`, {values})
          .then(response => {
            dispatch(editedTeacher(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
  
    }   
  }
  
  export const deleteTeacher = (id) => {
    return dispatch => {
  axios.delete(`/delete/teacher/:${id}`)
          .then(response => {
            dispatch(deletedTeacher(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
  
    }   
  }

  // student(s)

  export const getStudents = (data) => {
    return dispatch => {
        axios.get(`/list/studentsadmin/:${data}`)
          .then(response => {
            dispatch(listStudents(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
  
    }   
  }

 export const addStudent = (values) => {
    const schoolId = localStorage.getItem('schoolid');
    return dispatch => {
  axios.post(`/add/student`, {values, schoolId})
          .then(response => {
            dispatch(addedStudent(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }
  
  export const editStudent = (values) => {
    return dispatch => {
  axios.put(`/edit/student`, {values})
          .then(response => {
            dispatch(editedStudent(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }
  
  export const deleteStudent = (id) => {
    return dispatch => {
  axios.delete(`/delete/student/:${id}`)
          .then(response => {
            dispatch(deletedStudent(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  // guardian
  export const getGuardians = (schoolId) => {
    return dispatch => {
        axios.get(`/list/guardians/:${schoolId}`)
          .then(response => {
            dispatch(listGuardians(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

 export const addGuardian = (values) => {
     const schoolId = localStorage.getItem('schoolid');
    return dispatch => {
  axios.post(`/add/guardian`, {values, schoolId})
          .then(response => {
            dispatch(addedGuardian(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const editGuardian = (values) => {
    return dispatch => {
  axios.put(`/edit/guardian`, {values})
          .then(response => {
            dispatch(editedGuardian(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const deleteGuardian = (id) => {
    return dispatch => {
  axios.delete(`/delete/guardian/:${id}`)
          .then(response => {
            dispatch(deletedGuardian(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  ///////////////////////////////////////
  //////////////////////////////////////
  ///////// SUBJECTS //////////////////

  export const getSubjectsTeacherInfo = (values) => {
    return dispatch => {
  axios.post(`/subject/teachers`, {values})
          .then(response => {
            dispatch(subjectTeacher(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const getSubjectsStudentInfo = (values) => {
    // const schoolId = localStorage.getItem('schoolid');
    return dispatch => {
  axios.post(`/subject/students`, {values})
          .then(response => {
            dispatch(subjectStudent(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

    ///////////////////////////////////////
  //////////////////////////////////////
  /////////  CLASSES   //////////////////

  export const getTeacherClassInfo = (values) => {
    return dispatch => {
  axios.post(`/class/teachers`, {values})
          .then(response => {
            dispatch(classTeacher(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const getStudentClassInfo = (values) => {
    return dispatch => {
  axios.post(`/class/students`, {values})
          .then(response => {
            dispatch(classStudent(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }


 ///////////////////////////////////////
  //////////////////////////////////////
  /////////  RANKS   //////////////////

  export const getRanks = (schoolId) => {
    return dispatch => {
        axios.get(`/list/ranks/:${schoolId}`)
          .then(response => {
            dispatch(listRanks(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

 export const addRank = (values) => {
     const schoolId = localStorage.getItem('schoolid');
    return dispatch => {
  axios.post(`/add/rank`, {values, schoolId})
          .then(response => {
            dispatch(addedRank(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const editRank = (values) => {
    return dispatch => {
  axios.put(`/edit/rank`, {values})
          .then(response => {
            dispatch(editedRank(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const deleteRank = (id) => {
        return dispatch => {
  axios.delete(`/delete/rank/:${id}`)
          .then(response => {
            dispatch(deletedRank(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Candidates */


export const getCandidates = (schoolId) => {
  return dispatch => {
      axios.get(`/list/candidates/:${schoolId}`)
        .then(response => {
          dispatch(listCandidates(response.data));
        })
        .catch(err=> {
            console.log("something went wrong, please contact the admin");
        });

  }   
}

export const addCandidate = (values) => {
  const schoolId = localStorage.getItem('schoolid');
  return dispatch => {
axios.post(`/add/candidate`, {values, schoolId})
        .then(response => {
          dispatch(addedCandidate(response.data));
        })
        .catch(err=> {
            console.log("something went wrong, please contact the admin");
        });
  }   
}

export const editCandidate = (values) => {
  return dispatch => {
axios.put(`/edit/candidate`, {values})
        .then(response => {
          dispatch(editedCandidate(response.data));
        })
        .catch(err=> {
            console.log("something went wrong, please contact the admin");
        });
  }   
}

export const deleteCandidate = (id) => {
  return dispatch => {
axios.delete(`/delete/candidate/:${id}`)
        .then(response => {
          dispatch(deletedCandidate(response.data));
        })
        .catch(err=> {
            console.log("something went wrong, please contact the admin");
        });
  }   
}