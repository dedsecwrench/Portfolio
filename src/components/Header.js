import React from 'react';
import mac from './images/mac.webp'
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

export const Header = () => {

    const goToAbout =()=>{
        window.scrollTo(765,765)
    }
    const goToHome =()=>{
        window.scrollTo(0,0)
    }
    const goToProjects =()=>{
        window.scrollTo(1560,1560)
    }
    const goToContact =()=>{
        window.scrollTo(2900,2900)
    }
    
    return (
    <div>
        <div>
            <img className='home-img' src={mac} alt="" style={{borderBottom:"1px solid #706e6e"}} />
            <header className="header">
                <nav className="navbar navbar-expand-lg fixed-top py-3">
                    <div className="container">
                        <div id="navbarSupportedContent navbar-nav ml-auto" className="collapse navbar-collapse">
                            <span className='mid'>
                                <button className="nav-item font-weight-bold btn from-center" onClick={()=>goToHome()}>Home</button>
                                <button className="nav-item font-weight-bold btn from-center" onClick={()=>goToAbout()}>About</button>
                                <button className="nav-item font-weight-bold btn from-center" onClick={()=>goToProjects()}>Portfolio</button>
                                <button className="nav-item font-weight-bold btn from-center" onClick={()=>goToContact()}>Contact</button></span>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='head-text'>
               <span className='hey'>Hey There! </span> <br/>
                <span className='name'>I'm Nameera</span><br/>
                <span className='name'></span>
            </div>
        </div>

           <About/><br/><br/><br/>
           <Projects/><br/><br/>
           <Footer/>

    </div>

    );
}

