import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css'
import axios from 'axios';
import NavBar from './NavBar';

class newEvent extends React.Component {
  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role !== 'CREATOR')
      this.props.history.push('/') 
  }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.fetch = this.fetch.bind(this);
    }
    state = {
    
    title : "",
    desc :"",
    st_date :"",
    st_time :"",
    en_date :"",
    en_time :"",
    target :"public",
    type :"",
    current:"newevent",
    users:"",
    place:""
    };
  
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  

  fetch = () =>{
    //var axios = require('axios');
    var user_email = sessionStorage.getItem("user_email");
    var start = this.state.st_date + " " + this.state.st_time+ ":00";
    var end = this.state.en_date + " " + this.state.en_time+ ":00";
var data = JSON.stringify({
  "title":this.state.title,
  "email":user_email,
  "description":this.state.desc,
  "place":this.state.place,
  "startDateTime":start,//"2020-06-14 15:40:00",
  "endDateTime":end,//"2020-06-14 15:40:00",
  "type":this.state.type,
  "target":this.state.target,
  "action":this.state.users
  });
/*{
  title:this.state.title,
  email:user_email,
  description:this.state.desc,
  place:this.state.place,
  startDateTime:"2020-06-14 15:40:00",//this.state.st_date + " " + this.state.st_time,//
  endDateTime:"2020-06-16 15:40:00",//JSON.stringify(this.state.en_date)+" "+JSON.stringify(this.state.en_time),//
  type:this.state.type,
  target:this.state.target,
  action:this.state.users
  };
  var newdata = JSON.stringify(data);*/
  //alert(data)
  //alert(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass"))
 var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
var config = {


  method: 'post',
  url: 'http://localhost:8080/api/addEvent',
  headers: {   
    'Authorization': auth ,
    'Content-Type': 'application/json',
    'crossorigin':true,
    'Access-Control-Allow-Origin' : '*',      
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'},
    data : data
};
//lert(this.state.st_date+" "+this.state.st_time)
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  alert("success")
})
.catch(function (error) {
  alert(error)
  alert(this.state.st_date)
  alert(this.state.st_time)
  console.log(error.data);
  console.log("error");
});

  }

  
  render(){
    //this.submit()
  return (
     <div >
    
  <div class="wrapper ">
    <NavBar current='newevent' />
    <div class="main-panel">
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-10">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">New Event</h4>
                  <p class="card-category">Provide details</p>
                </div>
                <div class="card-body">
                  <form disabled='disabled'>
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-group">
                          <label class="bmd-label-floating">Event Title</label>
                          <input type="text" class="form-control" 
                          name = "title"
                          //value = {this.state.password}
                          onChange={this.handleChange} />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Start date</label>
                          <input type="date" class="form-control" 
                          name = "st_date"
                          //value = {this.state.password}
                          onChange={this.handleChange}/>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Start time</label>
                          <input type="time" class="form-control" 
                          name = "st_time"
                          //value = {this.state.password}
                          onChange={this.handleChange}/>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">End date</label>
                          <input type="date" class="form-control" 
                          name = "en_date"
                          //value = {this.state.password}
                          onChange={this.handleChange}/>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">End time</label>
                          <input type="time" class="form-control" 
                          name = "en_time"
                          //value = {this.state.password}
                          onChange={this.handleChange}/>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-2">
                        <div class="form-group">
                          <label class="bmd-label-floating">Target </label>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">          
                        
                        <label class="bmd-label-floating" for="public" > Public &nbsp;</label>
                        <input type="radio" id="public" name="target" value="public" 
                        onClick={()=> this.setState({target : 'public'})} />
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
                          
                        <label class="bmd-label-floating" for="group" > Group &nbsp;</label>
                         <input type="radio" id="group" name="target" 
                         onClick={()=> this.setState({target : 'group'})}/>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
                           
                        <label class="bmd-label-floating" for="emails" > E-mails &nbsp;</label>
                        <input type="radio" id="emails" name="target" 
                        onClick={()=> this.setState({target : 'emails'})}/>
                        </div>
                      </div>
                    </div>

                    <div>
                    {this.state.target === 'emails' ? 
                    <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-11">
                    <div class="form-group">
                    <label class="bmd-label-floating">Email (separate each email with a comma, like: mail@example.com, mail2@example.com)</label>
                    <input type="email" class="form-control" multiple 
                    name = "users"
                    //value = {this.state.password}
                    onChange={this.handleChange}/>
                    </div>
                    </div>
                    </div>
                    : null}
                    </div>

                    <div>
                    {this.state.target === 'group' ? 
                    <div class="row" >
                    <div class="col-md-1"></div>
                    <div class="col-md-11">
                    <div class="form-group">
                    <label class="bmd-label-floating">Group Name</label>
                    <input type="text" class="form-control" 
                    name = "users"
                    //value = {newEvent.state.tar}
                    onChange={this.handleChange}/>
                    </div>
                    </div>
                    </div>
                    : null}
                    </div>

                    
                    <br />
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Event Type</label>
                          <input type="text" class="form-control" 
                          name = "type"
                          //value = {this.state.password}
                          onChange={this.handleChange} />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Place</label>
                          <input type="text" class="form-control" 
                          name = "place"
                          //value = {this.state.password}
                          onChange={this.handleChange} />
                        </div>
                      </div>
                    </div>
                    
                    <br />
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          
                            <label class="bmd-label-floating"> Description</label>
                            <textarea class="form-control" rows="3"
                            name = "desc"
                          //value = {this.state.password}
                          onChange={this.handleChange}></textarea>
                          
                        </div>
                      </div>
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary pull-right" 
                    onClick = {() => this.fetch() }>Create Event</button>
                    <div class="clearfix"></div>
                  </form>
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

export default withRouter(newEvent);