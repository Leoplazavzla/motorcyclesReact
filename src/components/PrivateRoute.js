import React, {useState} from "react"
import {Route} from "react-router-dom"

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest}
        render={props => {

        }}>
        </Route>
    )

}