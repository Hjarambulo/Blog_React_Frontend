import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importar componentes
import Header from './components/Header';
import Slider from './components/Slider'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <div class="center">
        <section id="content">
          <SeccionPruebas/>
        </section> 
        <Sidebar/>
      </div> 
      <div class="clearfix"></div>
      <Footer/>
    </div>
  );
}

export default App;
