import React from 'react';
import './home.scss';
import SearchFilter from '../SearchFilter/SearchFilter';
import Categories from '../../common/Categories/Categories';
import CustomCategoryView from '../../common/CustomCategoryView/CustomCategoryView';
import { customCatView } from '../../../data/CustomCategoryViewData';
import WhyArunoday from '../WhyArunoday/WhyArunoday';
import Footer from '../../common/Footer/Footer';
import FeaturedCategory from '../../common/FeaturedCategory/FeaturedCategory';

const Home = () => {
  return (
    <div className='home'>
    <SearchFilter/>
    <Categories/>
    <FeaturedCategory/>
    <CustomCategoryView customCatView={customCatView}/>
    <WhyArunoday/>
    <CustomCategoryView customCatView={customCatView}/>
    </div>
  )
}

export default Home