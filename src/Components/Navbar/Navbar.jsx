import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets2 } from '../../assets/assets2'
import  { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'


const Navbar = ({setShowLogin}) => {


const [menu, setMenu] = useState("Home");


const {getTotalCartAmount} = useContext(StoreContext)




  return (
    <>
<div className='navbar'>

 <Link to='/'><img src={assets2.logo1} alt="" className="logo" /></Link>
  <ul className="navbar-menu">

 <Link to='/' Click={()=>setMenu("Home")}  className={menu === "Home" ? "active": " "}>Home</Link>

<a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu === "Menu"?"active":"" }>Menu</a>


<a href='#app-download'  onClick={()=>setMenu("Mobile-app")}  className={menu === "Mobile-app" ? "active" : " "}>Mobile-app</a>
<a href='#footer' onClick={()=>setMenu("Contact-us")}  className={menu === "Contact-us" ? "active" : " "}>Contact-us</a>
  
  </ul>


  <div className="navbar-right">
    <img src={assets2.search_icon} alt="" />
    <div className="navbar-search-icon"> 

      <Link to='/cart'><img src={assets2.basket_icon} alt="" /></Link>
     
      <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
      </div>

<button onClick={()=>setShowLogin(true)}>sign in</button>

       </div>
    </div>      
    </>
  )
}

export default Navbar