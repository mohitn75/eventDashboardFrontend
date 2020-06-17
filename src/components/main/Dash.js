import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css'
import Table from '../Table'
import NavBar from './NavBar';
import axios from 'axios';

class  Dash extends React.Component {

  state={
    data:null,
    total:null,
    today:null,
    new:null,
    pending:null
  }

  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role !== 'USER')
      this.props.history.push('/') 
  }

    constructor(props) {
      super(props);
      this.state = {
        dataUpcomingEvent : null,
        data : null,
        e_id : null,
        u_id : null,
        response : ""
      };
    }
    componentDidMount(){
        this.assign();
        this.assign1();
    }
    assign= () =>{
    var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
    var user_id = sessionStorage.getItem("user_id");
    var config = {
    method: 'get',
    url: 'http://localhost:8080/api/getPendingEvents/' + user_id ,
    headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    authorization: auth } 
    };
    axios(config)
    .then( (response) => {
      console.log(JSON.stringify(response.data));
      console.log(response.data );
      if(response.data.length!==0)
      this.setState({data:response.data});
      console.log(this.state.data );
    })
    .catch((error) =>{
      console.log(error);
    });
    }
  accept = (eventID) =>{
    var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
    var user_id = sessionStorage.getItem("user_id");
    console.log(user_id);

    var config = {
    method: 'post',
    url: 'http://localhost:8080/api/accept/' + user_id  +'/' + eventID ,    
    headers: { 
      'Content-Type': 'application/json',
      "X-Requested-With" : "XMLHttpRequest",
       'Authorization': auth }
  };
  axios(config)
  .then(function (response) {      
  })
  .catch(function (error) {
    console.log(error);
    console.log("error");
  });
  window.location.reload(false);
  }

  reject = (eventID) =>{
    var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
      var user_id = sessionStorage.getItem("user_id");
      console.log(user_id);
      var config = {
      method: 'post',
      url: 'http://localhost:8080/api/reject/' + user_id  +'/' + eventID ,    
      headers: { 
        'Content-Type': 'application/json',
        "X-Requested-With" : "XMLHttpRequest",
        'Authorization': auth 
      }
    };
    axios(config)
    .then(function (response) {      
    })
    .catch(function (error) {
      console.log(error);
      console.log("error");
    });
    window.location.reload(false);
  }


assign1= () =>{
  var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
    var user_id = sessionStorage.getItem("user_id");
    var config = {
    method: 'get',
    url: 'http://localhost:8080/api/getEventDashboard/' + user_id ,
    headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    'Authorization': auth }
  
    };
    axios(config)
    .then( (response) => {
      console.log(JSON.stringify(response.data));
      console.log(response.data );
      if(response.data.length!==0)
      this.setState({dataUpcomingEvent:response.data});
      console.log(this.state.dataUpcomingEvent );
    })
    .catch((error) =>{
      console.log(error);
    });
        //window.location.reload(false);

 }
 

  render(){
  return (
   <div >  
  <div class="wrapper ">
    <NavBar current='dash' />
    <div class="main-panel">
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">I</i>
                  </div>
                  <p class="card-category">Total Events</p>
                  <h3 class="card-title" >{this.state.dataUpcomingEvent===null?0:this.state.dataUpcomingEvent.length}
                  </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    View All
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">I</i>
                  </div>
                  <p class="card-category">New Invites</p>
                  <h3 class="card-title">3</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    View
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-danger card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">I</i>
                  </div>
                  <p class="card-category">Pending Action</p>
                  <h3 class="card-title">{this.state.data===null?0:this.state.data.length}</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    View
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-info card-header-icon">
                  <div class="card-icon">
                    <i class="fa fa-twitter">I</i>
                  </div>
                  <p class="card-category">Scheduled Today</p>
                  <h3 class="card-title">2</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                  View
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="card">
                <div class="card-header card-header-tabs card-header-primary">
                  <div class="nav-tabs-navigation">
                    <div class="nav-tabs-wrapper">
                    <h4 class="card-title">Pending Response</h4>
                    </div>
                  </div>
                </div>
                <div class="card-body ">
                  <div class="tab-content">
                    <div class="tab-pane active" id="profile">
                      <table class="table">
                        <tbody>
                          <tr>
                          {this.state.data===null?null:this.state.data.map(pendingEvents => (
                            <div>
                          <div class="row">
                           <p class="col-lg-4"> {pendingEvents['title']} </p>
                          <button type="button" class="btn btn-success col-lg-3"  onClick={()=> this.accept(pendingEvents['id'])}>
                            Accept
                            </button>
                            <button type="button" class="btn btn-danger col-lg-3" onClick={()=> this.reject(pendingEvents['id'])}>
                            Reject
                            </button>
                           
                         </div>
                          <hr /> 
                          </div>
                        ))}
                        
                          </tr>               
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="card">
                <div class="card-header card-header-warning">
                  <h4 class="card-title">Upcoming Events</h4>
                  <p class="card-category">All events</p>
                </div>
                <div class="card-body table-responsive">


                {this.state.dataUpcomingEvent===null?null:
               <Table data={this.state.dataUpcomingEvent}/>}       

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
export default withRouter(Dash);
