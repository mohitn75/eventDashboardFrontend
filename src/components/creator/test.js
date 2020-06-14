import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css'
import axios from 'axios';
import Table from './Table';
import NavBar from './NavBar';

class test extends React.Component {
data = [
    {
'Title':'HR Connect',	
'Place':'Meet room 1',	
'Time':'13:00 - 13:30',	
'Date':'8 June 2020' ,
'Host':'Head'
},
{
'Title':'Training',	
'Place':'Hall',	
'Time':'13:00 - 13:30',	
'Date':'8 June 2020' ,
'Host':'Head'
}
 ]
 state = {
        current : 'alerts' //this.props.current
        }
    render(){
        return(
            <div class="wrapper ">
                <NavBar current='alerts' />
                <div class=" main-panel jumbotron">
<Table data={this.data}/>
</div>
</div>
        )
    }
}

export default withRouter(test)

