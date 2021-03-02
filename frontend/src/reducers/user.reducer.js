import { userContants } from "../actions/constants"


const initState ={
error : null,
message :'',
loading: false
}
export default (state = initState,action)=>{
    switch(action.type){
        case userContants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loding :true
            }
            break;
            case userContants.USER_REGISTER_SUCCESS:
                state = {
                    ...state,
                    loading:false ,
                    message: action.payLoad.message
                }
                break;
                case userContants.USER_REGISTER_FAILURE:
                    state = {
                        ...state,
                        loading:false ,
                        message: action.payLoad.error
                    }
                    break;
    }
    return state;
}