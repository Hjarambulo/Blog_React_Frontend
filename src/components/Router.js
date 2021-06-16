import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import SeccionPruebas from './SeccionPruebas';
import Home from './Home';
import Blog from './Blog';
import Formulario from './Formulario';
import Footer from './Footer';
import Error from './Error';


class Router extends Component{
    
    render(){
        return(
            <BrowserRouter>
                <Header/>
                <div className="center">
                    {/* Configurar rutas y paginas */}
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/home' component={Home}/>
                            <Route exact path='/blog' component={Blog}/>
                            <Route exact path='/formulario' component={Formulario}/>
                            <Route exact path='/ruta-prueba' component={SeccionPruebas}/>
                            <Route exact path='/pagina-1' render={() => (
                                <h1>hola mundo</h1>
                            )}/>
                            <Route component={Error}/>
                        </Switch>
                    <div className="clearfix"></div>
                    <Footer/>
                </div>

            </BrowserRouter>
        );
    }
}

export default Router;