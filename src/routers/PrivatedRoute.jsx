import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivatedRoute = ({
  isAuth,
  component:Component,
  ...rest
}) => {
  
  return (
    <Route
      { ...rest }
      component={
        (props) => ( //las props vienen en el componente
          (isAuth) 
          ? <Component {...props} /> 
          :
          <Redirect to="/auth/login"/>
        )
      }
    />
  )
}
