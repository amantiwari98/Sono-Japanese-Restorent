import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Menu</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Events and private dining</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">gifts cards</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">contacts</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;