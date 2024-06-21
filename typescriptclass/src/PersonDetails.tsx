import React from 'react'

interface PersonDetailsType{
    Details : {
        FName: String;  // Use 'string' instead of 'String'
        LName: String;  // Use 'string' instead of 'String'
        Age: number;
        IsVegan:boolean;
    }
}

export default function PersonDetails(props: PersonDetailsType) {
    return (
        <div>
            <div>First name - {props.Details.FName}</div>
            <div>Last name - {props.Details.LName}</div>
            <div>Age - {props.Details.Age}</div>
            <div>Vegan - {props.Details.IsVegan ? 'Yes' : 'No'}</div>

        </div>
    )
}
