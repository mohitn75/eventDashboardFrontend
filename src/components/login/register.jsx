import React from "react";
import loginImg from "../../login.jpg";
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Register extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2= this.handleChange2.bind(this);
    this.handleChange3= this.handleChange3.bind(this);
    this.handleChange4= this.handleChange4.bind(this);
    this.handleChange5= this.handleChange5.bind(this);

    this.state = {
        email : "",
        fname : "",
        lname : "",
        password : "",
        cpassword : ""
    };
  }
  handleChange1(event) {
    this.setState({email: event.target.value});
  }
  handleChange2(event) {
    this.setState({password: event.target.value});
  }
  handleChange3(event) {
    this.setState({fname: event.target.value});
  }
  handleChange4(event) {
    this.setState({lname: event.target.value});
  }
  handleChange5(event) {
    this.setState({cpassword: event.target.value});
  }
  componentDidMount(){
    this.assign();
  }
  assign = () => {
    var config = {
    method: 'post',
    url: 'http://localhost:8080/api/addUser' ,
    headers: { 
       "X-Requested-With" : "XMLHttpRequest",
       'Authorization': 'Basic ' + window.btoa(this.state.email + ":" + this.state.password),
        'Content-Type': 'application/json' } 
    };
    axios(config)
    .then( (response) => {
      
    })
    .catch((error) =>{
      console.log(error);
    });
    }
  register = () => {
    console.log(this.state.email);
    console.log(this.state.password);
    if(this.state.password !== this.state.cpassword){
      alert('Passwords do not match');
      window.location.reload(false);

    }
    var data = JSON.stringify(
    {
    "email":this.state.email,
    "firstName":this.state.fname,
    "lastName":this.state.lname,
    "password":this.state.password
    });
    var config = {
    method: 'post',
    url: 'http://localhost:8080/api/addUser',
    headers: { 
    'Content-Type': 'application/json'
    },
    data : data  
    };


    axios(config)
    .then( (response) => {
      window.location.reload(false);
    })
    .catch((error) =>{
      console.log(error);
    });
    /*const url = "localhost:8080/events";
    const res = fetch(url);
    const data = res.json();
    console.log(data);
    */
    // 
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
                //value = {this.state.email}
                onChange={this.handleChange1}
              />
            </div>
            <div className="form-group">
              <label htmlFor="text">First Name</label>
              <input type = "text"
                placeholder="First Name"
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                //value = {this.state.email}
                onChange={this.handleChange3}
              />
            </div>
          <div className="form-group">
              <label htmlFor="text">Last Name</label>
              <input type = "text"
                placeholder="Last Name  "
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                //value = {this.state.email}
                onChange={this.handleChange4}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type = "password"
                placeholder="password"
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                //value = {this.state.email}
                onChange={this.handleChange2}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input type = "password"
                placeholder="password"
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                //value = {this.state.email}
                onChange={this.handleChange5}
              />
            </div>
          </div>
        </div>
        <div className="footer">
        <input type="button" class="btn" onClick={this.register} value = "Register"/>
        </div>
      </div>
    );
  }
}
export default withRouter(Register);