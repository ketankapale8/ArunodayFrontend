import React from 'react';
import './marketingpage.scss';
import FeaturesComp from '../../common/ForMarketingPage/FeaturesComp/FeaturesComp';
import DescFeatures from '../../common/ForMarketingPage/DescriptiveFeatures/DescFeatures';
import VideoPlayer from '../../common/ForMarketingPage/VideoPlayer/VideoPlayer';
import FeaturedBrands from '../../common/ForMarketingPage/FeaturedBrands/FeaturedBrands';
import WhyArunoday from '../WhyArunoday/WhyArunoday';
import GiantName from '../../common/ForMarketingPage/GiantNameComponent/GiantName';

const MarketingPage = () => {
  return (
    <div>
      <VideoPlayer/>
      <FeaturesComp/>
      <DescFeatures/>
      <WhyArunoday/>
      <div style={{paddingTop:'30px', paddingBottom:'460px' ,}}>
        <FeaturedBrands/>

      </div>
      <GiantName/>
    </div>
  )
}

export default MarketingPage
