import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css'
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import axios from 'axios';

class NavBar extends React.Component {
    
    state = {
      current : this.props.current,
      
  }
  async componentDidMount() {
    var user_name = sessionStorage.getItem("user_name");
      var flag = sessionStorage.getItem("flag")
    if(flag==='1')
    {
        this.notifyLogin(user_name)
        sessionStorage.setItem("flag", "0");
    }
    var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
    var user_id = sessionStorage.getItem("user_id");
    var config1 = {
            method: 'get',
            url:'http://localhost:8080/api/alertsCountNewEvent/'+user_id,
            headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    authorization: auth }
            };
  try {
        setInterval(async () => {
            await axios(config1)
        .then( (response) => {
          if(JSON.stringify(response.data)!==sessionStorage.getItem("lenAl"))
              {
              sessionStorage.setItem("lenAl",JSON.stringify(response.data));
              this.notifyA(sessionStorage.getItem("lenAl"))}
          })
        .catch((error) =>{
        console.log(error);
        });
            }, 3000);
    } 
    catch(e){
            console.log(e);
    }
    
    var config2 = {
      
            method: 'get',
            url:'http://localhost:8080/api/alertsCountEventIn15Min/'+user_id,
            headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    authorization: auth }
            };

    try {
        setInterval(async () => {

          
            await axios(config2)
        .then( (response) => {
          
          if(JSON.stringify(response.data)!==sessionStorage.getItem("lenRem"))
              {
              sessionStorage.setItem("lenRem", JSON.stringify(response.data));
              if(JSON.stringify(response.data)!=="0")  
                this.notifyR(sessionStorage.getItem("lenRem"))
              }
          })
        .catch((error) =>{
        console.log(error);
        });
            }, 3000);
    } 
    catch(e){
            console.log(e);
    }


  }

  notifyA = ($head) => {
      store.addNotification(
      {
         id:1,
          title: $head+ " NEW EVENTS",
          message: <a href="/creator-alerts">View All</a>,
          type: "success",
          insert: "bottom",
          container: "bottom-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration:0,
            click:false,
            showIcon:true
          }
      }
      )
  }

  notifyR = ($head) => {
      store.addNotification(
      {
          id:1,
          title: $head+ " REM",
          message: <a href="/creator-alerts">View All</a>,
          type: "success",
          insert: "bottom",
          container: "bottom-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration:0,
            click:false,
            showIcon:true
          }
      }
      )
  }
  notifyLogin = ($name) => {
      store.addNotification(
      {
          title:"Hello, "+ $name + "!",
          message:"Welcome !",
          type: "info",
          insert: "bottom",
          container: "bottom-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration:3000,
            click:true,
            showIcon:true
          }
      }
      )
  }
     
  render(){
    var user_name = sessionStorage.getItem("user_name");
    var user_role = sessionStorage.getItem("user_role");
    var user_email = sessionStorage.getItem("user_email");
  return (
    
     <div class="sidebar" data-color="purple" data-background-color="white"  >
      <div ><ReactNotification /></div>
      <div class="text" style={{marginTop:'40px',marginBottom:'30px',textAlign:'center', textTransform:'uppercase' }}>
         <h3> {user_name}</h3>
         <h6>{user_email}</h6>
         <p style={{color:'black'}}>{user_role}</p>
      </div>
      
      <div class="sidebar-wrapper">
      <hr/>
      <ul class="nav" >

      <div>
      {this.state.current === 'creator-dash' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/creator-dash">
              <p>Dashboard</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/creator-dash">
              <p>Dashboard</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'creator-calendar' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/creator-calendar">
              <p>Calendar</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/creator-calendar">
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
      {this.state.current === 'creator-events' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/creator-events">
              <p>Created Events</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/creator-events">
              <p>Created Events</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'updateevent' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/updateevent">
              <p>Update Events</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/updateevent">
              <p>Update Events</p>
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
      {this.state.current === 'view-events' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/creator-events">
              <p>Invited Events</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/view-events">
              <p>Invited Events</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'creator-alerts' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/creator-alerts">
              <p>Alerts</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/creator-alerts">
              <p>Alerts</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'logout' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/logout">
              <p>Logout</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/logout">
              <p>Logout</p>
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