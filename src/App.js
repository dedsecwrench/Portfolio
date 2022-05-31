import './App.css';
import NavbarComp from './components/NavbarComp';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import {useEffect,useState} from 'react'

function App() {

  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [isLoading]);

  if(isLoading){
    return(
      <div class="loader mt-80">
      <div class="outer"></div>
      <div class="middle"></div>
      <div class="inner"></div>
    </div>
    )
  }
  else{
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


}

export default App;
