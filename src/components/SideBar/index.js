import React from 'react'
import { Counter } from '../Counter'
import { Score } from '../Score'

import './sideBar.css'

export const SideBar = () => {
  return (
    <aside className="sideBar-container">
      <Counter />
      <Score />
    </aside>
  )
}
