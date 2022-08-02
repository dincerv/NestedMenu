import React, { useState } from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
// import boxes from '../pages/data'

function SidebarItems({ item }) {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  // const handleActive = onClick={() => setActive(!active)};

  if (item.nodeChild) {
    return (
      <div className={active ? 'sidebar-item active' : 'sidebar-item'}>
        <div className="sidebar-title">
          <span>{item.nodeText}</span>
          <div className="down-arrow">
            <BsFillArrowDownCircleFill onClick={handleClick} />
          </div>
        </div>
        <div className="sidebar-content">
          {item.nodeChild.map((child) => (
            <SidebarItems key={item.nodeChild.id} item={child} />
          ))}
        </div>
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
