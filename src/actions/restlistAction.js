//logic - to fetch data from an API
import axios from "axios";
import { R_SUCCESS,R_FAILIURE } from "../constants/restconstant";
export const RestListAction=()=>async(dispatch)=>{

   try{
      const result = await axios.get('./restaurants.json')
      console.log(result.data.restaurants);// array(10)
      dispatch({
         type:R_SUCCESS,
         payload:result.data.restaurants
      })
   }
   catch(error){
      dispatch({
         type:R_FAILIURE,
         error:error
      })
   }
 
}