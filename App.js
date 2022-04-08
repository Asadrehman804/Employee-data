import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home } />
          <Route exact path="/users/add" component={AddUser } />
          <Route exact path="/users/edit/:id" component={EditUser} />
          </Switch>
       
      </div>
    </BrowserRouter> 

  );
}

export default App;
