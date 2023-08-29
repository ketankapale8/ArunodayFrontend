import React, { useState } from 'react';
import './listing.scss'
import { useLocation, useNavigate} from 'react-router-dom';

const ProductListing = () => {
   
    const location = useLocation();
    const navigation = useNavigate();
    let itemList = location.state?.itemList;
    let itemList1 = location.state?.itemList1;

    let heading = location.state?.heading;
   

  return (
    <div className='listing'>
        <div className="listingContainer">
            <div className="title">{heading}</div>
            <p>Showing 1 - 8 products of 500+ products in {heading}</p>

            <div className="categoryList">
                {itemList.map(item=>{
                    return (
                <div className="listContainer">
                    <img src={item.img} className='productimg'/>
                    <div className="productTitle">
                        {item.title}
                    </div>
                    <div className="desc">
                        <p>Seller : {item.seller}</p>
                        <p>Brand : {item.brand}</p>
                        <p>Minium Quantity/Consignee : {item.minQty}</p>


                    </div>

                    <div className="rating">
                        Rating : {item.rating} ★
                    </div>
                    <div className="price">
                        <div className="title">
                        {item.price}

                        </div>
                        <div className="discount">{item.discount} OFF
                        </div>
                        
                    </div>
                    <button 
                    onClick={()=> navigation("/singleproductpage", {state : {title : item.title , 
                        seller : item.seller , 
                        brand: item.brand , 
                        minQty : item.minQty , 
                        rating : item.rating , 
                        price: item.price, img: item.img
                        ,discount: item.discount,
                        Product_id : item.Product_id, 
                        CountryOfOrigin : item.CountryOfOrigin, 
                        TypeOfPackaging : item.TypeOfPackaging, 
                        AvailabilityOfDrugLicence : item.AvailabilityOfDrugLicence,
                        SpecialPrecationForStorage : item.SpecialPrecationForStorage,
                        FormOfSupply: item.FormOfSupply,
                        ValidGMPCertificate: item.ValidGMPCertificate,
                        SubmissionofAllCertificates_Licences: item.SubmissionofAllCertificates_Licences,
                    }})}
                
                    
                    
                    className='priceBtn'>Get Latest Price</button>
                </div>

                    )
                })}
            </div>

        </div>
        <div className="listingContainer">

            <div className="categoryList">
                {itemList1?.map(item=>{
                    return (
                <div className="listContainer">
                    <img src={item.img} className='productimg'/>
                    <div className="productTitle">
                        {item.title}
                    </div>
                    <div className="desc">
                        <p>Seller : {item.seller}</p>
                        <p>Brand : {item.brand}</p>
                        <p>Minium Quantity/Consignee : {item.minQty}</p>


                    </div>

                    <div className="rating">
                        Rating : {item.rating} ★
                    </div>
                    <div className="price">
                        <div className="title">
                        {item.price}

                        </div>
                        <div className="discount">{item.discount} OFF
                        </div>
                    </div>
                    <button 
                        onClick={()=> navigation("/singleproductpage", {state : {title : item.title , 
                            seller : item.seller , 
                            brand: item.brand , 
                            minQty : item.minQty , 
                            rating : item.rating , 
                            price: item.price , img: item.img
                            ,discount: item.discount,
                            Product_id : item.Product_id, 
                            CountryOfOrigin : item.CountryOfOrigin, 
                            TypeOfPackaging : item.TypeOfPackaging, 
                            AvailabilityOfDrugLicence : item.AvailabilityOfDrugLicence,
                            SpecialPrecationForStorage : item.SpecialPrecationForStorage,
                            FormOfSupply: item.FormOfSupply,
                            ValidGMPCertificate: item.ValidGMPCertificate,
                            SubmissionofAllCertificates_Licences: item.SubmissionofAllCertificates_Licences,
                        }})}
                    
                    className='priceBtn'>Get Latest Price</button>

                </div>

                    )
                })}
            </div>

        </div>
    </div>
  )
}

export default ProductListing