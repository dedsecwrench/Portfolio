import './App.css';
import NavbarComp from './components/NavbarComp';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Loading from './components/Loading';
import {useEffect,useState} from 'react'

const App = () => {

  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [isLoading]);  

  if(isLoading){
    return(
      <div>
         <Loading/> 
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
