import React from 'react'
import { StyleObjectContext } from './StyleContext'
import { useContext } from 'react';

export default function Content() {
    const theme=useContext(StyleObjectContext);
  return (
    <div style={{color:theme.style1.theme}}>Content</div>
  )
}
