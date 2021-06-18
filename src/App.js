import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
function App() {
  return (
    <div className="App">
        <Router>
            <Header></Header>
            <Switch>
            <Route path="/" exact component={ProductListing}></Route>
            <Route path="/product/:productId" exact component={ProductDetails}></Route>
            <Route>404 Not Found</Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
