import React from 'react';
import { withRouter } from 'react-router-dom';
import './material.css'

class newEvent extends React.Component {
nav = () =>{
    
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
                  <form>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="bmd-label-floating">Host </label>
                          <input type="text" class="form-control" disabled placeholder="abc@gmail.com" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Event Title</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Date</label>
                          <input type="date" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Start time</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">End time</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-2">
                        <div class="form-group">
                          <label class="bmd-label-floating">Target </label>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">          
                        
                        <label class="bmd-label-floating" for="all" >    All</label>
                        <input type="radio" id="all" name="target" value="all" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
                          
                        <label class="bmd-label-floating" for="mail" > e-mails</label>
                         <input type="radio" id="mail" name="target" value="mail" class="form-control"/>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
                           
                        <label class="bmd-label-floating" for="group" > Group</label>
                        <input type="radio" id="group" name="target" value="group" class="form-control" 
                        onClick={()=> this.nav()}/>
                        </div>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="bmd-label-floating">Email (separate each email with a comma, like: mail@example.com, mail2@example.com)</label>
                          <input type="email" class="form-control" multiple/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">City</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Country</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Postal Code</label>
                          <input type="text" class="form-control" /> 
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          
                            <label class="bmd-label-floating"> Description</label>
                            <textarea class="form-control" rows="5"></textarea>
                          
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
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