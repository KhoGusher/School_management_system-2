import { TEACHER_HOME_DISPLAYS, TEACHER_STUDENTS_CLASS,
    TEACHER_CLASS_INFO, STUDENT_CLASS_INFO,
    STUDENT_CLASS_GRADES_INFO, TEACHER_GUARDIAN_INFO,
    TEACHER_ADDED_ASSIGNMENT, TEACHER_ASSIGNMENTS, EDITED_ASSIGNMENT, DELETED_ASSIGNMENT,
    TEACHER_SUBJECTS
  }
   from '../Components/Constants';


   const initialState = {
        teacherClassVAR: null,
        studentClassVAR: null,
        studentClassGradesVAR: null,
        teacherGuardianVAR: null,
        teacherAssignmentsVAR: null,
        teacherAddedAssignmentVAR: null,
        deletedAssignmentVAR: null,
        editedAssignmentVAR: null,
        teacherSubjectsVAR: null,
        teacherHomeDisplaysVAR: null,
        teacherStudentsClassVAR: null
     
   };

   
 const Teacher = (state = initialState, action) => {
    switch(action.type){

        case TEACHER_HOME_DISPLAYS:
          return {
            ...state,
              teacherHomeDisplaysVAR: action.teacherHomeDisplaysVAR
          };
        
        case TEACHER_STUDENTS_CLASS:
           return {
              ...state,
                teacherStudentsClassVAR: action.teacherStudentsClassVAR
           };  
      
         case TEACHER_CLASS_INFO:
           return {
             ...state,
               teacherClassVAR: action.teacherClassVAR
           };

          case STUDENT_CLASS_INFO:
          return {
            ...state,
              studentClassVAR: action.studentClassVAR
          };
          
          case STUDENT_CLASS_GRADES_INFO:
            return {
              ...state,
                studentClassGradesVAR: action.studentClassGradesVAR
            };
          
          case TEACHER_GUARDIAN_INFO:
            return {
              ...state,
                teacherGuardianVAR: action.teacherGuardianVAR
            };  

          case TEACHER_ASSIGNMENTS:
            return {
              ...state,
                teacherAssignmentsVAR: action.teacherAssignmentsVAR,
                editedAssignmentVAR: null
            };
          
          case TEACHER_ADDED_ASSIGNMENT:
            return {
              ...state,
                teacherAddedAssignmentVAR: action.teacherAddedAssignmentVAR
            };
            
          case EDITED_ASSIGNMENT:
            return {
              ...state,
                editedAssignmentVAR: action.editedAssignmentVAR
            };  

          case DELETED_ASSIGNMENT:
            return {
              ...state,
                deletedAssignmentVAR: action.deletedAssignmentVAR
            };  
          
          case TEACHER_SUBJECTS:
            return {
              ...state,
              teacherSubjectsVAR: action.teacherSubjectsVAR
            }  

          default: 
            return {
                ...state
            };
    }
  }
  
  export default Teacher;