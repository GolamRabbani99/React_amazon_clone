import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutItem from "./CheckoutItem"
import { useStateValue } from "./StateProvider";

function Checkout() {
   const[{basket},dispatch]=useStateValue()
    
    return (
        <div className="checkout">
             <div className="checkout_left">
             <img src="https://www.helium10.com/app/uploads/2018/12/Banner-Amazon-Advertising-Marketing-Guide-01.png" alt="adds banner" className="checkout_img" />
              
              <div>
                  <h2 className="checkout_title">Your shopping basket</h2>
                {basket.map(item => (
                    <CheckoutItem id={item.id}

                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                    />
                )
                    
                )       
                    
                }
                  
              </div>
             </div>

             <div className="checkout_right">
                          <Subtotal />
             </div>



        </div>
    )
}

export default Checkout
