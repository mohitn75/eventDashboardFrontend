import React from 'react';
import { withRouter } from 'react-router-dom';
import './material.css'

function Alerts() {
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
            <a class="nav-link" href="/dash">
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/calendar">
              <p>Calendar</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/alerts">
              <p>Alerts</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
   <div class=" main-panel jumbotron">
    alerts
  </div>
  </div>
</div>   
);
}
export default withRouter(Alerts);