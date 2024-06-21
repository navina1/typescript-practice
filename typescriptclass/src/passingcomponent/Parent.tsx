import React from 'react'

interface ParentTypes{
    children:React.ReactNode;
}

export default function Parent(props:ParentTypes) {
  return (
    <div>{props.children}</div>
  )
}
