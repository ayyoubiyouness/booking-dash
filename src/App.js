import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'

import Single from './pages/single/Single'
import New from './pages/new/New'

import Login from './pages/login/Login'
import { userInputs } from './formSource'
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<Login />} />
            <Route index element={<Home />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs = {userInputs} title = "Add New User" />} />

            </Route>
            <Route path='hotels'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              
            </Route>
            <Route path='rooms'>
              <Route index element={<List />} />
              
              <Route path=':productId' element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

