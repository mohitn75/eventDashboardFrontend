import React from 'react';
import { withRouter } from 'react-router-dom';
import './material.css'
import axios from 'axios';

class newEvent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    }
    state = {
    cur : 'all',
    email : "",
    title : "",
    desc :"",
    st_date :"",
    st_time :"",
    en_date :"",
    en_time :"",
    target :"",
    type :"",
    tar :"",
    isDisplayed :false,
    };
  
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  submit= () =>{
    return(
    //console.log(this.title.value),
    //console.log(this.state.tar),
    //alert("hell")
    axios.post("http://localhost:8080/api/addEvent",
    {
      'title':this.state.title,
      'description':this.state.desc,
      'type':this.state.type
    })


    );
    
  }
  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
 
      <div class="logo simple-text logo-normal">
          USER NAME
        </div>
      <div class="sidebar-wrapper">
         <ul class="nav">
          <li class="nav-item ">
            <a class="nav-link" href="/cdash">
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/ccalendar">
              <p>Calendar</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/newevent">
              <p>Create Event</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/newgroup">
              <p>Create Group</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/calerts">
              <p>Alerts</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
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
                  <form >
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
                        
                        <label class="bmd-label-floating" for="all" > Public &nbsp;</label>
                        <input type="radio" id="all" name="target" value="all" 
                        onClick={()=> this.setState({cur : 'all'})} />
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
                          
                        <label class="bmd-label-floating" for="group" > Group &nbsp;</label>
                         <input type="radio" id="group" name="target" 
                         onClick={()=> this.setState({cur : 'group'})}/>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
                           
                        <label class="bmd-label-floating" for="mail" > E-mails &nbsp;</label>
                        <input type="radio" id="mail" name="target" 
                        onClick={()=> this.setState({cur : 'mail'})}/>
                        </div>
                      </div>
                    </div>

                    <div>
                    {this.state.cur === 'mail' ? 
                    <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-11">
                    <div class="form-group">
                    <label class="bmd-label-floating">Email (separate each email with a comma, like: mail@example.com, mail2@example.com)</label>
                    <input type="email" class="form-control" multiple 
                    name = "target"
                    //value = {this.state.password}
                    onChange={this.handleChange}/>
                    </div>
                    </div>
                    </div>
                    : null}
                    </div>

                    <div>
                    {this.state.cur === 'group' ? 
                    <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-11">
                    <div class="form-group">
                    <label class="bmd-label-floating">Group Name</label>
                    <input type="text" class="form-control" 
                    name = "target"
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
                    <button type="submit" class="btn btn-primary pull-right" 
                    onClick = {() => this.submit() }>Create Event</button>
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
const Fir = props => {
  
  
  const current = props.current;
  if(current === 'mail'){
  return (
   <div class="row">
   <div class="col-md-1"></div>
    <div class="col-md-11">
    <div class="form-group">
    <label class="bmd-label-floating">Email (separate each email with a comma, like: mail@example.com, mail2@example.com)</label>
    <input type="email" class="form-control" multiple 
    name = "target"
    //value = {this.state.password}
    onChange={newEvent.handleChange}/>
    </div>
    </div>
    </div>
  );
  }
  else if(current === 'group'){
    return (
      
      <div class="row">
      <div class="col-md-1"></div>
    <div class="col-md-11">
    <div class="form-group">
    <label class="bmd-label-floating">Group Name</label>
    <input type="text" class="form-control" 
    name = "tar"
    //value = {newEvent.state.tar}
    onChange={this.setState({"tar" : "this.value"})}/>
    </div>
    </div>
    </div>
    )
  } 
  else {
    return (
      <div></div>
    )
  } 
};

export default withRouter(newEvent);