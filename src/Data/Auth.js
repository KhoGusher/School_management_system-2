import { NOT_SIGNED, AUTH_START,
          AUTH_SUCCESS, AUTH_FAILED, LOGOUT
 } from '../Components/Constants';

        
const initialState = {
  
   signStatus: false,
   loading: false,
   is_authenticated: null,
   data: null,
   authError: null

};

const Auth = (state = initialState, action) => {
  switch(action.type){
    
       case NOT_SIGNED:
         return {
           ...state,
             signStatus: true
         };
        
        case AUTH_START:
        return {
          ...state,
            loading: true
        };  

        
        case AUTH_SUCCESS:  
          return {
            ...state,
              data: action.data
        }

        case AUTH_FAILED:
          return {
             ...state,
                authError: true
          }

        case LOGOUT:
          return {
            ...state,
              data: null,
              loading: false
          }
          
        default: 
          return {
              ...state
          };
  }
}

export default Auth;