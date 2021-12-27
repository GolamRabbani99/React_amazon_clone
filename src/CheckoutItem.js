import React from 'react'
import "./CheckoutItem.css";
import { useStateValue } from "./StateProvider";
function CheckoutItem({id,image,title,price,rating}) {
    const[{basket},dispatch]=useStateValue()

    function removeFromBasket(){


        //remove from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="checkoutProductImage" className="checkoutproduct__image"/>

            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">
                    {title}
                </p>

                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="checkoutproduct__rating">
                {Array(rating).fill().map((_,i) =>(
                    <p>⭐</p>
                ))}
                </div>
                <button onClick={removeFromBasket}>remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutItem

