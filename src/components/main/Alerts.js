import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css';
import NavBar from './NavBar';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import axios from 'axios';

class Alerts extends React.Component {
  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role !== 'USER')
      this.props.history.push('/') 
  }

  render(){
  
  return (
    <div className="app-container">
      
    <div class="wrapper ">
      <NavBar current='alerts' />
    <div class=" main-panel jumbotron">
      

    </div>
    </div>
</div>   
);
  }
}
export default withRouter(Alerts);