import './App.css';
import HomePage from './pages/home.jsx'
import Detail from './pages/detail';
import { Route,Routes} from "react-router-dom";
import {slides} from "./components/Proyects"

function App() {
  return (
    <div className='app'>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route exact path="/proyect/Dogs APP" element={<Detail title={slides[0].title} img1={slides[0].img1} img2={slides[0].img2} img3={slides[0].img3} obj={slides[0].obj} tech={slides[0].tech} deploy={slides[0].deploy} repo={slides[0].repo} />}/>
      <Route exact path="/proyect/Food API" element={<Detail title={slides[1].title} img1={slides[1].img1} img2={slides[1].img2} img3={slides[1].img3} obj={slides[1].obj} tech={slides[1].tech} deploy={slides[1].deploy} repo={slides[1].repo} />}/>
      <Route exact path="/proyect/Todo Games" element={<Detail title={slides[2].title} img1={slides[2].img1} img2={slides[2].img2} img3={slides[2].img3} obj={slides[2].obj} tech={slides[2].tech} deploy={slides[2].deploy} repo={slides[2].repo} />}/>
      <Route exact path="/proyect/Mundi APP" element={<Detail title={slides[3].title} img1={slides[3].img1} img2={slides[3].img2} img3={slides[3].img3} obj={slides[3].obj} tech={slides[3].tech} deploy={slides[3].deploy} repo={slides[3].repo} />}/>
      </Routes>
    </div>
  );
}

export default App;
