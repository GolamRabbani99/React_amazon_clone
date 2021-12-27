import React from 'react'
import "./home.css";
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img  className="home_img" src="./images/61MkiIMUSvL._SX3000_.jpg" alt="bannerimage"/>
            

            <div className="home_row">
                <Product id ={2333}title="this is number one product" price={44.6} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuide/Fuji_Dash_GGquad_1X._SY116_CB654300275_.jpg" rating={5} />
                
               
               
               <Product id={3432223} title="SanDisk 128GB microSDXC-Card, Licensed for Nintendo-Switch - SDSQXAO-128G-GNCZN" price ={33.99} image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL320_.jpg" rating={4}/>
            </div>

            <div className="home_row">
            <Product id={3434223} title="SanDisk 128GB microSDXC-Card, Licensed for Nintendo-Switch - SDSQXAO-128G-GNCZN" price ={33.99} image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL320_.jpg" rating={5}/>
            <Product id={3432523} title="SanDisk 128GB microSDXC-Card, Licensed for Nintendo-Switch - SDSQXAO-128G-GNCZN" price ={33.99} image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL320_.jpg" rating={2}/>
            <Product id={372223} title="SanDisk 128GB microSDXC-Card, Licensed for Nintendo-Switch - SDSQXAO-128G-GNCZN" price ={33.99} image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL320_.jpg" rating={10}/>

            </div>

            <div className="home_row">
            <Product id={343283} title="SanDisk 128GB microSDXC-Card, Licensed for Nintendo-Switch - SDSQXAO-128G-GNCZN" price ={33.99} image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL320_.jpg" rating={5}/>
               
            </div>
            </div>
        </div>

    )
}

export default Home
