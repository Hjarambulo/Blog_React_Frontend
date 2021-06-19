import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import SeccionPruebas from "./components/SeccionPruebas";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import Error from "./components/Error";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="center">
          {/* Configurar rutas y paginas */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/formulario" component={Formulario} />
            <Route component={Error} />
          </Switch>
          <div className="clearfix"></div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
