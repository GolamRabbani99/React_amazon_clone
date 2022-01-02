import React from 'react'

import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket,user },dispatch]=useStateValue();

   

    const handleAuthentication=() => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
        <Link to="/">
           <img className="header_logo" src="../images/amazon-removebg-preview.png" alt="amazon log"/> </Link>
           
           <div className="header_search">
              <input className="header_search_input" type="text" />

              <SearchIcon className="searchIcon" />

           </div>
             <div className="header_nav">
             <Link to={!user &&"/login"}>
                 <div className="header_option" onClick={handleAuthentication}>
                 
                     <span className="header_optionlineOne">Hello {!user ? 'Guest' : user.email}</span>
                     <span className="header_optionlineTne">{user ? 'Sign Out' : 'Sign In'}</span>
                    
                 </div>
              </Link>
                 <div className="header_option">
                     <span className="header_optionlineOne">return</span>
                     <span className="header_optionlineTne">& order</span>
                    
                 </div>

                 <div className="header_option">
                     <span className="header_optionlineOne">your </span>
                     <span className="header_optionlineTne">prime</span>
                    
                 </div>
                 <Link to="/checkout">
                 <div className="header_option_bascate">
                 
<ShoppingBasketIcon />

                     <span className="option_line_count">{basket?.length}</span>
                     
                 </div>
                 </Link>
             </div>

        </div>
    )
}

export default Header
