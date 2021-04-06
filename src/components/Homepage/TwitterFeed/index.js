import React from 'react'
import {data} from "./data"
import twitterlogo from "../../../assets/images/small-twitter.svg"

import "./style.scss"

const Twitterfeed = () => {
    return (
        <div className="twitterfeed">
            <div className="container">
                <div className="twitter-container">
                    <h3>Das beschäftigt uns gerade</h3>
                    <div className="twitter-content-division">
                        {data.map((item,index)=>{
                            return(
                                <div className="twitter-content-container">
                                    <div className="upper-twitter-content">
                                        <div className="name-content">
                                            <h5 className="name-twitter">{item.name}</h5>
                                            <h5 className="username-twitter">{item.username}</h5>
                                            </div>
                                            <div className="icon-content">
                                                <img className="twitter-logo" src={twitterlogo} alt="logo" />
                                                </div>

                                        </div>
                                        <div className="lower-twitter-content">
                                            <p className="content-twitter">{item.tweet}<br></br><span className="twitter-span">{item.tags}</span></p>
                                            </div>
                                    </div>
                            )
                        })}


                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Twitterfeed
