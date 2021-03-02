import React from 'react';
import { Route , Redirect} from 'react-router-dom'
const PrivateRoute = ({Component : Component , ...rest})=>{
    return <Route {...rest} Component ={(props)=>{
          const token = window.localStorage.getItem('token')
          if (token){
              return <Component {... props} />
          }else{
              return <Redirect to={'/signin'}/>

          }
    }} />
}
 
export default PrivateRoute ;