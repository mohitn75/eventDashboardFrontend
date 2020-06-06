import React from 'react';
import { withRouter } from 'react-router-dom';
import './material.css'

function Dash() {
  return (
     <div >
    
  <div class="wrapper ">
    <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
 
      <div class="logo">
          USER NAME
        </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item ">
            <a class="nav-link" href="/dash">
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/calendar">
              <p>Calendar</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/alerts">
              <p>Alerts</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel">
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">I</i>
                  </div>
                  <p class="card-category">Total Events</p>
                  <h3 class="card-title">12
                  </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    View All
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">I</i>
                  </div>
                  <p class="card-category">New Invites</p>
                  <h3 class="card-title">3</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    View
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-danger card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">I</i>
                  </div>
                  <p class="card-category">Pending Action</p>
                  <h3 class="card-title">4</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    View
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-info card-header-icon">
                  <div class="card-icon">
                    <i class="fa fa-twitter">I</i>
                  </div>
                  <p class="card-category">Scheduled Tomorrow</p>
                  <h3 class="card-title">2</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                  View
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="card">
                <div class="card-header card-header-tabs card-header-primary">
                  <div class="nav-tabs-navigation">
                    <div class="nav-tabs-wrapper">
                    
                    <h4 class="card-title">Pending Response</h4>
                    </div>
                  </div>
                </div>
                <div class="card-body ">
                  <div class="tab-content">
                    <div class="tab-pane active" id="profile">
                      <table class="table">
                        <tbody>
                          <tr>
                           
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td class="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                                <i class="material-icons">accept</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                                <i class="material-icons">deny</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            
                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                            <td class="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                                <i class="material-icons">Accept</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                                <i class="material-icons">Deny</i>
                              </button>
                            </td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="card">
                <div class="card-header card-header-warning">
                  <h4 class="card-title">Upcoming Events</h4>
                  <p class="card-category">All events</p>
                </div>
                <div class="card-body table-responsive">
                  <table class="table table-hover">
                    <thead class="text-warning">
                      <th>Title</th>
                      <th>Place</th>
                      <th>Time</th>
                      <th>Date</th>
                      <th>Host</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>HR Connect</td>
                        <td>Meet room 1</td>
                        <td>13:00 - 13:30</td>
                        <td>8 June 2020</td>
                        <td>Head</td>
                        </tr>
                        <tr>
                        <td>Training</td>
                        <td>Hall 1</td>
                        <td>17:00 - 18:00</td>
                        <td>8 June 2020</td>
                        <td>abc</td>
                      </tr>
                    </tbody>
                  </table>
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
export default withRouter(Dash);