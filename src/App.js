import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./NavBar.js";
import ColorPage from "./ColorPage.js";
import NotFound from "./NotFound.js";

function App() {
  App.defaultProps = {
    colors: [
      { name: "red", path: "/colors/red" },
      { name: "cerulean", path: "/colors/cerulean" },
      { name: "violet", path: "/colors/violet" },
    ],
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <nav>
            <NavBar data={App.defaultProps} />
            <Route exact path="/colors">
              <ColorPage colors={App.defaultProps.colors} />
            </Route>
            <Route path="/colors/:color">
              <ColorPage colors={App.defaultProps.colors} />
            </Route>
            <Route>
              <NotFound />
              <Redirect to="/colors" />
            </Route>
          </nav>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
