import React from "react"

import {Switch,Route,Redirect} from "react-router-dom"

function RouterView(props){
    let {routes} =props
    let routerArr=routes&&routes.filter(item=>!item.to)
    let redirectArr=routes&&routes.filter(item=>item.to).map((item,index)=>{return <Redirect key={index} path={item.path} to={item.to}></Redirect>})
    return <Switch>
        {
            routerArr&&routerArr.map((item,index)=>{
                return <Route path={item.path} key={index} render={(props)=>{
                    return <item.component {...props} child={item.children}/>
                }} ></Route>
            }).concat(redirectArr)
        }
    </Switch>
}

export default RouterView;