import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import '../material.css'

import NavBar from './NavBar';

class CCalendar extends React.Component {
  state = {
    data : null
}

componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role === 'USER')
      this.props.history.push('/') 
  }


componentDidMount(){
    this.assign();
  }

assign= () =>{
  var user_id = sessionStorage.getItem("user_id");
var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
  var config = {
  method: 'get',
  url: 'http://backendproject-emb.apps.123.252.203.195.nip.io/api/eventsByUserId/'+user_id,
  headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    authorization: auth }
  
  };
axios(config)
.then( (response) => {
  this.setState({data:response.data});
  //console.log(this.state.data);
})
.catch((error) =>{
  alert("Error occurred in the server, Sorry for the inconvenience :(");
});
}

  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <NavBar current='creator-calendar' />
   <div class=" main-panel jumbotron">
    <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}
      events={this.state.data}
   /></div>
  </div>
</div>   
);
}
}
export default withRouter(CCalendar);

