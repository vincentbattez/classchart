import React from 'react'

export default function Card(props) {
  // const progressBarCSS = {width: props.progressBarWidth+'%', height: '6px'}

  return (
    <div className="col-sm">
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">{props.title}</h4>
          {props.children}

          {/* {props.progress &&
            <React.Fragment>
              <span className="text-success">80%</span>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={progressBarCSS} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </React.Fragment>
          } */}

        </div>
      </div>
    </div>
  )
}
