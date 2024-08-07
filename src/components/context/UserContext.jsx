//import { createContext, useEffect, useReducer } from "react";
import { createContext, useReducer } from "react";
//import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../../utils/firebase/firebase";
import { createAction } from "../../utils/reducers/reducer.utils";
import PropTypes from 'prop-types'

 export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    const { type, payload } = action;
   
    
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:payload
            }
        default:
            throw new Error (`Unhandled type ${type} in userReducer`);
    }
}

export const UserProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    const { currentUser } = state;

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }

   // const [currentUser, setCurrentUser] = useState(null);
   const value  = {currentUser,setCurrentUser};

   
   
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
}