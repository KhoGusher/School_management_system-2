import {  ADMIN_HOME_DISPLAYS,
    LIST_TEACHERS, ADDED_TEACHER, EDITED_TEACHER, LIST_STUDENTS, ADDED_GUARDIAN, 
    EDITED_STUDENT, ADDED_STUDENT, LIST_GUARDIANS, EDITED_GUARDIAN,
    SUBJECT_TEACHER, SUBJECT_STUDENT, CLASS_TEACHER, CLASS_STUDENT,
    DELETED_TEACHER, DELETED_STUDENT, DELETED_GUARDIAN,
    LIST_RANKS, ADDED_RANK, EDITED_RANK, DELETED_RANK,
    LIST_CANDIDATES, ADDED_CANDIDATE, EDITED_CANDIDATE, DELETED_CANDIDATE
  }
   from '../Components/Constants';

   const initialState = {
    teachers: null,
    addedTeacherVAR: null,
    editedTeacher: null,
    deletedTeacherVAR: null,
    students: null,
    addedStudentVAR: null,
    editedStudentVAR: null,
    deletedStudentVAR: null,
    guardians: null,
    addedGuardianVAR: null,
    editedGuardianVAR: null,
    deletedGuardianVAR: null,
    subjectTeacher: null,
    subjectStudent: null,
    classTeacher: null,
    classStudent: null,
    ranks: null,
    addedRankVAR: null,
    editedRankVAR: null,
    deletedRankVAR: null,
    candidates: null,
    addedCandidateVAR: null,
    editedCandidateVAR: null,
    deletedCandidateVAR: null,
    adminHomeDisplaysVAR: null   
 };

 const Admin = (state = initialState, action) => {
    switch(action.type){
    
        case ADMIN_HOME_DISPLAYS:
          return {
            ...state,
              adminHomeDisplaysVAR: action.adminHomeDisplaysVAR
          };

         case LIST_TEACHERS:
           return {
             ...state,
               teachers: action.teachers,
               editedTeacher: null
           };
  
         case ADDED_TEACHER:
          return {
            ...state,
              addedTeacherVAR: action.addedTeacherVAR
          };
  
         case EDITED_TEACHER:
            return {
              ...state,
                editedTeacher: action.editedTeacher
            };
  
          case DELETED_TEACHER:
              return {
                ...state,
                  deletedTeacherVAR: action.deletedTeacherVAR
              };
         
          case LIST_STUDENTS:
            return {
              ...state,
                students: action.students,
                editedStudentVAR: null
            };
  
         case EDITED_STUDENT:
          return {
            ...state,
              editedStudentVAR: action.editedStudentVAR
          };  
  
          case DELETED_STUDENT:
            return {
              ...state,
                deletedStudentVAR: action.deletedStudentVAR
            };
  
          case ADDED_STUDENT:
          return {
            ...state,
              addedStudentVAR: action.addedStudentVAR
          };
  
          case LIST_GUARDIANS:
            return {
              ...state,
                guardians: action.guardians,
                editedGuardianVAR: null
            };
  
          case ADDED_GUARDIAN:
              return {
                ...state,
                  addedGuardianVAR: action.addedGuardianVAR
             };
             
          case EDITED_GUARDIAN:
          return {
            ...state,
              editedGuardianVAR: action.editedGuardianVAR
          };   
  
          case DELETED_GUARDIAN:
            return {
              ...state,
                deletedGuardianVAR: action.deletedGuardianVAR
            };  
           
          case SUBJECT_TEACHER:
            return {
              ...state,
              subjectTeacher: action.subjectTeacher
            };
          
          case SUBJECT_STUDENT:
            return {
              ...state,
              subjectStudent: action.subjectStudent
            };  
  
            case CLASS_TEACHER:
              return {
                ...state,
                classTeacher: action.classTeacher
              };
            
            case CLASS_STUDENT:
              return {
                ...state,
                classStudent: action.classStudent
              };
  
            case LIST_RANKS:
              return {
                ...state,
                  ranks: action.ranks,
                  editedRankVAR: null
              };
    
            case ADDED_RANK:
                return {
                  ...state,
                    addedRankVAR: action.addedRankVAR
                };
                
            case EDITED_RANK:
            return {
              ...state,
                editedRankVAR: action.editedRankVAR
            };   
    
            case DELETED_RANK:
              return {
                ...state,
                  deletedRankVAR: action.deletedRankVAR
              };
              
            case LIST_CANDIDATES:
              return {
                ...state,
                  candidates: action.candidates,
                  editedCandidateVAR: null
              };
    
            case ADDED_CANDIDATE:
                return {
                  ...state,
                    addedCandidateVAR: action.addedCandidateVAR
                };
                
            case EDITED_CANDIDATE:
            return {
              ...state,
                editedCandidateVAR: action.editedCandidateVAR
            };   
    
            case DELETED_CANDIDATE:
              return {
                ...state,
                  deletedCandidateVAR: action.deletedCandidateVAR
              };  
            
          default: 
            return {
                ...state
            };
    }
  }
  
  export default Admin;