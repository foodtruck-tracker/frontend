import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDiners } from '../../actions/dinerActions';

 class Diners extends Component {

   componentDidMount() {
     this.props.fetchDiners();
   }

   componentWillReceiveProps(nextProps) {
     if (nextProps.newDiner) {
       this.props.posts.unshift(nextProps.newDiner);
     }
   }

  render() {
      const dinerItems = this.props.diners.map(diner => (
          <div key={diner.role}>
          <h3>{diner.username}</h3>
          <p>{diner.password}</p>
          <p>{diner.city}</p>
          
          </div>
      ))
    return (
      <div>
        <h1>Diners</h1>
        {dinerItems}
      </div>
    )
  }
}
 Diners.propTypes = {
   fetchDiners: PropTypes.func.isRequired,
   diners: PropTypes.array.isRequired,
   newDiner: PropTypes.object
 }


const mapStateToProps = state => ({
  diners: state.diners.items,
  newDiner: state.diners.item
})

export default connect(mapStateToProps, { fetchDiners })(Diners);