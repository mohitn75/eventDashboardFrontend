import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css'


class SingleEvent extends React.Component {
 
    render(){
     var data = this.props.data
    return(<div class="container-fluid">
          <div class="row">
            <div class="col-md-10">
              <div class="card">
                
                <div class="card-body">
                  <form >
                  <fieldset disabled="disabled">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-group">
                          <label class="bmd-label-floating">Title</label>
                          <label type="text" class="form-control" >{data['title']}</label>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Start date</label>
                          <label type="date" class="form-control">{data['date']}</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Start time</label>
                          <label type="time" class="form-control" >{data['time']}</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">End date</label>
                          <label type="date" class="form-control">{data['date']}</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">End time</label>
                          <label type="time" class="form-control" >{data['time']}</label>
                        </div>
                      </div>
                    </div>
                    <br />
                    
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-group">
                          <label class="bmd-label-floating">Host</label>
                          <label type="text" class="form-control" >{data['host']}</label>
                        </div>
                      </div>
                    </div>
                    
                    <br />
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          
                            <label class="bmd-label-floating"> Description</label>
                            <label class="form-control" rows="3" >{data['description']}</label>
                          
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
)}}
export default withRouter(SingleEvent);