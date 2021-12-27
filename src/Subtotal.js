import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import "./Subtotal.css"
import {reducer,initialState,totoalItemPrice} from "./reducer"


function Subtotal() {
const [{basket},dispatch]=useStateValue()
    
    
    return (
        <div className="subtotal">
 <CurrencyFormat renderText={(value)=>(
        
     <>
     <p>subtotal ({basket.length} items): <strong>{value}</strong></p>
  
     <small className="subtotal_gift">
     <input type="checkbox" />this order contain a gift
     </small>
     
     </>
 )}


decimalScale={2}
value={totoalItemPrice(basket)}

displayType={"text"}
thousandSeparator={true}
prefix={"$"}/>

<button>proceed to checkout</button>

        </div>
    )
}

export default Subtotal
