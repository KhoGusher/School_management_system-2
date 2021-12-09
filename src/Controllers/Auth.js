import axios from '../url';
import { NOT_SIGNED, AUTH_START,
         AUTH_SUCCESS, AUTH_FAILED, LOGOUT
     } from '../Components/Constants';


export const notSignedIn = () => {
    return {
        type: NOT_SIGNED 
    };
 };

export const AuthStart = () => {
  return {
      type: AUTH_START
  };
}; 

 export const authSuccess = (data) => {
    
    return {
        type: AUTH_SUCCESS,
        data
    };
};

export const authFail = authError => {
  return {
      type: AUTH_FAILED,
      authError
  };
};

export const logout = () => {
    localStorage.removeItem('data');
    localStorage.removeItem('expirationTime');
    return {
        type: LOGOUT
    };
}

export const authTimeout = timeOutDuration => {
    return dispatch => {
       setTimeout( ()=> {
             dispatch(logout());
       }, timeOutDuration * 1000);
    }
  }

export const getPasswordRenewed = (values, dest) => {
  return dispatch => {
     dispatch(AuthStart());
    axios.post('/renew/password', values)
      .then(response => {
        dispatch(logout());
     
      if(response.data[0].identity.startsWith("AMW")){
         dest.history.push("/admin/signin")
      }
      if(response.data[0].identity.startsWith("TMW")){
        dest.history.push("/signin/teacher")
      }
      
      if(response.data[0].identity.startsWith("SMW")){
        dest.history.push("/student/signin")
      }
      })
      .catch(err=> {
          dispatch(authFail(err));
      });
  }  
}


export const checkAuth = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if( (!token) || (expirationTime < new Date()) ) {
           
              dispatch(notSignedIn());
            }
           }    
    }

    // by admin
export const toSignUp = ( values ) => {
    return dispatch => {
      dispatch(AuthStart());
      axios.post('/signup', values)
        .then(response => {
          
          let expirationTime = new Date(new Date().getTime() + 3600 * 1000);
          localStorage.setItem('data', JSON.stringify(response.data));   
          localStorage.setItem('expirationTime', expirationTime);
          dispatch(authSuccess(response.data));
          dispatch(authTimeout("3600"));

        })
        .catch(err=> {
            dispatch(authFail(err));
        });
    }  
  }
  
  export const AdminToSignIn = ( values ) => {
    return dispatch => {
      dispatch(AuthStart());

        axios.post('/adminsignin', values)
        .then(response => {
            let expirationTime = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('data', JSON.stringify(response.data));   
            localStorage.setItem('expirationTime', expirationTime);
            dispatch(authSuccess(response.data));
            dispatch(authTimeout("3600"));
            
        })
        .catch(err=> {
            dispatch(authFail(err));
        });
      
    }  
  }


  export const TeacherToSignIn = ( values ) => {    
    return dispatch => {
      dispatch(AuthStart());
      axios.post('/teachersignin', values)
        .then(response => {            
            let expirationTime = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('data', JSON.stringify(response.data));   
            localStorage.setItem('expirationTime', expirationTime);
            dispatch(authSuccess(response.data));
            dispatch(authTimeout("3600"));
            
        })
        .catch(err=> {
            dispatch(authFail(err));
        });
    }  
  }

  export const StudentToSignIn = ( values ) => {
    return dispatch => {
      dispatch(AuthStart());
      axios.post('/studentsignin', values)
        .then(response => {
            if((response.data.identity).startsWith("SMW")){
              let expirationTime = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('data', JSON.stringify(response.data));   
            localStorage.setItem('expirationTime', expirationTime);
            dispatch(authSuccess(response.data));
            dispatch(authTimeout("3600"));
            }
        })
        .catch(err=> {
          dispatch(authFail(err));
        });
  }  
  }

  export const AuthSignUpVerify = (id) => {
    return dispatch => {
        axios.post('/admin/verify/signup', id)
          .then(response => {
              console.log(response.data);
          })
          .catch(err=> {
             dispatch(authFail(err));
          });
  
    }   
  }






