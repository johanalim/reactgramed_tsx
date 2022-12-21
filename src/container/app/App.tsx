import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthServices  from "../services/Auth";
import { User } from "/Sansey/Frontend/reactgramed-tsx/src/model/Model";
import { Login }  from "../pages/Login";
import { Home } from "../pages/Home";
import '../app/App.css'

interface AppState{
  user: User | undefined
}
export default class App extends React.Component<{},AppState>{

  private AuthServices: AuthServices = new AuthServices();
  
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login authService={this.AuthServices} />}/>
        </Routes>
      </BrowserRouter>
    ) 
  }
}
