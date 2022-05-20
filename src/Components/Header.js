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
            <header class="header">
                <nav class="navbar navbar-expand-lg fixed-top py-3">
                    <div class="container">
                        <div id="navbarSupportedContent navbar-nav ml-auto" class="collapse navbar-collapse">
                            <span className='mid'>
                                <button class="nav-item font-weight-bold btn from-center" onClick={()=>goToHome()}>Home</button>
                                <button class="nav-item font-weight-bold btn from-center" onClick={()=>goToAbout()}>About</button>
                                <button class="nav-item font-weight-bold btn from-center" onClick={()=>goToProjects()}>Portfolio</button>
                                <button class="nav-item font-weight-bold btn from-center" onClick={()=>goToContact()}>Contact</button></span>
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

