import React from 'react'
import './singleproductpage.scss'
import { useLocation } from 'react-router-dom';

const SingleProductPage = () => {
  const location = useLocation();
  const {title , seller , brand , minQty ,rating, price, discount, Product_id, CountryOfOrigin, 
    TypeOfPackaging , AvailabilityOfDrugLicence ,
     SpecialPrecationForStorage , FormOfSupply , 
     ValidGMPCertificate ,SubmissionofAllCertificates_Licences
      ,img } = location.state;
  console.log(title)
  return (
    <div className='singlePage'>
      <div className="singlePageContainer">
        <div className="left">
          <img className="productbannerImg" src={img}>

          </img>
        </div>
          <div className="right">
            <h2>{title}</h2>

            <h4>{brand}</h4>
            <div className="priceContainer">
              <div className="price">
                {price}
              </div>
              <div className="discount">
                {discount} OFF
              </div>
              <div className="clickForSeller">
                Click to get Seller Details
              </div>
            </div>
              <div className="productDetails">
                <div className='productDetailsHeading'>
                  <h4 >Product Details</h4>
                </div>

                <div className="productDetailsList">
                  <p>Minimum Quantity : {minQty}</p>
                  <p>Availability : 100 % (in stock)</p>
                  <p>Product Id: {Product_id}</p>
                  <p>Country Of Origin : {CountryOfOrigin}</p>
                  <p style={{fontWeight:'bold'}}>Discounted Price: {price}</p>
                  <p>Local Content (MII):85%</p>
                </div>

              </div>
              <div className="productDetails" style={{height:'220px'}}>
                <div className='productDetailsHeading'>
                  <h4 >Seller Details</h4>
                </div>

                <div className="productDetailsList" >
                  <p>Sold By {seller}</p>
                  <p>OEM Verified  : 100 % </p>
                  <p>Seller Rating : {rating} ★</p>
                 
                </div>

              </div>
              <div className="productDetails" >
                <div className='productDetailsHeading'>
                  <h4 >Specifications</h4>
                </div>

                <div className="productDetailsList" >
                  <p>Type Of Packaging {TypeOfPackaging}</p>
                  <p>OEM Verified  : {AvailabilityOfDrugLicence} </p>
                  <p>Special Precaution For Storage: {SpecialPrecationForStorage} </p>
                  <p>Form Of Supply : {FormOfSupply} </p>
                  <p>Valid GMP Certificate : {ValidGMPCertificate} </p>
                  <p>Type of Dispenser : NA</p>
                  <p> Submission of All Certificates & Licences : {SubmissionofAllCertificates_Licences}</p>
                </div>

              </div>
          </div>
      </div>

      <div className="bottomPageProductDetailsCommon">
        <h4>Special Terms & Conditions</h4>
        <ul>
          <li>
          All Provisions of Drugs and Cosmetics Act, 1940 and Rules made there under as amended till date will always be applicable. This will include all notifications issued by Central Drugs Standard Control Organisation (CDSCO), Ministry of Health & Family Welfare (MoHFW) and Department of Pharmaceuticals (DOP), Ministry of Chemicals & Fertilizers time to time in this regard.
          </li>
          <li>
          The sellers are registered on GeM based on self-declaration of valid Drug License, product certification, test reports etc. However, buyers must check and validate the details at their end for all applicable licenses and certifications e.g., validity and authenticity/genuineness of drug license, product certification, manufacturer certification/licenses, test reports etc.
          </li>
          <li>
          The price offered by the seller shall not, in any case exceed the DPCO controlled price, if any, fixed by the Central/State Government, the Maximum Retail Price (MRP) and the selling price. The seller must reduce the prices if there is any reduction in DPCO ceiling price, if any.
          </li>

          <li>
          Any other Terms and Conditions which is not included or at variance with the conditions specified in STC/GTC, may be added by the buyer through Additional Terms and Conditions in the bid to ensure items are procured from authentic/validated source with appropriate and applicable quality. The above terms and conditions are in reverse order of precedence i.e., ATC shall supersede specific STC which shall supersede General Terms and Conditions (“GTC”), whenever there are any conflicting provisions
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SingleProductPage