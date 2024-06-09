import React from 'react'
import Sidebar from '../../componenents/sidebar/Sidebar'
import Navbar from '../../componenents/navbar/Navbar'
import './new.scss'
const New = ({inputs, title}) => {
  console.log(inputs)
  console.log(title)
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title} </h1>
        </div>
        <div className='bottom'>
          <div className="left">
            <img src= "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"/>
          </div>
          <div className='right'>
            this is the right 
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
