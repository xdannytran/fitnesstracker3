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
        <div className='social-container'>
            <h3 className='social-title'>@EZFitnessTracker</h3>
            <a
                href=''
                className='youtube social'
            >
                <FontAwesomeIcon icon={faYoutube} size="2x"/>
            </a>
            <a
                href=''
                className='facebook social'
            >
                <FontAwesomeIcon icon={faFacebook} size="2x"/>
            </a>
            <a
                href=''
                className='Twitter social'
            >
                <FontAwesomeIcon icon={faTwitter} size="2x"/>
            </a>
            <a
                href=''
                className='instgram social'
            >
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>

        </div>
    )
}







export default SocialFollow