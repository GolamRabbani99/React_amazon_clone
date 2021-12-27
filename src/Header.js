import React from 'react'

import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link,Outlet } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
    const [{ basket },dispatch]=useStateValue()
    return (
        <div className='header'>
        <Link to="/">
           <img className="header_logo" src="../images/amazon-removebg-preview.png" alt="amazon log"/> </Link>
           <div className="header_search">
              <input className="header_search_input" type="text" />

              <SearchIcon className="searchIcon" />

           </div>
             <div className="header_nav">
                 
                 <div className="header_option">
                     <span className="header_optionlineOne">hello guest</span>
                     <span className="header_optionlineTne">sign in</span>
                    
                 </div>

                 <div className="header_option">
                     <span className="header_optionlineOne">return</span>
                     <span className="header_optionlineTne">& order</span>
                    
                 </div>

                 <div className="header_option">
                     <span className="header_optionlineOne">your </span>
                     <span className="header_optionlineTne">prime</span>
                    
                 </div>

                 <div className="header_option_bascate">
                 <Link to="/checkout">
<ShoppingBasketIcon />

                     <span className="option_line_count">{basket?.length}</span>
                     </Link>
                 </div>
             </div>

        </div>
    )
}

export default Header
