import React from 'react';
import { connect } from "react-redux";
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, Col, Row
  } from 'reactstrap';
import Food from "./Food";  

const Trucks = props => {
    return(
        <div>
            <Row>
                <Col xs="12" s="6" md="4">
                    <Card>
                        <CardImg top width="100%" src={props.data.truckImage} alt={props.data.id} />
                        <CardBody>
                        <CardTitle>{props.data.truckName}</CardTitle>
                        <CardSubtitle>Cuisine: {props.data.cuisine}</CardSubtitle>
                        <CardSubtitle>City: {props.data.city}</CardSubtitle>
                        <CardSubtitle>Reviews: {props.data.reviews}</CardSubtitle>
                        {/* <CardSubtitle>Menu: {props.data.menu.map(food => (
                            <Food food={food} />
                            ))}</CardSubtitle>                     */}

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(Trucks);