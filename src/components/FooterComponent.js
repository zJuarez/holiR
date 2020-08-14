import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone,  faFax, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {  faFacebook, faGooglePlus, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <FontAwesomeIcon icon={faPhone}/>: +852 1234 5678<br />
		              <FontAwesomeIcon icon={faFax}/>: +852 8765 4321<br />
		              <FontAwesomeIcon icon={faEnvelope}/>: <a href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center socials">
                    <a href="http://google.com/+" target="_blank"> <FontAwesomeIcon icon={faGooglePlus}/> </a>
                    <a href="http://facebook.com" target="_blank"> <FontAwesomeIcon icon={faFacebook}/> </a>
                    <a href="http://twitter.com" target="_blank"> <FontAwesomeIcon icon={faTwitter}/> </a>
                    <a href="http://youtube.com" target="_blank"> <FontAwesomeIcon icon={faYoutube}/> </a>
                    <a href="http://linkedin.com" target="_blank"> <FontAwesomeIcon icon={faLinkedin}/> </a>

                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;