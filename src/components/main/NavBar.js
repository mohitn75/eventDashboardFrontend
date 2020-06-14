import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css'
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import axios from 'axios';
class NavBar extends React.Component {

  state={
    data : "",
    length:"",
    current : this.props.current
  }
  async componentDidMount() {
  try {
            setInterval(async () => {
              await axios.get('api/events')
        .then( (response) => {
        this.setState({data:response.data,
        length:response.data.length});
        //alert(this.state.data.length)

        this.notify(this.state.data.length)
        })
        .catch((error) =>{
        console.log(error);
        });
            }, 30000);
          } catch(e) {
            console.log(e);
          }
  }

  notify = ($head) => {
      store.addNotification(
          {
          title: $head+ " new events",
          message: <a href="/dash">hello</a>,
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration:3000,
            click:false,
            showIcon:true
          }
          }
      )
    


  }
   
  render(){
    var user_name = sessionStorage.getItem("user_name");
  return (

     <div class="sidebar" data-color="purple" data-background-color="white"  >
      <ReactNotification />
      <div class="text" style={{marginTop:'40px',marginBottom:'30px',textAlign:'center', textTransform:'uppercase' }}>
         <h3> {user_name}</h3>
      </div>
      <div class="sidebar-wrapper">
      
      <ul class="nav" >

      <div>
      {this.state.current === 'dash' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/dash">
              <p>Dashboard</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/dash">
              <p>Dashboard</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'calendar' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/calendar">
              <p>Calendar</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/calendar">
              <p>Calendar</p>
            </a>
          </li> 
          }
      </div>
      
      <div>
      {this.state.current === 'alerts' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/alerts">
              <p>Alerts</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/alerts">
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