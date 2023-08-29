import React from 'react';
import './featurescomp.scss';
import Lottie from 'lottie-react';
import animationData from '../../../../assets/animation_llvyjxhq.json';

const FeaturesComp = () => {
  return (
    <div className='features'>
      <div className="featuresContainer">
        <div className="featuresLeft">
            <div className="animation">
                <div style={{display:'flex', flexDirection:'column'}}>
                <div className='normalHeading'>One Stop Solution For</div>
                <div className='coloredHeading' style={{color :'darkblue'}}>Medical Procurement & Logistics</div>

                </div>
                <p>Acute need of HealthTech solutions to optimise procurement, streamline availability of medical supplies & equipment, and reduce inventory costs</p>
                <Lottie style={{ width : 600 , height:400 ,}} animationData={animationData}/>

            </div>
        </div>
        <div className="featuresRight">

        </div>
      </div>
    </div>
  )
}

export default FeaturesComp
