import React from 'react';
import logo from './logo.svg';
import myprofile from './myprofileicon.png';
import expert from './experticon.png';
import job from './myjob.svg';
import './App.css';
import './Search.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div class="container-fluid">
            <form class="search-form">
                <div class="form-group has-feedback">
            		<label for="search" class="sr-only">Search</label>
            		<input type="text" class="form-control" name="search" id="search" placeholder="search"/>
              		<span class="glyphicon glyphicon-search form-control-feedback"></span>
              	
                </div>
            </form>
      </div>
    
      <div class="container">
        <form>
          <table>
            <tr>
              <th><a href={"https://docs.google.com/forms/d/e/1FAIpQLSeB-BZIcPzvqY4qV2girsLJ1FKpWKn3dlbZ3YZHPhbIQei04w/viewform"} alt="myprofileicon" ><img src={myprofile}></img></a></th>
              <th><a href={"https://www.google.com"}><img src={expert} alt="experticon"></img></a></th>
              <th><a href={"https://www.google.com"}><img src={job} alt="jobicon" ></img></a></th>
            </tr>
            <tr>
              <td><a href={"https://docs.google.com/forms/d/e/1FAIpQLSeB-BZIcPzvqY4qV2girsLJ1FKpWKn3dlbZ3YZHPhbIQei04w/viewform"}>MY PROFILE</a></td>
              <td><a href={"https://www.google.com"}>EXPERTS</a></td>
              <td><a href={"https://www.google.com"}>MY JOBS</a></td>
            </tr>
          </table>
        </form>
      </div>
      
    </div>
    
   
    
  );
}

export default App;
