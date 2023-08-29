import React from 'react';
import './customcatview.scss';
import { Link, useNavigate } from 'react-router-dom';
// import { customCatView } from '../../../data/CustomCategoryViewData';

const CustomCategoryView = ({customCatView}) => {
    const navigation = useNavigate();
  return (
    <div className='customcatview'>

        <div className="catviewContainer">
            {customCatView.map(item=>{
                return (
                    <>
            <div className="title">
                {item.title}
            </div>

            <div className="viewContainer">

            <div className="leftContainer">
                <img src={item.img} alt="" className='bgImg'/>
            </div>
            <div className="rightContainer">
                <div className="top">
                    
                    <div className="box">
                        <div className="left">
                            <img className='subcatimg' src={item.categories1.categoriesImg}/>
                        </div>

                        <div className="right">
                            <h4>{item.categories1.categoriesTitle}</h4>
                            {item.categories1.subcategories.map(item=>{
                                return (
                                <div className="listView">
                                        <p
                                            onClick={()=>navigation("/productlists", {state : {itemList: item.itemList ,itemList1: item.itemList1 , heading : item.heading}})}
                                        >{item.heading}</p>
                                        

                                </div>

                                )
                            })}

                        </div>
                    </div>
                    <div className="box">
                        <div className="left">
                            <img className='subcatimg' src={item.categories1.categoriesImg}/>
                        </div>

                        <div className="right">
                            <h4>{item.categories2.categoriesTitle}</h4>
                            {item.categories2.subcategories.map(item=>{
                                return (
                                <div className="listView">
                                        <p
                                            onClick={()=>navigation("/productlists", {state : {itemList: item.itemList ,itemList1: item.itemList1 , heading : item.heading}})}

                                        >{item.heading}</p>
                                </div>

                                )
                            })}

                        </div>
                    </div>
                    <div className="box">
                        <div className="left">
                            <img className='subcatimg' src={item.categories1.categoriesImg}/>
                        </div>

                        <div className="right">
                            <h4>{item.categories3.categoriesTitle}</h4>
                            {item.categories3.subcategories.map(item=>{
                                return (
                                <div className="listView">
                                    <p
                                            onClick={()=>navigation("/productlists", {state : {itemList: item.itemList ,itemList1: item.itemList1 , heading : item.heading}})}

                                        >{item.heading}</p>
                                </div>

                                )
                            })}

                        </div>
                    </div>
                    
                </div>

                <div className="bottom">
                <div className="box">
                        <div className="left">
                            <img className='subcatimg' src={item.categories1.categoriesImg}/>
                        </div>

                        <div className="right">
                            <h4>{item.categories4.categoriesTitle}</h4>
                            {item.categories4.subcategories.map(item=>{
                                return (
                                <div className="listView">
                                    <p
                                            onClick={()=>navigation("/productlists", {state : {itemList: item.itemList ,itemList1: item.itemList1 , heading : item.heading}})}

                                        >{item.heading}</p>
                                </div>

                                )
                            })}

                        </div>
                    </div>
                    <div className="box">
                        <div className="left">
                            <img className='subcatimg' src={item.categories1.categoriesImg}/>
                        </div>

                        <div className="right">
                            <h4>{item.categories5.categoriesTitle}</h4>
                            {item.categories5.subcategories.map(item=>{
                                return (
                                <div className="listView">
                                    <p
                                            onClick={()=>navigation("/productlists", {state : {itemList: item.itemList ,itemList1: item.itemList1 , heading : item.heading}})}

                                        >{item.heading}</p>
                                </div>

                                )
                            })}

                        </div>
                    </div>
                    <div className="box">
                        <div className="left">
                            <img className='subcatimg' src={item.categories1.categoriesImg}/>
                        </div>

                        <div className="right">
                            <h4>{item.categories6.categoriesTitle}</h4>
                            {item.categories6.subcategories.map(item=>{
                                return (
                                <div className="listView">
                                    <p
                                            onClick={()=>navigation("/productlists", {state : {itemList: item.itemList ,itemList1: item.itemList1 , heading : item.heading}})}

                                        >{item.heading}</p> 
                                </div>

                                )
                            })}

                        </div>
                    </div>

                </div>
            </div>
                    </div>
            {/* <div className="title">{item.title}</div> */}
            </>
            )
        })}
        </div>
    </div>
  )
}

export default CustomCategoryView