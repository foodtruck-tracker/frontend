import React from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import NavBar from "./NavBar";


import {
    Card, CardImg, CardTitle, Col, Row, Container
  } from 'reactstrap';
import {Link} from "react-router-dom";




function Dashboard() {
    
    return(
        <div>  
        <NavBar />
            <h2>What would you like to do today?</h2>
            <Container>
            <Row>
            <Col xs="12" s="6" md="4">
                
                        <Link to="/trucks">
                        <Card>
                        <CardImg top width="100%" src="https://images.unsplash.com/photo-1566336485553-6efbec514e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="Food Truck" />
                        <CardTitle>My Trucks</CardTitle>                
                        </Card>
                        </Link>
                        
                        <Link to="/location">
                        <Card>
                        <CardImg top width="100%" src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" alt="Map on smartphone" />
                        <CardTitle>Update Location</CardTitle>                
                        </Card>
                        </Link>

                        <Link to="/menu">
                        <Card>
                        <CardImg top width="100%" src="https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Restaurant menu" />
                        <CardTitle>Food Menu</CardTitle>                
                        </Card>
                        </Link>

                        <Link to="reviews">
                        <Card>
                        <CardImg top width="100%" src="https://images.unsplash.com/photo-1553532435-93d532a45f15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" alt="Social media likes" />
                        <CardTitle>View Ratings</CardTitle>                
                        </Card>
                        </Link>
                        
                    </Col>
                    </Row>
            </Container>
        </div>
    );    
};

export default Dashboard;



