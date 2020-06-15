import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css'
import axios from 'axios';
import Table from '../Table';
import NavBar from './NavBar';

class delEvent extends React.Component {
  constructor(props){
 super(props);
 this.assign = this.assign.bind(this);
 this.del = this.del.bind(this);
 this.handleChange=this.handleChange.bind(this);
 //this.getKeys = this.getKeys.bind(this);  <Table data={this.data}/>
 }
 
  state={
    id:"",
    data : null
  }
  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role !== 'CREATOR')
      this.props.history.push('/') 
  }
componentDidMount(){
    this.assign();
  }

handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }  

assign= () =>{
  var user_email = sessionStorage.getItem("user_email");
  var config = {
  method: 'get',
  url: 'http://localhost:8080/api/findEventByHost/'+user_email
  
  };
axios(config)
.then( (response) => {
  this.setState({data:response.data});
})
.catch((error) =>{
  console.log(error);
});
}
  
del = () =>{

    var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
  var config = {
  method: 'delete',
  url: 'http://localhost:8080/api/deleteEvent/'+this.state.id,
  headers: {   
    'Authorization': auth ,
    'Content-Type': 'application/json',
    'crossorigin':true,
    'Access-Control-Allow-Origin' : '*',      
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'},
    
};
  axios(config)
  .then( (response) => {
    //console.log(JSON.stringify(response.data));
    //console.log(response.data);
  })
  .catch((error) =>{
    console.log(error.data);
    console.log(this.state.id);
  });
}  
  
    render(){
     // const ax = this.fetch()
      //console.log(ax);
      //this.assign();
      
      
        return(
<div class="wrapper ">
    <NavBar current='delevent' />
     <div class="main-panel">
      <div class="content">
        <div class="container-fluid">
          <div class="row">
          <div class="card">
                <div class="card-header card-header-warning">
                  <h4 class="card-title">Select Event</h4>
                  <p class="card-category">All events</p>
                </div>
                <div class="card-body table-responsive">
                {this.state.data===null?null:
               <Table data={this.state.data}/>}
                </div>
          </div>
          </div>
          <div class="row justify-content-center ">
          <div class="card col-md-4 ">
          <div class="card-body table-responsive">
          <form >
          <div class="row justify-content-center ">
           <div class="col-md-12 ">
           <div class="form-group">
            <label class="bmd-label-floating">Enter event ID to delete event</label>
            <input type="integer" class="form-control" name="id" 
            onChange={this.handleChange}/>
             </div>
                    <button type="submit" class="btn btn-warning pull-right \" 
                    onClick={()=>this.del()}>Delete</button>
                    
             </div> 
              </div>       
                  </form>
                  </div>
        </div>
          </div>
        </div>
      </div>
    </div>
</div>
        )
    }
}

export default withRouter(delEvent)

