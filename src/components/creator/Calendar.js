import React from 'react';
import { withRouter } from 'react-router-dom';
import './material.css'

class CCalendar extends React.Component {
  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
 
      <div class="logo">
          USER NAME
        </div>
      <div class="sidebar-wrapper">
         <ul class="nav">
          <li class="nav-item ">
            <a class="nav-link" href="/cdash">
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/ccalendar">
              <p>Calendar</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/newevent">
              <p>Create Event</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/newgroup">
              <p>Create Group</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/calerts">
              <p>Alerts</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
   <div class=" main-panel jumbotron">
    calendar</div>
  </div>
</div>   
);
}
}
export default withRouter(CCalendar);