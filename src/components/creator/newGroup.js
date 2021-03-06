import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css'
import axios from 'axios';
import NavBar from './NavBar';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
//import './autoCompleteText.css';

class newGroup extends React.Component {
  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role === 'USER')
      this.props.history.push('/') 
  }


  constructor (props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            items : [],
            suggestions : [],  
            text : '', 
            rtext : '',
            name:"",
            email:"",
            groupnames:""
        };

    }
    componentDidMount(){
    this.assign();
    this.getnames();
  }

assign= () =>{
var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
  var config = {
  method: 'get',
  url: 'http://backendproject-emb.apps.123.252.203.195.nip.io/api/getEmails',
  headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    'Authorization': auth 
                    }
  
  };
axios(config)
.then( (response) => {
  this.setState({items:response.data});
})
.catch((error) =>{
  alert("error")
});
}


getnames= () =>{
  var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
  axios.get('http://backendproject-emb.apps.123.252.203.195.nip.io/api/getGroupNames',{
    headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    authorization: auth,
                     }})
  .then( (response) => {
    this.setState({groupnames:response.data});
    //alert(this.state.groupnames)
  })
  .catch((error) =>{
    //alert("Error occurred in the server, Sorry for the inconvenience :(");
    alert("error")
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
        //console.log("value " + value);
        //console.log("lol" + lol);
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`${value}`,'i');
            suggestions = this.state.items.sort().filter(v => regex.test(v));
        }
        //console.log("rtext" + this.state.rtext);
        this.setState(() => ({ suggestions , text : lol })); 

        this.setState({email:lol})
        //console.log(lol)
        
    }


  suggestionSelected(value){
      this.setState(() => ({
          text : this.state.rtext + value,
          suggestions : [],
          rtext : "",
          
      }))
  }

  renderSuggestions (){
      const {suggestions} =   this.state;
      if(suggestions.length === 0){
          return null;
      }
      return(
              <ul class="list-group">
                  {suggestions.map((item) => <li class="list-item" style={{listStyle:'none',
                   width: '50%',
                  border : '1px solid gray'}}
                  onClick = {()=> this.suggestionSelected(item)}>{item}
                  </li>)}
              </ul>
      );
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  fetch = () =>{
  //var axios = require('axios');
  var data = JSON.stringify(
  {
    "name":this.state.name,
    "creatorEmail":sessionStorage.getItem("user_email"),
    "email":this.state.email
});
var auth ='Basic ' + window.btoa(sessionStorage.getItem("user_email") + ":" + sessionStorage.getItem("user_pass")) 
var config = {


  method: 'post',
  url: 'http://backendproject-emb.apps.123.252.203.195.nip.io/api/addGroup',
  headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    authorization: auth ,
                    'Content-Type': 'application/json'},
    data : data
};

axios(config)
.then(function (response) {
  this.notify()
})
.catch(function (error) {
  alert("Error occurred in the server, Sorry for the inconvenience :(");
});

  }


  notifyLogin = ($name) => {
      store.addNotification(
      {
          title:"Hello, "+ $name + "!",
          message:"Welcome !",
          type: "info",
          insert: "bottom",
          container: "bottom-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration:3000,
            click:true,
            showIcon:true
          }
      }
      )
  }
  render(){
    //this.fetch()
    const {text} = this.state;

  return (
    
     <div >
  <div class="wrapper ">
    <NavBar current='newgroup' />
    <div class="main-panel">
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">New Group</h4>
                  <p class="card-category">Create a new group of recipients</p>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="bmd-label-floating">Group Title</label>
                          <input type="text" class="form-control" 
                          name="name"
                          onChange={this.handleChange} />
                        </div>
                      </div>
                     </div> 
                     <br />
                    <div class="row">
                    <div class="col-md-12">
                    <div class="form-group">
                    <label class="bmd-label-floating">Email (separate each email with a comma, 
                    like: mail@example.com, mail2@example.com)</label>
                    <div className = "autoCompletetext">
                <input class="form-control" value ={text} style={{width:'100%'}} onChange = {this.onTextChanged} type = "email" name="email" multiple/>
                {this.renderSuggestions()}
                </div>
                    </div>
                    </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary pull-right" 
                    onClick={()=>this.fetch()}>Create group</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-profile">
                
                <div class="card-body">
                  <h4 class="card-title">Existing Groups</h4>
                  <br/>
                  <hr/>
                  <p class="card-description">
                    {this.state.groupnames=== "" ? null :
                    //<ul class="nav" >
                    <div>
                      {this.state.groupnames.map(listitem => (
                        <h4 style={{color:'black' }}> 
                          {listitem}
                         </h4> 
                        ))}
                      </div>
                    //</ul>
                    }
                  </p>
                  
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
export default withRouter(newGroup);
