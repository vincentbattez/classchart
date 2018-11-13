import React from 'react'
import { Radar, RadarChart, PolarGrid, Tooltip, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

export default function CoursChart(props) {
  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={props.data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="matiere" />
      <PolarRadiusAxis domain={[0,20]} />
      <Radar name="Moyenne" dataKey="moyenne" stroke="#009efb" fill="#009efb" fillOpacity={0.6}/>
      <Tooltip />
    </RadarChart>
  )
}