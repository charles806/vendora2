import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import Search from '../Search';
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { FaShoppingCart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import { DiGitCompare } from "react-icons/di";
import { FaRegHeart } from "react-icons/fa";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


 const Header = () => {
  return (
    <>   <header>
     <div className='top-section'>
        <p>Trusted By 1000+ buyers across Nigeria</p>

        <div className='top-section-links'>
          <Link to="/help-center" className='links'>Help Center</Link>
          
          <Link to="/faqs" className='links'>FAQs</Link>

          <Link to="/sell" className='links'>Sell Products</Link>
        </div>
     </div>

     <nav>
        <div className='logo'>
          <Link to="/" className='logo-link'>
            <img src={Logo} alt="Logo"  className='logo-img'/>
          </Link>
        </div>

        <div className='SearcBar'>
            <Search />
        </div>


        <div className='nav-links'>
          <Link to="/login" className='nav-link'>Login</Link>
          <span className='nav-link'>|</span>
          <Link to="/register" className='nav-link'>Register</Link>
        </div>

      

        <div className='nav-icons'>
          <ul>
            <li className='nav-icon-cart'>
               <Tooltip title="Cart" placement="top">
              <IconButton aria-label="cart" sx={{ color: '#000' }}>
                <StyledBadge badgeContent={4} color="secondary">
                    <FaShoppingCart sx={{ color: '#000' }}  />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
            </li>
            <li className='nav-icon-heart'>
              <Tooltip title="Wishlist" placement="top">
                <IconButton aria-label="wishlist" className='MUibadge' sx={{ color: '#000' }}>
                  <StyledBadge badgeContent={4} color="secondary">
                       <FaRegHeart style={{ color: '#000' }} />
                   </StyledBadge>
                 </IconButton>
              </Tooltip>
            </li>
             <li className='nav-icon-compare'>
              <Tooltip title="Compare" placement="top">
                 <IconButton aria-label="compare" className='MUibadge' sx={{ color: '#000' }}>
                     <StyledBadge badgeContent={4} color="secondary">
                         <DiGitCompare style={{ color: '#000' }} className='nav-icon-compare' />
                    </StyledBadge>
                   </IconButton>
               </Tooltip>
            </li>
          </ul>
        </div>
     </nav>
    </header>

   
    </>
 
  );
}

export default Header
