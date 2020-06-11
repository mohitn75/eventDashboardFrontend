import React from 'react';
import { withRouter } from 'react-router-dom';
import './material.css';
import NavBar from './NavBar';

class CAlerts extends React.Component {
  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <NavBar current='alerts'/>
   <div class=" main-panel jumbotron">
    alerts
  </div>
  </div>
</div>   
);
}
}
export default withRouter(CAlerts);