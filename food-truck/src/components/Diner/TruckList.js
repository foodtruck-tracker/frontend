import React, { useState, useEffect } from "react";
import { axiosWithAuth as axios } from "../../utils/axioswithAuth.js";

const initialTruck = {
  truckName: "",
  cuisineType: "",
  operatorID: 1
};

const TruckList = ({ trucks, updateTrucks }) => {
  const [editing, setEditing] = useState(false);
  const [truckToEdit, setTruckToEdit] = useState(initialTruck);
  const [newTruck, setNewTruck] = useState(initialTruck);

  useEffect(() => {
    axios()
      .get("/trucks")
      .then(res => updateTrucks(res.data));
  }, [editing, updateTrucks]);

  const editTruck = truck => {
    setEditing(true);
    setTruckToEdit(truck);
  };

  const truckChangeHandler = e => {
    setTruckToEdit({ ...truckToEdit, [e.target.name]: e.target.value });
  };
   

  const addTruckChangeHandler = e => {
    setNewTruck({ ...newTruck, truckName: e.target.value });
  };


  const addCuisineChangeHandler = e => {
    setNewTruck({
      ...newTruck,
      cuisineType: e.target.value 
    });
  };

  const saveEdit = e => {
    e.preventDefault();
    const body = { ...truckToEdit };
    const { id } = truckToEdit;
    axios()
      .put(`/trucks/${id}`, body)
      .catch(err => console.log(err));
    setEditing(false);
    truckUpdate();
  };

  const deleteTruck = (e, id) => {
    e.stopPropagation();
    axios()
      .delete(`/trucks/${id}`)
      .catch(err => console.log(err));
    setEditing(false);
    truckUpdate();
  };

  const addTruck = truck => {
    console.log("truck: ", truck);
    axios()
      .post("/trucks", truck)
      .then(res => console.log("You added a truck! ", newTruck))
      .catch(err => console.log(err));

    
  };

  function truckUpdate() {
    setTimeout(() => {
      axios()
        .get("/trucks")
        .then(res => updateTrucks(res.data))
        .catch(err => console.log(err));
    }, 100);
  }


  return (
    <div className="colors-wrap">
      <p>Select A Truck!</p>
      <ul>
        {trucks.map(truck => (
          <li  onClick={() => editTruck(truck)}>
            <span>
              <span
                className="delete"
                onClick={e => {
                  deleteTruck(e, truck.id);
                }}
              >
                x
              </span>{" "}
              {truck.truckName}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: "aliceBlue" , color: "white"}}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Truck</legend>
          <label>
            Truck Name:
            <input name="truckName" onChange={truckChangeHandler} value={truckToEdit.truckName} />
          </label>
          <label>
            Cuisine:
            <input name="cuisineType" onChange={truckChangeHandler} value={truckToEdit.cuisineType} />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
     
      {/* stretch - build another form here to add a color */}
      <form  onSubmit={() => addTruck(newTruck)}>
        <legend>Add Another Truck!</legend>
        
        <label>
          Truck Name:
          <input onChange={addTruckChangeHandler} placeholder="truck name" value={newTruck.truckName} />
        </label>
      
      
        <label>
          Cuisine Type:
          <input onChange={addCuisineChangeHandler} placeholder="cuisine" value={newTruck.cuisineType} />
        </label>
       
        <button class="ui primary button" type="submit">ADD</button>
      </form>
    </div>
  );
};

export default TruckList;