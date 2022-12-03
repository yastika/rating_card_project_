// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Rating from './rating.js'
import ThankYou from './thankyou.js'

export default function App() {

  let [rating, setRating] = useState("")
  let [isSubmitted, setIsSubmitted] = useState(false)

  return (

    <div className="App">
      {!isSubmitted && <Rating 
      submitFlag = {isSubmitted}
      setSubmitFlag = {setIsSubmitted}
      rating = {rating}
      setRating = {setRating}/>}
     { isSubmitted && <ThankYou score = {rating}/>}
    </div>
  );
}
