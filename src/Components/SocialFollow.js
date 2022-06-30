import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
   }   from '@fortawesome/free-brands-svg-icons'
   
   function SocialFollow() {
    return (
        <div>
            <h3 className='social-title'>@EZFitnessTracker</h3>
            <div className='social-container'>
           
            <a
                href=''
                className='youtube social'
            >
                <FontAwesomeIcon icon={faYoutube} size="3x"/>
            </a>
            <a
                href=''
                className='facebook social'
            >
                <FontAwesomeIcon icon={faFacebook} size="3x"/>
            </a>
            <a
                href=''
                className='Twitter social'
            >
                <FontAwesomeIcon icon={faTwitter} size="3x"/>
            </a>
            <a
                href=''
                className='instgram social'
            >
                <FontAwesomeIcon icon={faInstagram} size="3x"/>
            </a>

            </div>
        </div>
        
    )
}







export default SocialFollow