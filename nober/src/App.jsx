import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Home from './home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Members from './members/Members'
import Contribution from './contributions/Contribution'
import ActiveContributions from './contributions/ActiveContributions'
import AddContribution from './contributions/AddContribution'
import ContributionList from './contributions/ContributionList'

const App = () => {


  return (

    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/members' element={<Members />} />
          <Route path='/contributions' element={<Contribution />} />
          <Route path='/a' element={<ActiveContributions />} />
          <Route path='/addcontribution/:ContId' element={<AddContribution />} />
          <Route path='/addcontribution/:ContId/contributionlist/:ContId' element={<ContributionList />} />

        </Routes>

      </div>
    </Router>
  )
}

export default App
