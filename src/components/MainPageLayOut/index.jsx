import React, { memo } from 'react'
import Sidebar from '../SideBar'
import NavBar from '../NavBar'

const MainPagelayOut = memo(({children}) => {
  return (
    <div className="w-screen flex" style={{ background: "#f6f9fc" }}>
    <Sidebar />
    <div className="p-5 w-screen">
      <NavBar />
      {children}
    </div>
  </div>
  )
})

export default MainPagelayOut