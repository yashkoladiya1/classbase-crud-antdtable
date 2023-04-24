import {GET_USER_DETAILS} from '../constant'
import {GET_EDIT_DETAILS} from '../constant' 
const initialState={
    userData:[],
    editData:{}
}

export default function userItems(state=initialState,action){
    switch(action.type){
        case GET_USER_DETAILS:
            // console.log("reducer--->",action)
            return{
                ...state,
                userData:action.payload
            }
            // eslint-disable-next-line
            break;
        case GET_EDIT_DETAILS:
            console.log("reducer--->",action.payload)
            return{
                ...state,
                editData:action.payload
            }    
            // eslint-disable-next-line
            break;
            default:
                return state
    }
}