import axios from '../url';
import {  STUDENT_BIO, 
          STUDENT_SUBJECTS, STUDENT_GRADES_FOR_STUDENT
       }
          from '../Components/Constants';


export const studentBioPresent = (studentBioVAR) => {
  return {
      type: STUDENT_BIO,
        studentBioVAR  
  };
};

export const studentSubjectsInfo = (studentSubjectsVAR) => {

  return {
      type: STUDENT_SUBJECTS,
       studentSubjectsVAR  
  };
};

export const studentGradesForStudentInfo = (studentGradesForStudentVAR) => {
    
   return {
      type: STUDENT_GRADES_FOR_STUDENT,
       studentGradesForStudentVAR  
  };
};

// student

export const getStudentHomeDisplays = (data) => {
  return dispatch => {
      axios.get(`/studenthome/homedisplays/:${data}`)
        .then(response => {
          
          dispatch(studentBioPresent(response.data));
        })
        .catch(err=> {
            console.log("something went wrong, please contact the admin");
        });
  }   
}

export const getStudentBio = (data) => {
  return dispatch => {
      axios.get(`/forstudent/studentbio/:${data}`)
        .then(response => {
          
          dispatch(studentBioPresent(response.data));
        })
        .catch(err=> {
            console.log("something went wrong, please contact the admin");
        });
  }   
}

  export const getStudentSubjectsInfo = (data) => {
    return dispatch => {
        axios.get(`/studentsubjects/info/:${data}`)
          .then(response => {
            
            dispatch(studentSubjectsInfo(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }

  export const getStudentGradesForStudentInfo = (data) => {
    return dispatch => {
        axios.get(`/studentgradesforstudent/info/:${data}`)
          .then(response => {
             
            dispatch(studentGradesForStudentInfo(response.data));
          })
          .catch(err=> {
              console.log("something went wrong, please contact the admin");
          });
    }   
  }