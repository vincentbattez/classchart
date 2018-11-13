import React from 'react'

export default function Table(props) {
  return (
    <div className="table-responsive m-t-40">
      <table className="table stylish-table">
        {props.children}
      </table>
    </div>
  )
}
