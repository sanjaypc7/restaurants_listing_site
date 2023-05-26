import { R_SUCCESS,R_FAILIURE } from "../constants/restconstant";

export const restaurantListReducer=(state={restaurantList:[]},action)=>{
switch (action.type) {
    case R_SUCCESS:
        return{
            restaurantList:action.payload
        }
        break;
        case R_FAILIURE:
            return{
                restaurantList:action.error
            }
 break;
    default:
        return{
            state:action.state
        }
        break;
}
}