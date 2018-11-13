import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const gradientOffset = (props) => {
  const dataMax = Math.max(...props.data.map((i) => i.note));
  const dataMin = Math.min(...props.data.map((i) => i.note));

  if (dataMax <= 0){
  	return 0
  }
  else if (dataMin >= 10){
  	return 1
  }
  else{
  	return 8 / (dataMax - dataMin);
  }
}

export default function CoursChart(props) {

  const off = gradientOffset(props);
  return (
    <AreaChart
      width={600}
      height={400}
      data={props.data}
      margin={{top: 10, right: 30, left: 0, bottom: 0}}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="matiere"/>
      <YAxis />
      <Tooltip/>
      <defs>
        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset={off} stopColor="green" stopOpacity={1}/>
          <stop offset={off} stopColor="red" stopOpacity={1}/>
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="moyenne" stroke="#000" fill="url(#splitColor)" />
    </AreaChart>
  )
}