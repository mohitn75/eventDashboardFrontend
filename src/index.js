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
import delEvent from './components/creator/delEvent';
import logOut from './components/logout';
import ClistEvents from './components/creator/listEvents';
import viewEvents from './components/creator/viewEvents';
import listEvents from './components/main/listEvents';
import updateEvent from './components/creator/updateEvent';



const stack= (
     
   < BrowserRouter >
      <div>
        
         <Route exact path="/" component={App} />
         <Route exact path="/dash" component={Dash} />
         <Route path="/calendar" component={Calendar} />
         <Route path="/alerts" component={Alerts} />
         <Route exact path="/creator-dash" component={CDash} />
         <Route path="/creator-calendar" component={CCalendar} />
         <Route path="/creator-alerts" component={CAlerts} />
         <Route path="/newevent" component={newEvent} />
         <Route path="/newgroup" component={newGroup} />
         <Route path="/delevent" component={delEvent} />
         <Route path="/logout" component={logOut} />
         <Route path="/events" component={listEvents} />
         <Route path="/creator-events" component={ClistEvents} />
         <Route path="/updateevent" component={updateEvent} />
         <Route path="/view-events" component={viewEvents} />

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
//
//
serviceWorker.unregister();
