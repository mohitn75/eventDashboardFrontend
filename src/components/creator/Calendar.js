import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import './material.css'
import NavBar from './NavBar';

class CCalendar extends React.Component {
  state = {
    data : null
}

componentDidMount(){
    this.assign();
  }

assign= () =>{

  var config = {
  method: 'get',
  url: 'http://localhost:8080/api/eventsByUserId/1'
  
  };
axios(config)
.then( (response) => {
  console.log(JSON.stringify(response.data));
  console.log(response.data);
  this.setState({data:response.data});
  console.log(this.state.data);
})
.catch((error) =>{
  console.log(error);
});
}

  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <NavBar current='calendar' />
   <div class=" main-panel jumbotron">
    <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}
      events={this.state.data}
      /*{[
    { title: 'event 1', date: '2020-06-01T19:30' },
    { title: 'event 2', date: '2020-06-02' }
  ]}*/
   /></div>
  </div>
</div>   
);
}
}
export default withRouter(CCalendar);
