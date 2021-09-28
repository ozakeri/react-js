import React from 'react'

const Greeting = (props)=>{

    const UserGree =()=>{
        return(
            <h1>
                Welcoooooooooooooooom userGree
            </h1>
        )
    }


    const GuesesGree =()=>{
        return(
            <h1>
                Welcoooooooooooooooom guesesGree
            </h1>
        )
    }

    let result = <GuesesGree/>
    if (props.isLoggedIn){
        result  = <UserGree/>
    }


    return(
        <div>
            {result}
        </div>
    )
}

export default Greeting