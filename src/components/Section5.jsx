import React from 'react';
import wall15 from '../images/wall15.jpeg';
import wall16 from '../images/wall16.jpeg';
import wall17 from '../images/wall17.jpeg';


const Section5 = () => {
    return(
        <>
        <div className="container-fluid">
                <div className="row flex-column-reverse flex-lg-row">
                    <div className="col-md-7 wall6">
                        <div id="carouselExampleIndicators3" class="carousel slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={wall15} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={wall16} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={wall17} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5 wall7">
                    <h2>SONO<br /><span className="sp2">LOYALTY PROGRAM</span></h2>
                        <button className="bt">PROGRAM BENEFITS</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section5;