import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import Alerts from './components/main/Alerts';
import Dash from './components/main/Dash';
import CDash from './components/creator/Dash';
import CAlerts from './components/creator/Alerts';
import newEvent from './components/creator/newEvent';
import newGroup from './components/creator/newGroup';
import Calendar from './components/main/Calendar';
import CCalendar from './components/creator/Calendar';


const stack= (
     
   < BrowserRouter >
      <div>
        
         <Route exact path="/" component={App} />
         <Route exact path="/dash" component={Dash} />
         <Route path="/calendar" component={Calendar} />
         <Route path="/alerts" component={Alerts} />
         <Route exact path="/cdash" component={CDash} />
         <Route path="/ccalendar" component={CCalendar} />
         <Route path="/calerts" component={CAlerts} />
         <Route path="/newevent" component={newEvent} />
         <Route path="/newgroup" component={newGroup} />
      </div>
   </ BrowserRouter >
);

ReactDOM.render(
  stack,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
