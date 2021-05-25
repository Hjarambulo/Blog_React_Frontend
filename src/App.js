import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importar componentes
import Header from './components/Header';
import Slider from './components/Slider'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <div class="center">
        <section id="content">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </section> 
        <Sidebar/>
      </div> 
      <div class="clearfix"></div>
      <Footer/>
    </div>
  );
}

export default App;
