import React, {forwardRef} from 'react'

// Material UI
import { Card, CardContent, Typography } from '@material-ui/core';

// Custom Css
import "./messagecomp.css"

const Messagecomp=forwardRef(({username,message}, ref)=> {
    const isuser = username === message.username;
    console.log(message)
    return (
        <div ref={ref} className={`msg_card ${isuser && "msgusr__card"} carding-style`}>
            <Card className={isuser ? "msg_curuser":"msg_otuser"}>
                <CardContent>
                    <Typography varient="h5" component="h2">
                        {message.username}:   {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Messagecomp
