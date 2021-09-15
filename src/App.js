import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar.js";
import ColorPage from "./ColorPage.js";
import NotFound from "./NotFound.js";

function App() {
  const COLORS_PATHS = [
    { name: "red", path: "/colors/red" },
    { name: "cerulean", path: "/colors/cerulean" },
    { name: "violet", path: "/colors/violet" },
  ];

  const getRandomColor = () => {
    const colorArr = COLORS_PATHS.map(c => c.name);
    console.log(colorArr);
    return colorArr[Math.floor(Math.random() * colorArr.length)];
  };

  const [randomColor, setRandomColor] = useState(getRandomColor());
  console.log(randomColor);
  console.log(getRandomColor());
  App.defaultProps = {
    COLORS: COLORS_PATHS,
    navBarPaths: [
      { name: "home", path: "/" },
      { name: "colors", path: "/colors" },
      {
        name: "random color",
        path: `/random/colors/${randomColor}}`,
      },
    ],
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <nav>
            <NavBar
              data={App.defaultProps.navBarPaths}
              setRandomColor={setRandomColor}
              getRandomColor={getRandomColor}
            />
            <Route exact path="/colors">
              <ColorPage colors={App.defaultProps.COLORS} />
            </Route>
            <Route path="/colors/:color">
              <ColorPage colors={App.defaultProps.COLORS} />
            </Route>
            <Redirect to="/home" />
          </nav>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
