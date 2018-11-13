import React from 'react'

export default function TitlePage(props) {
  return (
    <div className="row page-titles">
      <div className="col-md-6 col-8 align-self-center">
        <h3 className="text-themecolor m-b-0 m-t-0">{props.title}</h3>
        <ol className="breadcrumb">
          {props.breadcrumb.map((item, index) => {
            if (index === props.breadcrumb.length - 1) {
              return <li className="breadcrumb-item active" key={index}>{item}</li>            
            }else {
              return <li className="breadcrumb-item" key={index}><a href="/">{item}</a></li>
            }
          } 
          )}
        </ol>
      </div>
    </div>
  )
}
