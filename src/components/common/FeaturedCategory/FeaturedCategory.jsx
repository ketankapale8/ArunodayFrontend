import React from 'react';
import './featured.scss'
import { FeaturedCatList1, FeaturedCatList2 } from '../../../data/FeaturedCategoryData.js';

const FeaturedCategory = () => {
  return (
    <div className='featuredCategory'>
        <div className="CategoryTitle">
            Featured Products
        </div>
                
            <div className="featuredCatContainer">
        {FeaturedCatList1.map(item=>{
            return (
                <>
                <div className="featuredBox">
                    <img src={item.img} alt="" />
                    <div className="boxheading">
                        {item.title}
                    </div>

                    <button>Get Quotes</button>

                </div>
                </>
            )
        })}
            </div>

            <div className="featuredCatContainer">
        {FeaturedCatList2.map(item=>{
            return (
                <>
                <div className="featuredBox">
                    <img src={item.img} alt="" />
                    <div className="boxHeading">
                        {item.title}
                    </div>

                    <button>Get Quotes</button>

                </div>
                </>
            )
        })}
            </div>
                
    </div>
  )
}

export default FeaturedCategory