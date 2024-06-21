import React from 'react'

interface InfoTypes {
    //status should be any of these three values
    status: "info" | "warn" | "error"
}
export default function LogLevel(props: InfoTypes) {
    let status;
    if (props.status === "info") {
        status = "info";
    }
    else if (props.status === "warn") {
        status = "warn";
    }
    else if(props.status ==="error"){
        status="error";
    }
    return (
        <div>LogLevel - {status}</div>
    )
}
