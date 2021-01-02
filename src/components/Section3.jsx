import React from 'react';
import wall7 from '../images/wall7.jpeg';
import wall8 from '../images/wall8.jpeg';
import wall9 from '../images/wall9.jpeg';


const Section3 = () => {
    return(
        <>
         <div className="container-fluid">
                <div className="row flex-column-reverse flex-lg-row">
                    <div className="col-md-7 col-md-pull-7 wall6">
                        <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={wall7} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={wall8} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={wall9} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5 col-md-push-5 wall7">
                    <h2>EXPERIENCE THE<br /><span className="sp2">EXCITEMENT</span></h2>
                        <button className="bt">CURENTLY CLOSED</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section3;