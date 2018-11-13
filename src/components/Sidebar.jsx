import React from 'react'

export default function Sidebar() {
  return (
    <aside className="left-sidebar">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li><a href="index.html"       className="waves-effect"><i className="fa fa-clock-o m-r-10" aria-hidden="true"></i>Dashboard</a></li>
            <li><a href="table-basic.html" className="waves-effect"><i className="fa fa-table m-r-10"   aria-hidden="true"></i>Classe 2<sup>nd</sup>3</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
