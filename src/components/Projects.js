import React from 'react'
import clock from './images/clock.png'
import AddStd from './images/AddStudentApp.png'
import TodoApp from './images/todoapp.png'
import Blog from './images/BlogApp.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const skillBox = {
  "border":"1px solid #706e6e",
  "backgroundColor" : "#171717",
  "color" : "white",
  "padding":"10px",
  "borderRadius":"10px",
  "boxShadow": "0 0 15px #ccc"
}

const skillTextBox = {
  // "border":"1px solid rgb(171, 171, 171)",
  "backgroundColor" : "#706e6e",
  "color" : "white",
  "padding" : "5px",
  "borderRadius": "10px"
}


const Projects = () => {

  return (
    <div style={{borderTop:"1px solid #706e6e"}}>
      <div className='About mt-12'>
        PORTFOLIO
      </div>

      <div className='w-100'>
        <div className='portfolio pl-14'>My Recent Projects</div>
      </div>
      <div className='line3 '></div>

      <div className='container projectContainer ml-20'>
      <a href="https://digital-clock-j-s.netlify.app" target="_blank" style={{textDecoration: "none"}}>
        <Card sx={{ maxWidth: 355}} style={skillBox}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="190"
              image={clock}
              alt="green iguana"
              style={{borderRadius:"4px"}}
            /><br/>
            <CardContent style={{ borderRadius: "5px 5px 5px 5px", backgroundColor:"#000000", border:"1px solid #706e6e"}}>
              <Typography gutterBottom variant="h4" component="div" style={{color:"#f7f7f7"}}>
                Digital Clock
              </Typography>
              <Typography gutterBottom variant="h5" component="div" color="text.secondary" style={{color:"#706e6e"}}>
                Languages
              </Typography>
              <Typography variant="body2" color="text.secondary"  display="flex" columnGap="1rem">
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:100}}>
                       HTML5 
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:100}}>
                        CSS3
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:110}}>
                        JAVASCRIPT
                  </Typography>    
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card></a>

        <a href="https://react-j-s-blog.netlify.app" target="_blank" style={{textDecoration: "none"}}>
        <Card sx={{ maxWidth: 355}} style={skillBox}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="190"
              image={Blog}
              alt="green iguana"
              style={{borderRadius:"4px"}}
            /><br/>
            <CardContent style={{ borderRadius: "5px 5px 5px 5px", backgroundColor:"#000000", border:"1px solid #706e6e"}}>
              <Typography gutterBottom variant="h4" component="div" style={{color:"#f7f7f7"}}>
                Blog App
              </Typography>
              <Typography gutterBottom variant="h5" component="div" color="text.secondary" style={{color:"#706e6e"}}>
                Languages
              </Typography>
              <Typography variant="body2" color="text.secondary"  display="flex" columnGap="1rem">
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:100}}>
                       HTML5 
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:100}}>
                        CSS3
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:110}}>
                        JAVASCRIPT
                  </Typography>    
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:100}}>
                        REACT
                  </Typography> 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card></a>


        <a href="https://to-do-app-redux.netlify.app" target="_blank" style={{textDecoration: "none"}}>
             <Card sx={{ maxWidth: 355}} style={skillBox}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="190"
              image={TodoApp}
              alt="green iguana"
              style={{borderRadius:"4px"}}
            /><br/>
            <CardContent  style={{ borderRadius: "5px 5px 5px 5px", backgroundColor:"#000000", border:"1px solid #706e6e"}}>
              <Typography gutterBottom variant="h4" component="div" style={{color:"#f7f7f7"}}>
                Todo App
              </Typography>
              <Typography gutterBottom variant="h5" component="div" color="text.secondary" style={{color:"#706e6e"}}>
                Languages
              </Typography>
              <Typography flexWrap="wrap" rowGap="15px" variant="body2" color="text.secondary"  display="flex" columnGap="1rem">
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:100}}>
                       HTML5 
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:100}}>
                        CSS3
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:110}}>
                        JAVASCRIPT
                  </Typography>  
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:110}}>
                        REACT
                  </Typography>    
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:110}}>
                        REDUX
                  </Typography>  
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card></a>        

        <a href="https://redux-add-del-edit.netlify.app" target="_blank" style={{textDecoration: "none"}}>
        <Card sx={{ maxWidth: 355}} style={skillBox}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="190"
              image={AddStd}
              alt="green iguana"
              style={{borderRadius:"4px"}}
            /><br/>
            <CardContent style={{ borderRadius: "5px 5px 5px 5px", backgroundColor:"#000000", border:"1px solid #706e6e"}}>
              <Typography gutterBottom variant="h4" component="div" style={{color:"#f7f7f7"}}>
                Student Management App
              </Typography>
              <Typography gutterBottom variant="h5" component="div" color="text.secondary" style={{color:"#706e6e"}}>
                Languages
              </Typography>
              <Typography variant="body2" color="text.secondary"  display="flex" columnGap="1rem" flexWrap="wrap" rowGap="15px">
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:100}}>
                       HTML5 
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:100}}>
                        CSS3
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:100}}>
                        REACT
                  </Typography> 
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:100}}>
                        REDUX
                  </Typography>  
                  <Typography variant="body2" color="text.secondary" style={skillTextBox} sx={{maxWidth:110}}>
                        JAVASCRIPT
                  </Typography>   
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card></a>       


      
      </div>

    </div>
  )
}

export default Projects