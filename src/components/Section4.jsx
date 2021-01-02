import React from 'react';
import wall11 from '../images/wall11.jpeg';
import wall12 from '../images/wall12.jpeg';
import wall13 from '../images/wall13.jpeg';


const Section4 = () => {
    return(
        <>
         <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 wall8">
                        <h2>CREATE MEMORIES<br /><span className="sp3">AT SONO</span></h2>
                        <button className="bt">ENQUIRE NOW</button>
                    </div>
                    <div className="col-md-7 wall5">
                        <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={wall11} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={wall12} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={wall13} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4;