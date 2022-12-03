import React from 'react'
import './style.css';

export default function ThankYou(props){
    return(
        <div className='rating-card'>
            <img id="rating-submitted-img" alt="rating-submitted-img" src={process.env.PUBLIC_URL + '/paid_img_modified.png'}/>
            <div id='rating-display'>
                <p id='text-display'>You selected {props.score} out of 5</p>
            </div>
            <div className='thanks-message'>
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating.<br/> If you ever need more support, don't hesitate to 
                   <br/> get in touch!</p>
            </div>
        </div>
    )
}