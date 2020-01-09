import React from "react";



const initialTrucks = {
    data: [
        {id: 1,
        truckName: "Curry in a Hurry",
        truckImage: 'https://www.mtlblog.com/u/2018/04/03/aa440c103b0e8954d031664dcb2ebd9d7fa1c305.jpg_1200x630.jpg',
        city: "Stockton",
        cuisine: "Asian",
        menu: ['Chicken Curry and Rice', 'Tandoori Chicken', 'Garlic Naan', 'Lamb Stew', 'Mango Lassi'],
        reviews: '4.2 stars'
        }],
    isFetching: false,
    error: ""
};

export const truckReducer = (state = initialTrucks, action) => {
    switch(action.type) {
        // case types.ADD_TRUCK:
        //     return action.payload;
        default:
            return state;
    }
};

