import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import './App.css';
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Banner from "./components/Banner/Banner";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import DeliveryProduct from "./components/DeliveryProduct/DeliveryProduct";
import FooterSection from "./components/FooterSection/FooterSection";
import Cart from "./components/Cart/Cart";
import { connect } from 'react-redux';
export const UserContext = createContext();

function App({ currentItem }) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Header loggedInUser={loggedInUser} />
              <Banner />
              <Home />
              <FooterSection />
            </Route>
            <Route
                exact
                path="/"
                render={() => {
                    return (
                      loggedInUser.email ?
                      <Redirect to="/admin" /> :
                      <Redirect to="/home" /> 
                    )
                }}
              />
            <PrivateRoute path="/admin">
              <AdminPanel />
            </PrivateRoute>
            <PrivateRoute path="/placeOrder">
              <Header loggedInUser={loggedInUser} />
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path="/deliveryProduct">
              <Header loggedInUser={loggedInUser} />
              <DeliveryProduct />
            </PrivateRoute>
            {!currentItem ?
              (<Redirect to="/home" />) :
              <Route path="/productDetails/:productId">
                <Header loggedInUser={loggedInUser} />
                <ProductDetails />
              </Route>
            }
            <PrivateRoute path="/cart">
              <Cart />
            </PrivateRoute>
            <Route path="/login">
                <Header loggedInUser={loggedInUser} />
               <Login />
              </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentItem: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App);
