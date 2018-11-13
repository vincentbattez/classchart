import React from 'react'
import { NavLink, Switch } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="left-sidebar">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <Switch>
            <ul id="sidebarnav">
              <li>
                <NavLink exact to="/" className="waves-effect"><i className="fa fa-clock-o m-r-10" aria-hidden="true"></i>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/classe" className="waves-effect"><i className="fa fa-table m-r-10"   aria-hidden="true"></i>Classe 2<sup>nd</sup>3</NavLink>
              </li>
            </ul>
          </Switch>
        </nav>
      </div>
    </aside>
  )
}
