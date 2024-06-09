import React from 'react'
import Sidebar from '../../componenents/sidebar/Sidebar'
import Navbar from '../../componenents/navbar/Navbar'
import Chart from "../../componenents/chart/Chart";
import './single.scss'
import List from "../../componenents/table/Table";

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <button className="editButton">Edit</button>
            <div className="InfoSect">Informations</div>
            <div className="details">
              <div className="leftDetails">
                <img src='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' />
              </div>
              <div className="rightDetails">
                <h1 className='titleProfil'> Jane Doe</h1>
                <div className='detailInfo'>
                  <span className='first'>Email : </span>
                  <span className='second'>youness@gmail.com </span>
                </div>
                <div className='detailInfo'>
                  <span className='first'>Phone : </span>
                  <span className='second'>0628906026 </span>
                </div>
                <div className='detailInfo'>
                  <span className='first'>Adresse :  </span>
                  <span className='second'>39 rue pierre curie Saint remy les chevreuese </span>
                </div>
                <div className='detailInfo'>
                  <span className='first'>Country : </span>
                  <span className='second'>USA </span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">

          <h1 className='titlle'>Last Transactions </h1>
          <List />


        </div>

      </div>
    </div>
  )
}

export default Single
