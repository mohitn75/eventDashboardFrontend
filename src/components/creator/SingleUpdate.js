import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css';
import axios from 'axios';


class SingleUpdate extends React.Component {
 

    constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.fetch = this.fetch.bind(this);
    //var data;
    }
    
    state = {
    //data : this.props.data,
    cur : 'all',
    title : this.props.data['title'],
    desc :"",
    st_date :"",
    st_time :"",
    en_date :"",
    en_time :"",
    target :"all",
    type :"",
    current:"newevent",
    cla:"",
    event:null
    
    }
    handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
      //alert(this.data['title'])
    });
    }


    fetch = () =>{

      alert(this.state.title)
            //var axios = require('axios');
            var user_email = sessionStorage.getItem("user_email");
            var data = JSON.stringify(
            {
            "title":this.state.title,
            "email":user_email,
            "description":this.state.desc,
            "type":this.state.type,
            "startDateTime":this.state.st_date+' '+this.state.st_time,
            "endDateTime":this.state.en_date+' '+this.state.en_time,
            });

            var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
        var config = {
        method: 'post',
        url: 'http://localhost:8080/api/updateEvent',
        headers: {   
          'Authorization': auth ,
          'Content-Type': 'application/json',
          'crossorigin':true,
          'Access-Control-Allow-Origin' : '*',      
          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'},
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
       this.state.data=this.props.data;
       
        return(
            
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-10">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Event Details</h4>
                </div>
                <div class="card-body">
                  <form >
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-group">
                          <label class="bmd-label-floating">Event Title</label>
                          <input type="text" class="form-control" 
                          name = "title"
                          placeHolder = {this.state.data['title']}
                          onChange={this.handleChange} 
                          />
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
                          placeHolder = {this.state.data['startDateTime'].split(" ")[0]}
                          onFocus="(this.type='date')"
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
                      <div class="col-md-9">
                        <div class="form-group">
                          <label class="bmd-label-floating">Event Type</label>
                          <input type="text" class="form-control" 
                          name = "type"
                          //value = {this.state.type}
                          placeHolder = {this.state.data['startDateTime'].split(" ")[0]}
                          onChange={this.handleChange} />
                        </div>
                      </div>
                    </div>

                    <br />
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group ">
                          <label class="bmd-label-floating">Target</label>
                          <input type="text" class="form-control" 
                          name = "target" disabled
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
                          value = {this.state.desc}
                          onChange={this.handleChange}></textarea>
                          
                        </div>
                      </div>
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary pull-right" 
                    onClick = {() => this.fetch() }>Update Event Details</button>
                  </form>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      
        );
        
}}
export default withRouter(SingleUpdate);