import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css';
import NavBar from './NavBar';
import axios from 'axios'

class listEvents extends React.Component {
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
    cur : 'all',
    title : "new meet",
    desc :"njjbbbefr",
    st_date :"",
    st_time :"",
    en_date :"",
    en_time :"",
    target :"all",
    type :"",
    current:"newevent",
    cla:""

    };
  
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  fetch = () =>{
    //var axios = require('axios');
    var user_email = sessionStorage.getItem("user_email");
var data = JSON.stringify(
  {
    "title":this.state.title,
  "email":user_email,
"description":this.state.desc,
"type":this.state.type,
"startDateTime":this.state.st_date+'T'+this.state.st_time,
"endDateTime":this.state.en_date+'T'+this.state.en_time,
});

var config = {
  method: 'post',
  url: 'api/addEvent',
  headers: { 
    'Authorization': 'Basic ZGlwYW5zaGk2MDBAZ21haWwuY29tOmRk', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  
})
.catch(function (error) {
  console.log(error);
  console.log("error");
});

  }


  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <NavBar current='events'/>
   <div class=" main-panel ">

    <div class="sidenav" data-color="black" data-background-color="white"  >
      
      
      <div class="sidebar-wrapper">
      <ul class="nav" >
        <li class="nav-item ">
            <button>
            <label>New Meeting</label>
            <p>this is new</p>
            </button>
        </li>
        <li class="nav-item ">
            <button>
            <label>New Meeting</label>
            <p>this is new</p>
            </button>
        </li>
        <li class="nav-item ">
            <button>
            <label>New Meeting</label>
            <p>this is new</p>
            </button>
        </li>
        <li class="nav-item ">
            <button>
            <label>New Meeting</label>
            <p>this is new</p>
            </button>
        </li>

      </ul>
      </div>
    </div>
    
   
  </div>
  <div class="sidepanel">
    <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-10">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Event Details</h4>
                </div>
                <div class="card-body">
                  <form >
                  <fieldset disabled="disabled">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-group">
                          <label class="bmd-label-floating">Event Title</label>
                          <input type="text" class="form-control" 
                          name = "title"
                          value = {this.state.title}
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
                        
                        <label class="bmd-label-floating" for="all" > Public &nbsp;</label>
                        <input type="radio" id="all" name="target" value="all" 
                        onClick={()=> this.setState({target : 'all'})} />
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
                           
                        <label class="bmd-label-floating" for="mail" > E-mails &nbsp;</label>
                        <input type="radio" id="mail" name="target" 
                        onClick={()=> this.setState({target : 'mail'})}/>
                        </div>
                      </div>
                    </div>

                    <div>
                    {this.state.target === 'mail' ? 
                    <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-11">
                    <div class="form-group">
                    <label class="bmd-label-floating">Email (separate each email with a comma, like: mail@example.com, mail2@example.com)</label>
                    <input type="email" class="form-control" multiple 
                    name = "action"
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
                    name = "action"
                    //value = {newEvent.state.tar}
                    onChange={this.handleChange}/>
                    </div>
                    </div>
                    </div>
                    : null}
                    </div>

                    
                    <br />
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-group">
                          <label class="bmd-label-floating">Event Type</label>
                          <input type="text" class="form-control" 
                          name = "type"
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
                    
                    </fieldset>
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
export default withRouter(listEvents);