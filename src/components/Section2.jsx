import React from 'react';
import wall4 from '../images/wall4.jpeg';
import wall5 from '../images/wall5.jpeg';
import wall6 from '../images/wall6.jpeg';

const Section2 = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-5 wall4">
                        <h2>EXPERIENCE THE<br /><span className="sp">TRADITION</span></h2>
                        <button className="bt">BOOK NOW</button>
                    </div>
                    <div className="col-md-7 wall5">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={wall4} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={wall5} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={wall6} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section2;