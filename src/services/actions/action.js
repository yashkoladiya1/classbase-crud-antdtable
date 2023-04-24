import {GET_USER_DETAILS} from '../constant'
import {GET_EDIT_DETAILS} from '../constant'

export const getUserDetails = (data) =>{
    // console.log("actiondata--->",data)
    return {
        type:GET_USER_DETAILS,
        payload:data
    }
}

export const getEditDetails = (data)=>{
    // console.log("actiondata--->",data)
    return {
        type:GET_EDIT_DETAILS,
        payload:data
    }
}   