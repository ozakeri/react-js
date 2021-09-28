import React from 'react'

const Email=(props)=>{
    return(
        <div>
            <h1>
                Hello
            </h1>
            {
                props.messageList.length>0 &&
                <h2>
                    you have {props.messageList.length} unread message
                </h2>
            }
        </div>
    )
}

export default Email