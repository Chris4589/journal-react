import React from 'react'
import { Redirect, Route } from 'react-router'

export const PublicRoutes = ({isAuth, component:Component, ...rest}) => {
  return (
    <Route
      {...rest}
      component={
        (props) =>(
          (isAuth) ?
            <Redirect to="/"/>
          :
          <Component {...props} /> 
        )
      }
    />
  )
}
