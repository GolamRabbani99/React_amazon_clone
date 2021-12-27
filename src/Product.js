import React from 'react'
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id,title,price,image,rating}) {
    const[{basket},dispatch]=useStateValue()
    

    //dispatch the item into the data layer
    function addtoBasket(){
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        });
    };
    
    return (
        <div className="product">
           <div className="product_info" key={id}>
               <p>{title}</p>
               <p className="product_price">
                   <small>
                       $ 
                   </small>
                   <strong>{price}</strong>
               </p>
               <div className="product_rating">
                {Array(rating).fill().map((_,i) =>(
                    <p>⭐</p>
                ))}
                   
                 
               </div>
              
           </div>  
           

           <img src={image} alt="headphone" className="product_img" />
           <button onClick={addtoBasket}> add to basket</button>
        </div>
    )
}

export default Product
