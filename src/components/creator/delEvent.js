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

  getKeys = function(){
 return Object.keys(this.state.data[0]);
 }
 
 getHeader = function(){
 var keys = this.getKeys();
 return keys.map((key, index)=>{
 return <th key={key}>{key.toUpperCase()}</th>})
 }



  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role === 'USER')
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
  var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
  var user_email = sessionStorage.getItem("user_email");
  var config = {
  method: 'get',
  url: 'http://backendproject-emb.apps.123.252.203.195.nip.io/api/findEventByHost/'+user_email,
  headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    authorization: auth }
  
  };
axios(config)
.then( (response) => {
  if(response.data.length!==0)
    this.setState({data:response.data});
})
.catch((error) =>{
  alert("Error occurred in the server, Sorry for the inconvenience :(");
});
}


  
del = (id,title) =>{
if(window.confirm("Do you want to delete event \nID :"+id+"\nTitle :"+title)){
     
    var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
  var config = {
  method: 'delete',
  url: 'http://backendproject-emb.apps.123.252.203.195.nip.io/api/deleteEvent/'+id,
  headers: { 
    "X-Requested-With" : "XMLHttpRequest",
     authorization: auth }
    
};
  axios(config)
  .then( (response) => {
    window.location.reload(false);
    alert("Event deleted successfully!")

  })
  .catch((error) =>{
    alert("Failed to delete event")
  });
  
}
}  
  
    render(){
     // const ax = this.fetch()
      ////console.log(ax);
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
                  <p class="card-category">Click on the event to delete</p>
                </div>
                <div class="card-body table-responsive">
                {this.state.data===null?null:
               <div>
                  <table className="table table-hover">
                    <thead className="text-warning">
                      <tr>
                           <td > {"ID"} </td>
                           <td > {"TITLE"} </td>
                           <td > {"DESCRIPTION"} </td>
                           <td > {"PLACE"} </td>
                           <td > {"START"} </td>
                           <td > {"END"}} </td>
                           <td > {"TYPE"} </td>
                           </tr> 
                    </thead>
                    <tbody>
                       
                          {this.state.data===null?null:
                          this.state.data.map(row => (
                          <tr onClick={()=>this.del(row['id'],row['title'])}>
                           <td > {row['id']} </td>
                           <td > {row['title']} </td>
                           <td > {row['description']} </td>
                           <td > {row['place']} </td>
                           <td > {row['startDateTime']} </td>
                           <td > {row['endDateTime']} </td>
                           <td > {row['type']} </td>
                           </tr> 
                          
                        ))}
                        
                                  
                    </tbody>
                  </table>
                  
                </div>
               }
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

/*
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
*/