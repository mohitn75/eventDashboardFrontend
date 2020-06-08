import React from "react";
import loginImg from "../../login.jpg";
import { withRouter } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2= this.handleChange2.bind(this);
  }

  state = {
    email : "",
    password : "",
    role : ""
  }
  handleChange1(event) {
    this.setState({email: event.target.value});
  }
  handleChange2(event) {
    this.setState({password: event.target.value});
  }
   signUp = () => {
    console.log(this.state.email);
    console.log(this.state.password);
    /*const url = "localhost:8080/events";
    const res = fetch(url);
    const data = res.json();
    console.log(data);
    */
    //this.setState
    this.props.history.push('/dash') 
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
              <label htmlFor="password">Password</label>
              <input type = "text"
                placeholder="Password"
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                //value = {this.state.password}
                onChange={this.handleChange2}
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

