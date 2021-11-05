import React from 'react'

function UserGreeting(props) {
    return <h1>{props.name && props.name + ', '}Welcome {Boolean(props.count) && `It's ${props.count}`}</h1>
}

function GuestGreeing(props) {
    return <h1>Please sign up.</h1>
}

function Greeting(props) {
    // if(props.isLoggedIn) {
    //     return <UserGreeting name="jimmy" count={0} />
    // }
    // return <GuestGreeing />;
    return props.isLoggedIn ? <UserGreeting name="jimmy" count={0} /> : <GuestGreeing />
}

export default function Condition() {
    const isLoggedIn = true
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
        </div>
    )
}
