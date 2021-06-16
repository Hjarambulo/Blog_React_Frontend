import React, {Component} from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component{
    render(){
        return (
            <div id='formulario'>
                <Slider
                    title='Formulario' 
                    size='slider-small'
                />
                <div className='center'>
                    <div id='content'>
                        {/* listado de articulos que vendran del api */}
                    </div>
                    <Sidebar/>
                </div>
            </div>
        );
    }
}
export default Formulario;