import React from "react";
import loginImg from "../../login.jpg";
import { withRouter } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2= this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }
  state = {
    email : "",
    password : "",
    contact : ""
  }
  handleChange1(event) {
    this.setState({email: event.target.value});
  }
  handleChange2(event) {
    this.setState({password: event.target.value});
  }
  handleChange3(event) {
    this.setState({contact: event.target.value});
  }
  register = () => {
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.contact);

    /*const url = "localhost:8080/events";
    const res = fetch(url);
    const data = res.json();
    console.log(data);
    */
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
              <label htmlFor="contact">Contact Number</label>
              <input type = "text"
                placeholder="contact"
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                //value = {this.state.email}
                onChange={this.handleChange3}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type = "text"
                placeholder="password"
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                //value = {this.state.email}
                onChange={this.handleChange2}
              />
            </div>
          </div>
        </div>
        <div className="footer">
        <input type="button" class="btn btn-primary" onClick={this.register} value = "Register"/>
        </div>
      </div>
    );
  }
}
export default withRouter(Register);