import React from 'react'
import Sidebar from '../../componenents/sidebar/Sidebar'
import Navbar from '../../componenents/navbar/Navbar'
import './list.scss'
import Datatable from '../../componenents/datatable/Datatable'
const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List
