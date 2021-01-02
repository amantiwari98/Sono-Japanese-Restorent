import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const Section7 = () => {
    return (
        <>
            <div className="container-fluid wall20">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6">
                                <h4> Portside Wharf </h4>
                                <p>Level 1, Portside Wharf, 39 Hercules St<br />Hamilton QLD 4007<br />(opposite Dendy Cinemas)<br />(07) 3268 6655</p>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-2 col-sm-1">
                                        <FacebookIcon fontSize="large" style={{ backgroundColor: '#fcface', borderRadius: '30%', cursor: 'pointer' }} />
                                    </div>
                                    <div className="col-md-2 col-sm-1">
                                        <InstagramIcon fontSize="large" style={{ backgroundColor: '#fcface', borderRadius: '30%', cursor: 'pointer' }} />
                                    </div>
                                    <div className="col-md-2 col-sm-1">
                                        <TwitterIcon fontSize="large" style={{ backgroundColor: '#fcface', borderRadius: '30%', cursor: 'pointer' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section7;