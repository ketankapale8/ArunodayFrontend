import React from 'react';
import './footer.scss'
const Footer = () => {
    let footerContainer = [
        {
            title : "Web Info", 
            items : [
                {
                    listItems : "Terms of Use"
                }, 
                {
                    listItems : "Website Policies"
                }, 
                {
                    listItems : "Document Help"
                }, 
                
                {
                    listItems : "Web Information Management"
                }, 
                
            ]
        }, 

         {
            title : "About Us", 
            items : [
                {
                    listItems : "Bidding Portal"
                }, 
                {
                    listItems : "Statistics"
                }, 
                {
                    listItems : "Press Section"
                }, 
                {
                    listItems : "Advertise with us"
                }, 
               
                
            ]
        }, 

       {
            title : "Supplier's Toolkit", 
            items : [
                {
                    listItems : "Documentation"
                }, 
                {
                    listItems : "Registration Requirements"
                }, 
                {
                    listItems : "Portal Usage"
                }, 
                {
                    listItems : "Policies for Suppliers"
                }, 
               
                
            ]
        },

         {
            title : "Buyer's Toolkit", 
            items : [
                {
                    listItems : "Documentation"
                }, 
                {
                    listItems : "Registration Requirements"
                }, 
                {
                    listItems : "Portal Usage"
                }, 
                {
                    listItems : "Policies for Buyers"
                }, 
               
                
            ]
        },
        {
            title : "Need Help", 
            items : [
                {
                    listItems : "FAQ's"
                }, 
                {
                    listItems : "Feedback"
                }, 
                {
                    listItems : "Raise A Ticket"
                }, 
                {
                    listItems : "Contact Us"
                }, 
               
                
            ]
        },

        
    ]



  return (
    <>
    <div className='footer'>
            {footerContainer.map(item=>{
                return (
                    <>
                    <div className="footerContainer">
                        <div className="fc">
                        <div className="subContainer">
                            <div className="title">
                                {item.title}
                            </div>

                            <div className="listView">
                                {item.items.map(item=>{
                                    return(
                                        <>
                                        <p>
                                            {item.listItems}

                                        </p>
                                        </>
                                    )
                                })}
                            </div>

                        </div>

                        </div>
                    
        </div>
                    </>
                )
            })}



    </div>
            <div className="bottom1">
            © 2023 | Arunoday| All Rights Reserved

            </div>
    
    </>
  )
}

export default Footer