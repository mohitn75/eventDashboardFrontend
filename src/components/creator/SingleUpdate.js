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
    data : this.props.data,
    cur : 'all',
    title : "",
    desc :"",
    st_date :"",
    st_time :"",
    en_date :"",
    en_time :"",
    
    type :"",
    current:"newevent",
    
    event:null,
    
    }
    handleChange(event) {
      //alert(event.target.value)
    this.setState({
      [event.target.name] : event.target.value 
      //alert(this.data['title'])
    });
    //alert(this.state.title)
    }


    fetch = () =>{
      if(this.state.title==="")
        this.state.title=this.state.data['title']
      if(this.state.desc==="")
        this.state.desc=this.state.data['description']
      if(this.state.type==="")
        this.state.type=this.state.data['type']
      if(this.state.place==="")
        this.state.place=this.state.data['place']
      if(this.state.st_date==="")
        this.state.st_date=this.state.data['startDateTime'].split(" ")[0]
      if(this.state.st_time==="")
        this.state.st_time=this.state.data['startDateTime'].split(" ")[1]
      if(this.state.en_date==="")
        this.state.en_date=this.state.data['endDateTime'].split(" ")[0]
      if(this.state.en_time==="")
        this.state.en_time=this.state.data['endDateTime'].split(" ")[1]

      var start = this.state.st_date + " " + this.state.st_time+ ":00";
    var end = this.state.en_date + " " + this.state.en_time+ ":00";
          
            var data = JSON.stringify(
            {
            "title": this.state.title,
            "description":this.state.desc,
            "place":this.state.place,
            "type":this.state.type,
            "startDateTime":start,
            "endDateTime":end,
            });
          alert(JSON.stringify(data))
            var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
        var config = {
        method: 'post',
        url: 'http://localhost:8080/api/updateEvent',
        headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    'Authorization': auth ,
                    'Content-Type': 'application/json'},
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
                          <input type="text" class="form-control" 
                          name = "st_date"
                          placeHolder = {this.state.data['startDateTime'].split(" ")[0]}
                          onFocus="(this.type='date')"
                          onChange={this.handleChange}/>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Start time</label>
                          <input type="text" class="form-control" 
                          name = "st_time"
                          placeHolder = {this.state.data['startDateTime'].split(" ")[1]}
                          onFocus="(this.type='time')"
                          onChange={this.handleChange}/>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">End date</label>
                          <input type="text" class="form-control" 
                          name = "en_date"
                          placeHolder = {this.state.data['endDateTime'].split(" ")[0]}
                          onFocus="(this.type='date')"
                          onChange={this.handleChange}/>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">End time</label>
                          <input type="text" class="form-control" 
                          name = "en_time"
                          placeHolder = {this.state.data['endDateTime'].split(" ")[1]}
                          onFocus="(this.type='time')"
                          onChange={this.handleChange}/>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Event Type</label>
                          <input type="text" class="form-control" 
                          name = "type"
                          //value = {this.state.type}
                          placeHolder = {this.state.data['type']}
                          onChange={this.handleChange} />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Place</label>
                          <input type="text" class="form-control" 
                          name = "place"
                          //value = {this.state.type}
                          placeHolder = {this.state.data['place']}
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
                          placeHolder={this.state.data['description']}
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