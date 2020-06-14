import React from 'react';
import { withRouter } from 'react-router-dom';


class logOut extends React.Component {
  componentWillMount(){
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("user_role");
    this.props.history.push('/') 
  }
  render(){
  return(
      <div></div>
  )
  }
}

export default withRouter(logOut)
