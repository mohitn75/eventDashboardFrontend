import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css'
import Table from '../Table'
import NavBar from './NavBar';
import axios from 'axios';

class  CDash extends React.Component {

  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role !== 'CREATOR')
      this.props.history.push('/') 
  }
    constructor(props) {
      super(props);
      this.state = {
        dataUpcomingEvent : [{"title": "virtual meeting 2"}],
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
    var user_id = sessionStorage.getItem("user_id");
    var config = {
    method: 'get',
    url: 'http://localhost:8080/api/getPendingEvents/' + user_id  
    };
    axios(config)
    .then( (response) => {
      console.log(JSON.stringify(response.data));
      console.log(response.data );
      if(response.data.length!=0)
      this.setState({data:response.data});
      console.log(this.state.data );
    })
    .catch((error) =>{
      console.log(error);
    });
    }
  accept = (eventID) =>{
    var user_id = sessionStorage.getItem("user_id");
    console.log(user_id);

    var config = {
    method: 'post',
    url: 'api/accept/' + user_id  +'/' + eventID ,    
    headers: { 
      'Content-Type': 'application/json'
    },
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
      var user_id = sessionStorage.getItem("user_id");
      console.log(user_id);
      var config = {
      method: 'post',
      url: 'api/reject/' + user_id  +'/' + eventID ,    
      headers: { 
        'Content-Type': 'application/json'
      },
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
    var user_id = sessionStorage.getItem("user_id");
    var config = {
    method: 'get',
    url: 'http://localhost:8080/api/getEventDashboard/' + user_id  
    };
    axios(config)
    .then( (response) => {
      console.log(JSON.stringify(response.data));
      console.log(response.data );
      if(response.data.length!=0)
      this.setState({dataUpcomingEvent:response.data});
      console.log(this.state.dataUpcomingEvent );
    })
    .catch((error) =>{
      console.log(error);
    });
        //window.location.reload(false);

    }
 //total = this.state.data === null ? 0 : this.data.length; 
 //totalPending = this.state.data === null ? 0 : this.data.length;
  render(){
  return (
  <div >  
  <div class="wrapper ">
    <NavBar current='creator-dash' />
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
                  <h3 class="card-title" >{this.total}
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
                  <h3 class="card-title">{this.totalPending}</h3>
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
                  <p class="card-category">Scheduled Tomorrow</p>
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
                          <li className="nav-item">
                            {pendingEvents['title']}
                          <button type="button" class="btn btn-success"  onClick={()=> this.accept(pendingEvents['id'])}>
                            Accept
                            </button>
                            <button type="button" class="btn btn-danger" onClick={()=> this.reject(pendingEvents['id'])}>
                            Reject
                            </button>
                          </li>
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
export default withRouter(CDash);
