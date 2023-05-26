import React, { useEffect } from 'react'
import { useState } from 'react'
import Restcard from './Restcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestListAction } from '../actions/restlistAction';
import { useDispatch, useSelector } from 'react-redux';
function Restlist() {
      //create  a state
    const[AllRestaurants,setAllRestaurants]=useState([])

    //function to call APi to get data from restaurants.json
      const getRestaurants=async()=>{
         await fetch('./restaurants.json')
         .then((data)=>{
             data.json()
             .then((result)=>{
                 // console.log(result);//array of data in console
                 setAllRestaurants(result.restaurants)//(10)
             })
             console.log(data);
         })
     }
       console.log(AllRestaurants);
      const dispatch=useDispatch()
     
      const result=useSelector(state=>state.restaurantReducer)
      console.log(result);
      const {restaurantList}=result;
      

     useEffect(()=>{
        // getRestaurants()
        dispatch(RestListAction())
     },[])

  return (
    <Row>
      {
        restaurantList?.map((item)=>(
            <Restcard restaurant={item}/>
            // <h1>{item.name}</h1>
        ))
      }

    </Row>
  )
}

export default Restlist