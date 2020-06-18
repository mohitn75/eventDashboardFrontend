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
    place:"",
      items : [],
      suggestions : [],  
      text : '', 
      rtext : '',
      items1:[],
      suggestions1:[],
      text1:'',
      rtext1:''
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
    "X-Requested-With" : "XMLHttpRequest",
    'Authorization': auth ,
    'Content-Type': 'application/json'},
    data : data
};
//lert(this.state.st_date+" "+this.state.st_time)
//alert(data)
axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
  alert("Event added !")
})
.catch(function (error) {
  alert(error)
  //alert(this.state.st_date)
  //alert(this.state.st_time)
  //console.log(error.data);
  //console.log("error");
});

  }

  
   componentDidMount(){
    this.assign();
    this.assign1();
  }

assign= () =>{
 var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
  var config = {
  method: 'get',
  url: 'http://localhost:8080/api/getEmails',
  headers: { 
    "X-Requested-With" : "XMLHttpRequest",
    'Authorization': auth },
  
  };
axios(config)
.then( (response) => {
  
  this.setState({items:response.data});
})
.catch((error) =>{
  console.log(error);
});
} 


assign1= () =>{
 var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
  var config = {
  method: 'get',
  url: 'http://localhost:8080/api/getGroupNames',
  headers: { 
    "X-Requested-With" : "XMLHttpRequest",
    'Authorization': auth },
  
  };
axios(config)
.then( (response) => {
  
  this.setState({items1:response.data});
})
.catch((error) =>{
  console.log(error);
});
} 
  onTextChanged = (e) => {
        var value = e.target.value;
        var i;
        var j;
        var lol = value;
        var flag = 0;
        this.setState({ text : this.state.text , suggestions : this.state.suggestions , rtext : ""});
        for(i=value.length-1;i>=0;i--){
          if(value.charAt(i)===','){
            j=i;
            flag = 1;
            break;
          }
        }
        if(flag === 1){
          this.setState({ text : this.state.text , suggestions : this.state.suggestions , rtext : value.substring(0,j+1)});
          value = value.substring(j+1,value.length);
        }
        else{
          lol = value;
        }
        
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`${value}`,'i');
            suggestions = this.state.items.sort().filter(v => regex.test(v));
        }
        console.log("rtext" + this.state.rtext);
        this.setState(() => ({ suggestions , text : lol })); 
        this.setState({action:lol})
    }


  suggestionSelected(value){
      this.setState(() => ({
          text : this.state.rtext + value,
          suggestions : [],
          rtext : ""
      }))
  }

  renderSuggestions (){
      const {suggestions} =   this.state;
      if(suggestions.length === 0){
          return null;
      }
      return(
              <ul>
                  {suggestions.map((item) => <li style={{listStyle:'none',
                   width: '50%',
                  border : '1px solid gray'}}
                  onClick = {()=> this.suggestionSelected(item)}>{item}</li>)}
              </ul>
      );
  }
  

  onTextChanged1 = (e) => {
        var value = e.target.value;
        var i;
        var j;
        var lol1 = value;
        var flag = 0;
        this.setState({ text1 : this.state.text1 , suggestions1 : this.state.suggestions1 , rtext1 : ""});
        for(i=value.length-1;i>=0;i--){
          if(value.charAt(i)===','){
            j=i;
            flag = 1;
            break;
          }
        }
        if(flag === 1){
          this.setState({ text1 : this.state.text1 , suggestions1 : this.state.suggestions1 , rtext1 : value.substring(0,j+1)});
          value = value.substring(j+1,value.length);
        }
        else{
          lol1 = value;
        }
        console.log("value " + value);
        console.log("lol" + lol1);
        let suggestions1 = [];
        if(value.length > 0){
            const regex = new RegExp(`${value}`,'i');
            suggestions1 = this.state.items1.sort().filter(v => regex.test(v));
        }
        console.log("rtext" + this.state.rtext1);
        this.setState(() => ({ suggestions1 , text1 : lol1 })); 
        this.setState({action:lol1})
    }


  suggestionSelected1(value){
      this.setState(() => ({
          text1 : this.state.rtext1 + value,
          suggestions1 : [],
          rtext1 : ""
      }))
  }

  renderSuggestions1 (){
      const {suggestions1} =   this.state;
      if(suggestions1.length === 0){
          return null;
      }
      return(
              <ul>
                  {suggestions1.map((item) => <li style={{listStyle:'none',
                   width: '50%',
                  border : '1px solid gray'}}
                  onClick = {()=> this.suggestionSelected1(item)}>{item}</li>)}
              </ul>
      );
  }
  


  
  render(){
    //this.submit()
    const {text} = this.state;
    const {text1} = this.state;
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
                    name = "action" value={text}
                    //value = {this.state.password}
                    
                    onChange={this.onTextChanged}/>
                    {this.renderSuggestions()}
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
                    name = "action" value={text1}
                    //value = {newEvent.state.tar}
                    onChange={this.onTextChanged1}/>
                    {this.renderSuggestions1()}
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