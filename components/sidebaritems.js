import React, { useState } from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

// import { Button } from './button/Button'
// import boxes from '../pages/data'

function SidebarItems({ item }) {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    // console.log(`setting ${!active} for ${JSON.stringify(item)}`)
    setActive(!active)
  }
  // const handleActive = onClick={() => setActive(!active)};

  if (item.nodeChild) {
    return (
      <div className={active ? 'sidebar-item active' : 'sidebar-item'}>
        <div className="sidebar-title">
          {/* <Button onClick={handleClick} className="sidebar-title"> */}
          <span>{item.nodeText}</span>
          <div className="down-arrow">
            <BsFillArrowDownCircleFill onClick={handleClick} />
          </div>
          {/* </Button> */}
        </div>
        {active && (
          <div className="sidebar-content">
            {item.nodeChild.map((child) => (
              <SidebarItems key={child.nodeId} item={child} />
            ))}
          </div>
        )}
      </div>
    )
  }
  return (
    <a href={item.href} className="sidebar-item">
      <div className="sidebar-title">
        <span>{item.nodeText}</span>
      </div>
    </a>
  )
}
export default SidebarItems
