import ProductScreen from "./component/productPage/ProductScreen";
import HomeScreen from "./component/homePage/HomeScreen";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className={"brand"}>
              Amazona
            </Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
          </Switch>
        </main>
        <footer className="row center">&copy; 2020, All right reserved</footer>
      </div>
    </>
  );
}

export default App;
