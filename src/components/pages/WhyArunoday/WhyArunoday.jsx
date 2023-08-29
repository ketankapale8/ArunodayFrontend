import React from 'react';
import './why.scss'
import AnimatedNumbers from "react-animated-numbers";
import icon1 from '../../../assets/whyIcons/bid.png'
import icon2 from '../../../assets/whyIcons/icon2.png'
import icon3 from '../../../assets/whyIcons/icon3.png'
import icon4 from '../../../assets/whyIcons/icon4.png'
import icon5 from '../../../assets/whyIcons/icon5.png'


const WhyArunoday = () => {
    const featuresContainer = [
        {
            title : "10000",
            plusIcon : "+",
            desc : "Products Listed", 
            icon : icon2
        }, 
        {
            title : "1000",
            plusIcon : "+",
            desc : "Verified Suppliers", 
            icon : icon3
        }, 
        {
            title : "5000",
            plusIcon : "+",
            desc : "Daily Transactions", 
            icon : icon4
        },
        {
            title : "500",
            plusIcon : "+",
            desc : "Daily Auctions", 
            icon : icon1
        }, 
        {
            title : "100",
            plusIcon : "%",
            desc : "Authentic & Secure Portal", 
            icon : icon5
        }
    ]
  return (
    <div className='why'>
        <div className="whyContainer">
            <div className="title">
                Why Arunoday
            </div>

            <div className="featuresContainer">
                {featuresContainer.map(item=>{
                    return (
                        <>
                        <div className="featuredItem">
                            <div className="plusContainer">
                            <AnimatedNumbers
            animateToNumber={`${item.title}`}
            fontStyle={{ fontSize: 35, paddingLeft:14 }}
            locale="en-US"
            configs={[
            { mass: 1, tension: 220, friction: 100 },
            { mass: 1, tension: 180, friction: 130 },
            { mass: 1, tension: 280, friction: 90 },
            { mass: 1, tension: 180, friction: 135 },
            { mass: 1, tension: 260, friction: 100 },
            { mass: 1, tension: 210, friction: 180 },
            ]}
                            ></AnimatedNumbers>
                            <p className='plusicon' style={{paddingBottom:'45px'}}>{item.plusIcon}</p>
                            

                            </div>

                            <div className="iconPack">
                                <img src={item.icon} className='icons'>
                                    
                                
                                </img>
                               <p className='iconDesc'>
                               {item.desc}
                                </p> 
                            </div>
                        </div>
                        
                        </>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default WhyArunoday