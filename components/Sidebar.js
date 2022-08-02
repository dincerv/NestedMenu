import React from 'react'

import Items from '../pages/data'
import SidebarItems from './sidebaritems'

// import boxes from '../pages/data'

function Sidebar() {
  // const [squares, setSquares] = React.useState(boxes)

  return (
    <div className="sidebar">
      {Items.map((item, index) => (
        <SidebarItems key={index} item={item} />
      ))}
    </div>
  )
}
export default Sidebar
