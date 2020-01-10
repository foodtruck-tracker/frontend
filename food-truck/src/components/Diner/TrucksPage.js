import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { axiosWithAuth } from '../../utils/axioswithAuth';

import Trucks from "./Trucks";
import TruckList from "./TruckList";

const FavoritePage = props => {
  const [truckList, setTruckList] = useState([]);
  const getTrucks = () =>{
        axiosWithAuth().get('/trucks')
        .then(res => {
            setTruckList(res.data)
             console.log(res.data)
            })
        .catch(err => console.log(err))
    }

    

    useEffect(()=>{
       getTrucks()
    },[]);

  return (
    <>

      <TruckList trucks={truckList} updateTrucks={setTruckList} />
      <Trucks trucks={truckList} />

      
      <Link to="/Login">Login </Link>
    </>
  );
};

export default FavoritePage;
