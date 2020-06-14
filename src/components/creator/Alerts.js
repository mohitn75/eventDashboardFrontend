import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css';
import NavBar from './NavBar';

class CAlerts extends React.Component {
  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role !== 'CREATOR')
      this.props.history.push('/') 
  }
  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <NavBar current='creator-alerts'/>
   <div class=" main-panel jumbotron">
    alerts
  </div>
  </div>
</div>   
);
}
}
export default withRouter(CAlerts);