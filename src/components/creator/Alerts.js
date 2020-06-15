import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css';
import NavBar from './NavBar';
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import Table from '../Table';

class CAlerts extends React.Component {
  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role !== 'CREATOR')
      this.props.history.push('/') 
    store.removeNotification(1)
  }


  state ={
    alertData:null,
    remData:null 
  }

   async componentDidMount() {
    var user_id = sessionStorage.getItem("user_id");
  try {
        setInterval(async () => {
            await axios.get('http://localhost:8080/api/alertsNewEvent/'+user_id)
        .then( (response) => {
          if(JSON.stringify(response.data.length)!==sessionStorage.getItem("lenAl"))
              {
              //sessionStorage.setItem("lenAl",JSON.stringify(response.data))
              this.setState({alertData:response.data});

              }
          })
        .catch((error) =>{
        console.log(error);
        });
            }, 3000);
    } 
    catch(e){
            console.log(e);
    }

    try {
        setInterval(async () => {
            await axios.get('http://localhost:8080/api/alertsEventIn15Min/'+user_id)
        .then( (response) => {
          
          if(JSON.stringify(response.data.length)!==sessionStorage.getItem("lenRem"))
              {
              //sessionStorage.setItem("lenRem", JSON.stringify(response.data))
              //alert(response.data.length)
              this.setState({remData:response.data});
              }
          })
        .catch((error) =>{
        console.log(error);
        });
            }, 3000);
    } 
    catch(e){
            console.log(e);
    }


  }

 
  

  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <NavBar current='creator-alerts'/>
   <div class="main-panel">
   <div class="content">
  <div class="container-fluid">
      <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="card">
                <div class="card-header  card-header-primary">
                    <h4 class="card-title">New Events</h4>
                    </div>
                
                <div class="card-body table-responsive">
                  {this.state.alertData===null ? null :
              <ul class="list-group " >
                {this.state.alertData.map(listitem => (
                    <li className="list-group-item" style={{borderBottom: '1px solid lightgrey'}}>
                    
                      {listitem['title']}
                      <p>{listitem['description']}</p>
                      
                    </li>
                  ))}
              </ul>
              }
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="card">
                <div class="card-header card-header-warning">
                  <h4 class="card-title">Reminders</h4>
                </div>
                <div class="card-body">
                {this.state.remData===null ? null :
                <Table data={this.state.remData} />
                /*<ul class="list-group" >
                {this.state.remData.map(listitem => (
                    <li className="list-group-item" style={{borderBottom: '1px solid lightgrey'}}>
                    
                      {listitem['title']}
                      <p>{listitem['description']}</p>
                      
                    </li>
                  ))}
                </ul>*/
                }
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
export default withRouter(CAlerts);

/* {this.state.alertData===null ? null :
      <ul class="nav" >
        {this.state.alertData.map(listitem => (
            <li className="nav-item">
            
              {listitem['title']}
              <p>{listitem['description']}</p>
              
            </li>
          ))}
      </ul>
      }*/