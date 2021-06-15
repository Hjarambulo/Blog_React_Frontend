import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
class Slider extends Component{

    render(){
        return(
            <div id="slider" className="slider-big">
                <h1>Bienvenido a mi Blog</h1>
                <NavLink to='/ruta-prueba' className="btn-white">Ir al blog</NavLink>
            </div>
        );
    }
}

export default Slider;