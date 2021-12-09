import {   STUDENT_BIO,
           STUDENT_SUBJECTS, STUDENT_GRADES_FOR_STUDENT
  }
   from '../Components/Constants';


   const initialState = {
        studentSubjectsVAR: null,
        studentGradesForStudentVAR: null,
        studentBioVAR: null
     
   };

 const Student = (state = initialState, action) => {
    switch(action.type){
          
      case STUDENT_SUBJECTS:
        return {
          ...state,
          studentSubjectsVAR: action.studentSubjectsVAR
        }  
      
      case STUDENT_GRADES_FOR_STUDENT:
        return {
          ...state,
          studentGradesForStudentVAR: action.studentGradesForStudentVAR
        }
          
      case STUDENT_BIO:
        return {
          ...state,
          studentBioVAR: action.studentBioVAR
        }  

          default: 
            return {
                ...state
            };
    }
  }
  
  export default Student;