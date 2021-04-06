import React from 'react'
import { Button } from '../../Button'
import {data} from "./data"

import "./style.scss"

const Engagement = () => {
    return (
        <div className="engagement">
            <div className="container">
                <div className="engagement-container">
                    <h3 className="engagement-heading">Engagiere dich</h3>
                    <div className="buttons-container">
                    {data.map((item,index)=>{return(
                    <div className="engagement-content-division" >
                        <Button className="button-engagement" primary="true"  border="true" >{item.button}</Button>

                    </div>
                    )})}
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Engagement
