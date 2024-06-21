import React from 'react'

interface TeamsType{
    IPL:string[]
}

export default function Team(props : TeamsType) {
  return (
    <div>
        Team- {props.IPL.map((team)=>(
            <div key={team}>{team}</div>
        ))}
    </div>
  )
}
