import React from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import NavBar from "./components/Operator/NavBar";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


function Dashboard() {
    const classes = useStyles();
    return(
        <div>
            <NavBar />
            <h1>What would you like to do today?</h1>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1566336485553-6efbec514e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          title="Food Truck"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My Trucks
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            View and Edit truck information.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          My Trucks
        </Button>        
      </CardActions>
    </Card>  
        </div>
    );    
};

export default Dashboard;



