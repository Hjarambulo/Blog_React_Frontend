import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Slider from './Slider';
import SeccionPruebas from './SeccionPruebas';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Error from './Error';


class Router extends Component{
    
    render(){
        return(
            <BrowserRouter>
                <div class="center">
                    <Header/>
                    <Slider/>
                    {/* Configurar rutas y paginas */}
                    <section id="content">
                        <Switch>
                            <Route exact path='/ruta-prueba' component={SeccionPruebas}/>
                            <Route exact path='/pagina-1' render={() => (
                                <h1>hola mundo</h1>
                            )}/>
                            <Route component={Error}/>
                        </Switch>
                    </section>
                    <Sidebar/>
                    <div class="clearfix"></div>
                    <Footer/>
                </div>

            </BrowserRouter>
        );
    }
}

export default Router;