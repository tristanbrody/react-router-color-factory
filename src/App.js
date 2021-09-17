import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar.js";
import ColorsPage from "./ColorsPage.js";
import ColorPage from "./ColorPage.js";
import AddColor from "./AddColor.js";

function App() {
  const COLORS_PATHS = [
    { name: "red", path: "/colors/red" },
    { name: "orange", path: "/colors/orange" },
    { name: "violet", path: "/colors/violet" },
  ];

  const [colors, addColor] = useState(COLORS_PATHS);

  const getRandomColor = () => {
    const colorArr = colors.map(c => c.name);
    return colorArr[Math.floor(Math.random() * colorArr.length)];
  };

  const [randomColor, setRandomColor] = useState(getRandomColor());

  const navBarPaths = [
    { name: "home", path: "/" },
    { name: "colors", path: "/colors" },
    {
      name: "random color",
      path: `/random/colors/${randomColor}`,
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <nav>
            <NavBar
              data={navBarPaths}
              setRandomColor={setRandomColor}
              getRandomColor={getRandomColor}
            />
            <NavLink exact to="/add/color">
              <h3>Add a color!</h3>
            </NavLink>
            <Route exact path="/colors">
              <ColorsPage colors={colors} />
            </Route>
            <Route path="/colors/:color">
              <ColorsPage colors={colors} />
              <ColorPage />
            </Route>
            <Route path="/random/colors/:color">
              <ColorsPage colors={colors} />
              <ColorPage />
            </Route>
            <Route path="/add/color">
              <AddColor addFunc={addColor} colors={colors} />
            </Route>
            <Redirect to="/home" />
          </nav>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
