import React from 'react';
import './featurescomp.scss';
import Lottie from 'lottie-react';
import animationData from '../../../../assets/animation_llvyjxhq.json';
import one from '../../../../assets/Features/1.png';
import two from '../../../../assets/Features/2.png';
import three from '../../../../assets/Features/3.png';
import four from '../../../../assets/Features/4.png';
import five from '../../../../assets/Features/5.png';
import six from '../../../../assets/Features/6.png';

const FeaturesComp = () => {

  const featuresContainer = [
    {
      title : "Medical Equipments", 
      icon : two, 
      desc : ""
    }, 
    {
      title : "Vendor Management", 
      icon : one, 
      desc : ""
    }, 
    {
      title : "Access Management", 
      icon : three, 
      desc : ""
    }
  ];
  let featuresContainer1 = [
    {
      title : "Verified Sellers", 
      icon : four, 
      desc : ""
    }, 
    {
      title : "OEM Suppliers", 
      icon :five, 
      desc : ""
    }, 
    {
      title : "Distributed Medical Network", 
      icon : six, 
      desc : ""
    }
  ]
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
                <Lottie style={{ width : 400 , height:400 ,}} animationData={animationData}/>

            </div>
        </div>
        <div className="featuresRight">
          <div className="featureRow">
            {featuresContainer.map(item=>{
              return (
                <>
                <div className="rowContainer">
                <div className="rowBox">
                  <img className='icon' src={item.icon}/>
                  <div className="title">{item.title}</div>
                </div>

                </div>
                
                
                </>
              )
            })}
            </div>
            <div className="featureRow">
            {featuresContainer1.map(item=>{
              return (
                <>
                <div className="rowContainer">
                <div className="rowBox">
                  <img className='icon' src={item.icon}/>
                  <div className="title">{item.title}</div>
                </div>

                </div>
                
                
                </>
              )
            })}
            </div>




          
        </div>
        
      </div>
    </div>
  )
}

export default FeaturesComp
