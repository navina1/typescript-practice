import React from 'react';

// interface PropsType {
//     name: string;
//     age:number;
//     isElegible:boolean;
// }

type PropsType={
    name: string;
    age?:number;//here age is optional
    isElegible:boolean;
}

export default function Home(props: PropsType) {
    return (
        <div>
            <h1>Hey, {props.name}, welcome to this page</h1>
            <h2>Your age is {props.age}</h2>
            {props.isElegible ? <h2>Elegible</h2> : <h2>Not Elegible</h2>}
        </div>
    );
}
