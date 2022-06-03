import React from 'react'
import clock from './images/clock.png'
import AddStd from './images/AddStudentApp.png'
import TodoApp from './images/todoapp.png'
import Blog from './images/blog.png'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import js from './images/js.png'
import redux from './images/redux.png'

const Projects = () => {

  return (
    <div style={{borderTop:"1px solid #706e6e"}} className='bg-stone-900'>
      <div className='About mt-12'>
        PORTFOLIO
      </div>

      <div className='w-100'>
        <div className='portfolio pl-14'>My Recent Projects</div>
      </div>
      <div className='line3 '></div>

      <div className='container6  ml-20'>


        <div className="box">
        <a href="https://digital-clock-j-s.netlify.app" target="_blank" style={{textDecoration: "none"}}>
        <span className='span1'></span>
        <div className="content">
          <h1>Digital Clock</h1>
          <CardMedia
           className='pb-2'
              component="img"
              height="190"
              image={clock}
              alt=""
              style={{borderRadius:"4px"}}
            />
          <div className='flex gap-2 flex-wrap'>
          <img className='html' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt=""/>
          <img className='html' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt=""/>
          <img className='js' src={js} alt=""/>
          </div>  
        </div>
        </a>
      </div>


     
      <div className="box">
      <a href="https://react-j-s-blog.netlify.app" target="_blank" style={{textDecoration: "none"}}>
        <span className='span1'></span>
        <div className="content">
          <h1>Blog App</h1>
          <CardMedia
              className='pb-2'
              component="img"
              height="190"
              image={Blog}
              alt=""
              style={{borderRadius:"4px 4px 5px 5px"}}
            />
          <div className='flex gap-2 flex-wrap'>
          <img className='html' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt=""/>
          <img className='html' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt=""/>
          <img className='js' src={js} alt=""/>
          <img className='js' src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1" alt=""/>
          </div>  
        </div>
        </a>
      </div>



      <div className="box">
      <a href="https://to-do-app-redux.netlify.app" target="_blank" style={{textDecoration: "none"}}>
        <span className='span1'></span>
        <div className="content ">
          <h1>Todo App</h1>
          <CardMedia
             className='pb-2'
              component="img"
              height="190"
              image={TodoApp}
              alt=""
              style={{borderRadius:"4px"}}
            />
          <div className='flex gap-2 flex-wrap'>
          <img className='html' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt=""/>
          <img className='html' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt=""/>
          <img className='js' src={js} alt=""/>
          <img className='js' src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1" alt=""/>
          <img className='js' src={redux} alt=""/>
          </div>  
          {/* <a href="#">View Details</a> */}
        </div>
        </a>
      </div>
      
      </div>

  
      <div className='container6 ml-20 pb-5'>
      <a href="https://redux-add-del-edit.netlify.app" target="_blank" style={{textDecoration: "none"}}>
      <div className="box">
        <span className='span1'></span>
        <div className="content">
          <h2>Student App</h2>
          <CardMedia
          className='pb-2'
              component="img"
              height="190"
              image={AddStd}
              alt=""
              style={{borderRadius:"4px"}}
            />
          <div className='flex gap-2 flex-wrap'>
          <img className='html' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt=""/>
          <img className='html' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt=""/>
          <img className='js' src={js} alt=""/>
          <img className='js' src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1" alt=""/>
          <img className='js' src={redux} alt=""/>
          </div> 
          {/* <a href="#">View Details</a> */}
        </div>
      </div>
      </a>
      </div>


    </div>
  )
}

export default Projects