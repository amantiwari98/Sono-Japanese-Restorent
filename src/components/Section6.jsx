import React from 'react';


const Section6 = () => {
    return(
        <>
         <div className="container-fluid mt-4" style={{paddingLeft:'25px', paddingRight:'25px',}}>
                <div className="row">
                    <div className="col-md-6 wall18">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <h3>Sono Restorent Portside</h3>
                                <p>Level 1, Portside Wharf<br/>39 Hercules St, Hamilton QLD<br/>(opposite Dendy Cinemas)<br/>(07) 3268 6655 contact@sonorestaurant.com.au</p>
                            </div>
                            <div className="col-md-10 mx-auto">
                                <h3>Trading Hours</h3>
                                <p>Our current Stage 3 opening hours for Dine In & Take Away are:</p>
                                <p>DINNER <br/>Tuesday – Thursday<br/> Bookings from 5:30pm, kitchen closes 9:30pm</p>
                                <p>Friday & Saturday <br/>Bookings from 5:30pm, kitchen closes 10pm</p>
                                <p>Sunday <br/>Bookings from 5:30pm, kitchen closes 9:30pm</p>
                                <p>LUNCH <br/>Friday – Sunday <br/>Bookings from 12pm, kitchen closes 2:30pm</p>
                                <h3>Parking</h3>
                                <p>Visitors to Sono Japanese Restaurant can enjoy the shared basement parking of Portside Wharf. Please be sure t  bring your parking ticket to the restaurant for 3 hours of parking validation. Please note Friday an  Saturday evenings can be very busy at the precinct so we suggest allowing additional time to find parking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wall18">
                            <h2 className="mb-3" style={{color:'black'}}>ENQUIRY FORM</h2>
                            <p>Please complete the form below for all enquiries regarding feedback, media, and general questions. If you wish to join the team at Sono, please forward your resume to contact@sonorestaurant.com.au, advising the position you are seeking. </p>
                            <div className="row">
                                <div className="col-md-3">
                                    <p>Name</p>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" placeholder="Enter Your Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <p>Phone</p>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" placeholder="Enter Your Phone" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <p>Email</p>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" placeholder="Enter Your Email Id" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <p>Message</p>
                                </div>
                                <div className="col-md-9">
                                    <textarea rows="5" placeholder="Type your Message" />
                                </div>
                            </div>
                            <button>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section6;