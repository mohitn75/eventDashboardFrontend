import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css';
import NavBar from './NavBar';
import axios from 'axios'
import SingleEvent from './SingleEvent'

class viewEvents extends React.Component {
  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role === 'USER')
      this.props.history.push('/') 
  }
  componentDidMount(){
    this.assign();
  }
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    }
    state = {
    event:null,
    data :null,

    };
  
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  assign= () =>{
    //console.log(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass"))
    var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
  //var user_email = sessionStorage.getItem("user_email");
  var user_id = sessionStorage.getItem("user_id");
  var config = {
  method: 'get',
  url:'http://backendproject-emb.apps.123.252.203.195.nip.io/api/eventsForUser/'+user_id,
  headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    'Authorization': auth }
  };
  axios(config)
  .then( (response) => {
    this.setState({data:response.data});
    
  })
  .catch((error) =>{
    alert("Error occurred in the server, Sorry for the inconvenience :(");
  });
  }
 


  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <NavBar current='view-events'/>
   <div class=" main-panel ">

    <div class="sidenav" data-color="black" data-background-color="white"  >
      
      
      <div class="sidebar-wrapper">
      {this.state.data===null ? null :
      <ul class="nav" >
        {this.state.data.map(listitem => (
            <li className="nav-item">
            <button onClick={()=> this.setState({event:listitem})}>
              {listitem['title']}
              <p>{listitem['description']}</p>
              </button>
            </li>
          ))}
      </ul>
      }
      </div>
    </div>
    
   
  </div>
  <div class="sidepanel">
    <div class="content">
        {this.state.event!==null?
        <SingleEvent data={this.state.event}/>:
        null}

      </div>
  </div>



  </div>
</div>   
);
}
}
export default withRouter(viewEvents);