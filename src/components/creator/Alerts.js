import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css';
import NavBar from './NavBar';
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import Table from '../Table';

class CAlerts extends React.Component {
  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role === 'USER')
      this.props.history.push('/') 
    store.removeNotification(1)
    sessionStorage.setItem("lenAl", JSON.stringify(0))
    
  }


  state ={
    alertData:null,
    remData:null 
  }

   componentDidMount() {
     this.getAl()
     this.getRem()
  }
  getAl(){
 var user_id = sessionStorage.getItem("user_id");
  var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
  var config = {
  method: 'get',
  url:'http://backendproject-emb.apps.123.252.203.195.nip.io/api/alertsNewEvent/'+user_id,
  headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    'Authorization': auth }
  };
  axios(config)
  .then( (response) => {
    this.setState({alertData:response.data});
    
  })
  .catch((error) =>{
    alert("error");
  });
  }

  getRem(){
 var user_id = sessionStorage.getItem("user_id");
  var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
  var config = {
  method: 'get',
  url:'http://backendproject-emb.apps.123.252.203.195.nip.io/api/alertsEventIn15Min/'+user_id,
  headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    'Authorization': auth }
  };
  axios(config)
  .then( (response) => {
    this.setState({remData:response.data});
  })
  .catch((error) =>{
    alert("error");
  });
  }

  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <NavBar current='creator-alerts'/>
   <div class="main-panel">
   <div class="content">
  <div class="container-fluid">
      <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="card">
                <div class="card-header  card-header-primary">
                    <h4 class="card-title">New Events</h4>
                    </div>
                
                <div class="card-body table-responsive">
                  {this.state.alertData===null ? null :
              <ul class="list-group " >
                {this.state.alertData.map(listitem => (
                    <li className="list-group-item" style={{borderBottom: '1px solid lightgrey'}}>
                    <div class="row">
                      <p class="col"> Title : {listitem['title']}   </p>
                      <p class="col"> Host : {listitem['email']}</p>
                    </div>
                    <div class="row">
                      <p class="col">Date : {listitem['startDateTime'].split(" ")[0]}</p>
                      <p class="col">Time : {listitem['startDateTime'].split(" ")[1]}</p>
                    </div>  
                    </li>
                  ))}
              </ul>
              }
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="card">
                <div class="card-header card-header-warning">
                  <h4 class="card-title">Reminders</h4>
                </div>
                <div class="card-body">
                {this.state.remData===null ? null :
              <ul class="list-group " >
                {this.state.remData.map(listitem => (
                    <li className="list-group-item" style={{borderBottom: '1px solid lightgrey'}}>
                    <div class="row">
                      <p class="col"> Title : {listitem['title']}   </p>
                      <p class="col"> Host : {listitem['email']}</p>
                    </div>
                    <div class="row">
                      <p class="col">Date : {listitem['startDateTime'].split(" ")[0]}</p>
                      <p class="col">Time : {listitem['startDateTime'].split(" ")[1]}</p>
                    </div>  
                    </li>
                  ))}
              </ul>
              }
              
                </div>

              </div>

              </div>
            </div>
          </div>
    </div>
    </div>
    </div>
</div>   
);
}
}
export default withRouter(CAlerts);