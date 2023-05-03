import './App.css';
import About from './components/AboutMe'
import ContactMe from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Proyects from './components/Proyects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='app'>
      <Home/>
      <About/>
      <Skills/>
      <Proyects/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
