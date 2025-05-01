import React from 'react'
import './AppDownload.css'
import { assets2 } from '../../assets/assets2'


const AppDownload = () => {
  return (
    <>
<div className='app-download' id="app-download">
    <p>For Bettet Experience Download  <br /> FoodPedia App</p>
    <div className="app-download-platforms">
        <img src={assets2.play_store} alt="" />
        <img src={assets2.app_store} alt="" />
        
    </div>
    </div>   
    </>
  )
}

export default AppDownload
