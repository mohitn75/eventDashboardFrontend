import React from "react";
import loginImg from "../../login.jpg";
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id!==null)
      if(user_role === 'USER')
        this.props.history.push('/dash') 
      else if(user_role === 'CREATOR'|| user_role==='ADMIN')
        this.props.history.push('/creator-dash')
  }

  state = {
    email : "",
    password : "",
    role : ""
  }
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }
   signUp = () => {

     axios.get("http://backendproject-emb.apps.123.252.203.195.nip.io/login",          
     { headers: { 
       "X-Requested-With" : "XMLHttpRequest",
       authorization: 'Basic ' + window.btoa(this.state.email + ":" + this.state.password) } }
             )
             .then((response) => {
                
                axios.get("http://backendproject-emb.apps.123.252.203.195.nip.io/api/userByEmail/"+this.state.email,
                {headers: { 
                  "X-Requested-With" : "XMLHttpRequest",
                    authorization: 'Basic ' + window.btoa(this.state.email + ":" + this.state.password) }})
                  .then((response) =>{
                    //alert(this.state.email);
                      let id = response.data['id'];
                      let role=response.data['role']['role'];
                      let name=response.data['firstName']+' '+response.data['lastName'];
                      sessionStorage.setItem("user_id", id);
                      sessionStorage.setItem("user_name", name);
                      sessionStorage.setItem("user_email", this.state.email);
                      sessionStorage.setItem("user_pass", this.state.password);
                      sessionStorage.setItem("user_role", role); 
                      sessionStorage.setItem("lenRem", 0);
                      sessionStorage.setItem("lenAl", 0);         
                      sessionStorage.setItem("flag", "1");                     
                      if(role === 'USER')
                      this.props.history.push('/dash') 
                      else if(role === 'CREATOR'|| role==='ADMIN')
                      this.props.history.push('/creator-dash') 

                      
                  },
                  (error)=>{
                    alert("Login failed");
                  }
                  
                  )
                
                }, (error) => 
             { 
             if(error.response===undefined)
              alert("Login failed")
             else if(error.response.status===401){
               alert("Wrong Credentials"); 
             }
             else if(error.response.status===403){
               alert("Unaccessible"); 
             }
             else if(error.response.status===404){
               alert("Page Not Found"); 
             }
             
             });
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="logo"/>
          </div>
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type = "email"
                placeholder="Email"
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                name = "email"
                value = {this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type = "password"
                placeholder="Password"
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                name = "password"
                value = {this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <input type="button" class="btn" onClick={this.signUp} value = "Log In"/>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);