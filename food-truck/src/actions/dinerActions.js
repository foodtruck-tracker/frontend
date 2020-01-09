import { FETCH_DINERS, NEW_DINER } from './types';

export const fetchDiners = () => dispatch => {
    
        fetch('https://foodtrucktrackerbw.herokuapp.com')
            .then(res => res.json())
            .then(diners => dispatch({
                type: FETCH_DINERS
                ,
                payload: diners
            }));
    
}


export const createDiner = (dinerData) => dispatch => {
   fetch('https://foodtrucktrackerbw.herokuapp.com', {
        method: 'POST',
       headers: {
         'content-type': 'application/json'
        },
        body: JSON.stringify(dinerData)
    })
    .then(res => res.json())
    .then(diner => dispatch({
                type: NEW_DINER,
                payload: diner
            }));
    
}
 
  
 
  