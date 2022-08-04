import React from 'react'

import Items from '../constants/mocks/nav'
import SidebarItems from './sidebaritems'

// import boxes from '../pages/data'

function Sidebar() {
  // const [squares, setSquares] = React.useState(boxes)

  return (
    <div className="sidebar">
      {Items.map(
        (
          item // it was (item, index)
        ) => (
          <SidebarItems key={item.id} item={item} /> // in key it was {index} bec. of ERROR: Do not use array index in key
        )
      )}
    </div>
  )
}
export default Sidebar
