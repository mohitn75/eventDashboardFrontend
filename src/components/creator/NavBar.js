import React from 'react';
import { withRouter } from 'react-router-dom';
import './material.css'

class NavBar extends React.Component {
    
    state = {
        current : this.props.current
        }
    
  render(){
  return (

     <div class="sidebar" data-color="purple" data-background-color="white"  >
 
      <div class="logo simple-text logo-normal">
          USER NAME
      </div>
      <div class="sidebar-wrapper">
      
      <ul class="nav" >

      <div>
      {this.state.current === 'dashboard' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/cdash">
              <p>Dashboard</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/cdash">
              <p>Dashboard</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'calendar' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/ccalendar">
              <p>Calendar</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/ccalendar">
              <p>Calendar</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'newevent' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/newevent">
              <p>Create Event</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/newevent">
              <p>Create Event</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'newgroup' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/newgroup">
              <p>Create Group</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/newgroup">
              <p>Create Group</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'delevent' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/delevent">
              <p>Delete an Event</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/delevent">
              <p>Delete an Event</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'alerts' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/calerts">
              <p>Alerts</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/calerts">
              <p>Alerts</p>
            </a>
          </li> 
          }
      </div>
       
        </ul>
      </div>
      </div>
    

);
}
}
export default withRouter(NavBar);