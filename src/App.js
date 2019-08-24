import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Views/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import DarkModeSwitch from "./Components/Switch";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <DarkModeSwitch />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
