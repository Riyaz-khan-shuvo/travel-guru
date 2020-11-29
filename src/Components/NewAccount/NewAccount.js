import React from 'react';
import './NewAccount.css'
import Header from '../Header/Header';
import facebook from '../../Images/facebook.png'
import google from '../../Images/google.png'
import { Link } from 'react-router-dom';
const NewAccount = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">

                <div className="login-area">
                    <h3 className="text-left mb-5">Create an account</h3>
                    <div className="input-area">
                        <input type="text" name="fname" id="fname" placeholder="First Name" /> <br />
                        <input type="text" name="lname" id="lname" placeholder="Last Name" /> <br />
                        <input type="email" name="email" id="email" placeholder="User Name Or Email" /> <br />
                        <input type="password" name="pass" placeholder="Password" id="" />
                        <input type="password" name="conpass" placeholder="Confirm Password" id="" />
                        <button className="login-btn">Create an account</button>
                    </div>
                    <label >Already have an account? </label> <Link to="/login"> <a href="#">Login</a></Link>
                </div>
                <div className="or-area mt-3">
                    <div className="row">
                        <div className="col-md-5">
                            <hr />
                        </div>
                        <div className="col-md-2">
                            <p>or</p>
                        </div>
                        <div className="col-md-5">
                            <hr />
                        </div>
                    </div>
                    <a href="#">
                        <div className="row social-login">
                            <div className="col-md-2">
                                <img src={facebook} alt="" />
                            </div>
                            <div className="col-md-10">
                                <h5>Continue with Facebook</h5>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="row social-login">
                            <div className="col-md-2">
                                <img src={google} alt="" />
                            </div>
                            <div className="col-md-10">
                                <h5>Continue with Google</h5>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default NewAccount;