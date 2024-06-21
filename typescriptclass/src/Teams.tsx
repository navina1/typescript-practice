import React from 'react'

interface TeamsType{
    team:{
        id:number,
        name:string,
        color:string,
    }[]
}

export default function Teams(props : TeamsType) {
  return (
    <div>
        {props.team.map((t)=>(
            <div key={t.id}>
                <h2>{t.name}</h2>
                <p>Color: {t.color}</p>
            </div>
        ))}
    </div>
  )
}
