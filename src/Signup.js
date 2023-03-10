import React, { Component } from 'react'
import './LoginStyle.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';

class Signup extends Component {
    render() {
        return (
            <div className="container h-100" style={{marginTop:"100px"}}>
            <div className="row h-100 justify-content-center align-items-center">
                <form className="col-md-9">
                    <div className="AppForm shadow-lg">
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <div className="AppFormLeft">
    
                                    <h1>Login</h1>
                                    <div className="form-group position-relative mb-4">
                                        <input type="text" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" id="username"
                                            placeholder="Username"></input>
                                            <i className="fa fa-user"></i>
                                    </div>
                                    <div className="form-group position-relative mb-4">
                                        <input type="email" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" id="username"
                                            placeholder="Email"></input>
                                       <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </div>
                                    <div className="form-group position-relative mb-4">
                                        <input type="password" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" id="password"
                                            placeholder="Password"></input>
                                            <i className="fa fa-key"></i>
    
                                    </div>
                                    <div className="row  mt-4 mb-4">
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                    </div>
    
                                    <button className="btn btn-success btn-block shadow border-0 py-2 text-uppercase ">
                                        Login
                                    </button>
    
                                    <p className="text-center mt-5">
                                       Already an user?
                                        <span>
                                            <NavLink to="/Login">Sign in</NavLink>
                                        </span>
    
                                    </p>
    
                                </div>
    
                            </div>
                            <div className="col-md-6">
                                <div className="AppFormRight position-relative d-flex justify-content-center flex-column align-items-center text-center p-5 text-white">
                                    <h2 className="position-relative px-4 pb-3 mb-4">Welcome</h2>
                                    <p>Welcome to the SignUp page of WeatherToday. I Hope our contact will last for long time!</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </form>
            </div>
        </div>
        )
    }
}

export default Signup
