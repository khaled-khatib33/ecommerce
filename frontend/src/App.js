import React ,{useEffect}  from "react";
import { Route,Switch } from "react-router-dom";
import "./App.css";
import {isUserLoggedIn} from './actions';
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoutr from './components/HOC/PrivateRoutr';
import { useDispatch, useSelector } from "react-redux";
import Products from './containers/products';
import orders from './containers/Orders'
function App() {
  const dispatch = useDispatch();
  const auth =useSelector(state =>state.auth)

  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());

    }
},[]);


  return (
    <div className="App">
        <Switch>
        <PrivateRoutr path="/" exact component={Home} />
        <PrivateRoutr path="/products"  component={Products} />
        <PrivateRoutr path="/orders"   component ={orders} />


          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
    </div>
  );
}
export default App;
