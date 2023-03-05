
import './style.css';

export default function Rating (props){


    function submitScore(){
        if(props.rating !== "")
           { 
            props.setSubmitFlag(true)
           }
    }

    function buttonClicked(element, value){
        props.setRating(value)
        element.className = "highest"
        if(value-1 !== 0){
            document.getElementById(value-1).className = "secondHighest"
        }
        
    }

    return (
        <div className='rating-card'>
            <div className='star-logo'>
                <img alt='star-logo' src={process.env.PUBLIC_URL + '/Star_1.png'}/>
            </div>
            <div className='text-info'>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className='rate-box'>
                <button className="score" id='1' onClick={e=>buttonClicked(e.target,e.target.id)}>1</button>
                <button className="score" id='2' onClick={e=>buttonClicked(e.target,e.target.id)}>2</button>
                <button className="score" id='3' onClick={e=>buttonClicked(e.target,e.target.id)}>3</button>
                <button className="score" id='4' onClick={e=>buttonClicked(e.target,e.target.id)}>4</button>
                <button className="score" id='5' onClick={e=>buttonClicked(e.target,e.target.id)}>5</button>
            </div>
            <button className='submit' id='submit' onClick={submitScore}>SUBMIT</button>
        </div>
    )
}