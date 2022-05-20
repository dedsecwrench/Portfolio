import React from 'react'
import js from './images/js.png'
import css from './images/css.png'
import mysql from './images/mysql.png'

const About = () => {
  return (
    <div>
        <div>
            <div className='About'>
                ABOUT
            </div>
            <div className='container'>
            <div className='aboutme'>About Me</div>
            </div>
            <div className='line'></div>   

            <div className='container'>
                    <div className='aboutpara'>
                    I've completed Bachelor's of Computer Application in 2021. <br/> 
                    I'm a self-taught programmer who is very passionate about Front End Development.<br/>
                    Apart from the technical aspects, I am an avid gamer, music lover and artist, <br/>
                    once I focus on something, I often forget what's going on around me in real life.
                </div>
            </div>

            <div className='skilltext container'>Skills</div>  
            <div className='line1'></div>
                <div className='container skills'>
                    <img height="120px" width="140px" src="http://www.entabiz.com/wp-content/uploads/React.png" alt=""/>
                    <img height="110px" width="150px" src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt=""/>
                    <img height="100px" width="110px" src={js} alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img height="100px" width="160px" src="https://www.pngkit.com/png/full/66-667065_js-club-new-balance-png-logo-node-js.png" alt=""/> &nbsp;&nbsp;&nbsp;
                    <img height="200px" width="190px" src="https://www.garyclark-tech.com/static/media/mongodb-logo.5050b86e.png" alt=""/>&nbsp;
                    <img height="120px" width="125px" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt=""/>&nbsp;&nbsp;
                    <img height="110px" width="115px" src={css} alt=""/>&nbsp;&nbsp;&nbsp;
                    <img height="110px" width="115px" src={mysql} alt=""/>&nbsp;&nbsp;
                    <img height="95px" width="115px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" alt=""/>
                </div>

        </div>
    </div>
  )
}

export default About