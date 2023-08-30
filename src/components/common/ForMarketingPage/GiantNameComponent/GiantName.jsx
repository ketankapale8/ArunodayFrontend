import React from 'react';
import './giant.scss'
import { Link } from 'react-router-dom';

const GiantName = () => {
  return (
    <div className="giantNameContainer">
        <div className="descTitle">
                <p>
                    <strong  style={{ fontSize:'3.3rem'}}>
                    Transforming</strong> <strong style={{color:'darkblue' , fontSize:'3.3rem'}}>Healthcare</strong> 
                </p>
    <div className="text-container">
            <h1>Arunodaya.</h1>
     </div>
            </div>

        <div className="buttonContainer">
            <div className="buttons">
                Contact Us
            </div>
            <Link to='/shop' style={{color:'inherit', textDecoration:'none'}}>
                <div className="buttons" style={{backgroundColor:'white' , color:'#2A4689'}}>
                    Join Store
                </div>
            
            </Link>

        </div>



    </div>
  )
}

export default GiantName