import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




const AddTruck= () => {

const handleChanges = event => {
    
}



    return(
        <div>
            {/* <Form>
            <FormGroup>
                <Label>Truck Name</Label>
                <Input 
                type="text" 
                name="truckName" 
                placeholder="Truck name"
                onChange={handleChanges}
                value={truckName}
                 />
            </FormGroup>
            <FormGroup>
                <Label>City</Label>
                <Input 
                type="text" 
                name="city" 
                placeholder="City"
                onChange={handleChanges}
                value={city}
                 />
            </FormGroup>
            <FormGroup>
                <Label>Cuisine (please limit to one or two words)</Label>
                <Input 
                type="text" 
                name="cuisine" 
                placeholder="ex., BBQ, Mexican, Thai, etc"
                onChange={handleChanges}
                value={cuisine}
                 />
            </FormGroup>            
            <FormGroup>
                <Label>Truck Image</Label>
                <Input 
                type="file" 
                name="truckImage"  
                onChange={handleChanges}
                value={truckImage}
                />
                <FormText color="muted">
                Please upload a clear picture of your Food Truck
                </FormText>
            </FormGroup>
            
            <Button>Submit</Button>
            </Form> */}
        </div>
    );
};

export default AddTruck;