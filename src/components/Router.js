import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SeccionPruebas from './SeccionPruebas';


class Router extends Component{
    
    render(){
        return(
            <BrowserRouter>
                {/* Configurar rutas y paginas */}
                <Switch>
                    <Route path='/ruta-prueba' component={SeccionPruebas}/>
                </Switch>

            </BrowserRouter>
        );
    }
}

export default Router;