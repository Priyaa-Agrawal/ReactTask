import React from 'react'
import './App.css';
import UserDetail from './component/UserDetail';
import UserForm  from "./component/UserForm";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
 
  return (

    <Router>
    <div>
    <Breadcrumb>
        <BreadcrumbItem >Priya_Agrawal - React_Task </BreadcrumbItem>
      </Breadcrumb>
      <Switch>
        <Route path="/UserDetail">
          <UserDetail/>
        </Route>
        <Route path="/">
          <UserForm />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
