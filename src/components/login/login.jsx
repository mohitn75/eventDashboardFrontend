import React from "react";
import loginImg from "../../login.jpg";
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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

     axios.get("/login",          
     { headers: { 
       "X-Requested-With" : "XMLHttpRequest",
       authorization: 'Basic ' + window.btoa(this.state.email + ":" + this.state.password) } }
             )
             .then((response) => {
                console.log(response.data);
                this.props.history.push('/cdash') 
                /*axios.get("/api/userByEmail"+this.state.email)
                  .then((response) =>{

                  },
                  (error)=>{}
                  
                  )
                
                */
                }, (error) => 
             { 
             if(error.response.status===401){
               alert("wrong cred"); 
             }
             else if(error.response.status===403){
               alert("unaccessible"); 
             }
             else if(error.response.status===404){
               alert("page not found"); 
             }
             
             });

///ers=401 wrong cred,,, 403:not accessible,,404
         //.then(function (response) {
           // let arr = response.data;
            //console.log('hel');
            //console.log(response.data);
            //if(arr==='success')
              /*axios.get("http://localhost:8080/api/user../",{
              params: {
              email:this.state.email
              }}
              )
                  .then(function (response) {
                    let role=response.data[0]['role'];
                    if(role === 'user')
                    this.props.history.push('/dash') 
                    else if(role === 'creator')
                    this.props.history.push('/cdash') 

                  })*/
           // }
            //)
          
          //.then(response => console.log(response.data));
    //axios.post("http://localhost:8080/api/addEvent",{'title':'meet '});
    //console.log(this.state.email);
    //console.log(this.state.password);
    /*const url = "localhost:8080/events";
    const res = fetch(url);
    const data = res.json();
    console.log(data);
    */
    //this.setState

    //this.props.history.push('/cdash') 
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
              <input type = "text"
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
              <input type = "text"
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
          <input type="button" class="btn btn-primary" onClick={this.signUp} value = "Log In"/>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

