import React from 'react';
import { useState } from 'react';

export default function SignIn() {
    interface UserTypes{
        name:string,
        email:string
    }
    const [isSignIn,setIsSignIn]=useState(false);

    const [user,setUser]=useState<UserTypes | null>();//user value either UserTypes or null

    const handleSignIn=()=>{
        setIsSignIn(true)
        setUser({
            name:"Navina",
            email:"navina@gmail.com"
        })
    }
    const handleSignout=()=>{
        setIsSignIn(false);
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleSignIn}>SignIn</button>
        <button onClick={handleSignout}>SignOut</button>
        <div> {isSignIn ? "Signed In-"+user?.name : "Signed Out"}</div>


    </div>
  )
}
