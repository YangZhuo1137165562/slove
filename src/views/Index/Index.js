import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
// import RouterView from ""
export default class Index extends Component {
    state={
        leftTitle:[
            {
                name:"点餐",
                url:"/index/diancan"
            },
            {
                name:"评价",
                url:"/index/evaluate"
            },
            {
                name:"商家",
                url:"/index/merchant"
            }
        ]
    }
    render() {
        let {leftTitle} =this.state
        return (
            <div className="index-page">
                <div className="index-header">
                    {
                    leftTitle&&leftTitle.map((item,index)=>{
                        return(
                        <NavLink to={item.url} key={index}>{item.name}</NavLink>
                        )
                    })
                }
                </div>
                <div className="index-main">

                </div>
            </div>
        )
    }
}
