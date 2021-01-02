import React from 'react';
import logo from '../images/logo.png';
import logo2 from '../images/logo2.png';
// import { NavLink } from 'react-router-dom';

const Section1 = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <img src={logo} className="logo" alt="jj" />
                        <p className="border1"></p>
                    </div>
                </div>
                <h1 className="port">Portside <br />wharp</h1>
            </div>
            <div className="container-fluid wall2">
                <div className="row">
                    <div className="col-md-8 mx-auto p">
                        <p>Sono has now reopened for in store dining. Please see the Contact section below for our updated opening hours.<br />We will be offering a reduced menu, please find menu below.<br />
                    Please note conditions apply for dine in bookings.<br />We will continue to offer the Sono to Go take away menu, if you wish to enjoy Sono at home.</p>
                    </div>
                </div>
            </div>
            <div className="container wall3">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <h1>EXPERIENCE THE TRUE TASTE OF TRADITION</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row logo2 mx-auto">
                            <div className="col-md-6 logo2_1">
                                <img src={logo2} alt="logo" />
                                <a className="nav-link" to="/program">LUNCH AND DINNER MENU</a>
                            </div>
                            <div className="col-md-6">
                                <img src={logo2} alt="logo" />
                                <a className="nav-link" to="/program">BEVERGES MENU</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section1;