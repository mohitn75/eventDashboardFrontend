import React from 'react';
import { withRouter } from 'react-router-dom';
import './material.css'
import NavBar from './NavBar';

class CCalendar extends React.Component {
  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <NavBar current='calendar' />
   <div class=" main-panel jumbotron">
    calendar</div>
  </div>
</div>   
);
}
}
export default withRouter(CCalendar);