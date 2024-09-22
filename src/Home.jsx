import './Home.css'
import React from "react";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1> Welcome to my Portfolio </h1>
                <p> + Description of yourself </p>
                <p> + Your Interests </p>
                <p> + Hobbies  </p>
            </div>

            <div className='home-content'>
                <img className="profile-image" src="./img/francesco-tommasini-JINPheIkUek-unsplash.jpg" alt="Description of the image" />
            </div>
            <div className='buttons-container'> 
                <button className='resume-button'> Resume</button>
                <button className='contact-button'> Contact </button>    
            </div>
        </div>
    )
}
export default Home