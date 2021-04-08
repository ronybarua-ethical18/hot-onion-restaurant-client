import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
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
export const UserContext = createContext();
function App() {
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
            </Route>
            <Route path="/login">
              <Header loggedInUser={loggedInUser} />
              <Login />
            </Route>
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
            <Route path="/productDetails/:productId">
              <Header loggedInUser={loggedInUser} />
              <ProductDetails />
            </Route>
            <Route path="/">
              <Header loggedInUser={loggedInUser} />
              <Banner />
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
