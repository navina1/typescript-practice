import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import PersonDetails from './PersonDetails';
import Team from './Team';
import Teams from './Teams';
import LogLevel from './LogLevel';
import Parent from './passingcomponent/Parent';
import Child from './passingcomponent/Child';
import SignIn from './hooks/SignIn';
import Counter from './hooks/Counter';

function App() {
  //object
  const details={
    FName:"Virat",
    LName:"Kohli",
    Age:35,
    IsVegan:true,
  }
  //array
  const IPL=["CSK","MI","RCB"];
  //array of object
  const team=[
    {id:1,name:"CSK",color:"Yellow"},
    {id:2,name:"MI",color:"blue"},
    {id:3,name:"RCB",color:"Red"},
  ]
  return (
    <div className="App">
      {/* <Home name="Navina" age={31} isElegible={true}/>
      <PersonDetails Details={details}/>
      <Team IPL={IPL}/>
      <Teams team={team}/>
      <LogLevel status="info"/> */}
      {/* <Parent children={<Child/>}/>
      <SignIn/> */}
      <Counter/>
    </div>
  );
}

export default App;
