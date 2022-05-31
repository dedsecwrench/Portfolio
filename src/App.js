import './App.css';
import NavbarComp from './components/NavbarComp';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <NavbarComp/>
        <Home/>
        <About/>
        <Projects/>
        <Footer/>
       
    </div>
  );
}

export default App;
