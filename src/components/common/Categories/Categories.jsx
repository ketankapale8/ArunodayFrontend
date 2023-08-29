import React from 'react';
import './categories.scss'
import { categoryData , categoryData1 , categoryData2 , categoryData3, categoryData4 , categoryData5} from '../../../data/CategoryData';



const Categories = () => {
  return (
    <>

    <div className="categoriesRowView">
        <div className='categories'>
            {categoryData.map(item=>{
                return (
                    <>
                        <div className="categoryContainer">
                            <h4>{item.title}</h4>
                            <div className="listView">
                                {item.categories.map((i)=>{
                                    return (
                                        <>
                                            <p>{i.heading}</p>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
        <div className='categories'>
        {categoryData1.map(item=>{
            return (
                <>
                    <div className="categoryContainer">
                        <h4>{item.title}</h4>
                        <div className="listView">
                            {item.categories.map((i)=>{
                                return (
                                    <>
                                        <p>{i.heading}</p>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </>
            )
        })}
        </div>
        <div className='categories'>
        {categoryData2.map(item=>{
            return (
                <>
                    <div className="categoryContainer">
                        <h4>{item.title}</h4>
                        <div className="listView">
                            {item.categories.map((i)=>{
                                return (
                                    <>
                                        <p>{i.heading}</p>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </>
            )
        })}
        </div>

        <div className='categories'>
            {categoryData3.map(item=>{
                return (
                    <>
                        <div className="categoryContainer">
                            <h4>{item.title}</h4>
                            <div className="listView">
                                {item.categories.map((i)=>{
                                    return (
                                        <>
                                            <p>{i.heading}</p>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
        <div className='categories'>
        {categoryData4.map(item=>{
            return (
                <>
                    <div className="categoryContainer">
                        <h4>{item.title}</h4>
                        <div className="listView">
                            {item.categories.map((i)=>{
                                return (
                                    <>
                                        <p>{i.heading}</p>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </>
            )
        })}
        </div>
        <div className='categories'>
        {categoryData5.map(item=>{
            return (
                <>
                    <div className="categoryContainer">
                        <h4>{item.title}</h4>
                        <div className="listView">
                            {item.categories.map((i)=>{
                                return (
                                    <>
                                        <p>{i.heading}</p>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </>
            )
        })}
        </div>

    </div>
   </>
  )
}

export default Categories