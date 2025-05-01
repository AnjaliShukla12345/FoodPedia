import React, { useContext} from 'react'
import './FoodItem.css'
import { assets2 } from '../../assets/assets2'
import { StoreContext } from '../../Context/StoreContext'


const FoodItem = ({id, name, price, description, image}) => {



const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);


  return (
    <>
<div className='food-item'>
    <div className="food-item-img-container">
        <img className='food-item-image' src={image}  alt="" />
        {
            !cartItems[id]
            ?  <img className='add' onClick={()=>addToCart(id)}  src={assets2.add_icon_white}  alt="" />
            :<div className='food-item-counter'>
<img   onClick={()=>removeFromCart(id)}  src={assets2.remove_icon_red} alt="" />
<p>{cartItems[id]}</p>
<img onClick={()=>addToCart(id)}  src={assets2.add_icon_green} alt="" />
            </div>
        }
    </div>

    <div className="food-item-info">
        <div className='food-item-name-rating'>
     <p>{name}</p>
     <img src={assets2.rating_starts} alt="" />
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
    </div>
</div>
    </>
  )
}

export default FoodItem
