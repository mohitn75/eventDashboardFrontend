import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css'
import axios from 'axios';
import NavBar from './NavBar';

class newGroup extends React.Component {
  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role !== 'CREATOR')
      this.props.history.push('/') 
  }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    }
    state = {
    group:"",
    mails:"",

    };
  
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  submit= () =>{
    var data = JSON.stringify(
  {
    "title":this.state.title,
  "email":this.state.email,
"description":this.state.desc,
"type":this.state.type,
"startDateTime":this.state.st_date+'T'+this.state.st_time,
"endDateTime":this.state.en_date+'T'+this.state.en_time,
});

var config = {
  method: 'post',
  url: 'api/addEvent',
  headers: { 
    'Authorization': 'Basic ZGlwYW5zaGk2MDBAZ21haWwuY29tOmRk', 
    'Content-Type': 'application/json'
  },
  data : data
};
    axios.post("/api/addGroup",
    {
      'groupname':this.state.group,
      'groupusers':this.state.mails
    }).then( (response) => {
   alert("error.data");
})
    .catch((error) =>{
      alert(error.data);
    })
    
}
 

  fetch = () =>{
  //var axios = require('axios');
  var data = JSON.stringify(
  {
    "groupname":this.state.group,
  "groupusers":this.state.mails
});

var config = {
  method: 'post',
  url: 'api/addGroup',
  headers: { 
    'Authorization': 'Basic ZGlwYW5zaGk2MDBAZ21haWwuY29tOmRk', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

  }
  render(){
    //this.fetch()
      
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
                          name="group"
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
                    <input type="email" class="form-control" multiple 
                    name = "mails" 
                    onChange={this.handleChange}/>
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
                  <p class="card-description">

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