/* eslint-disable */
import React from 'react';
import './styles.css';
import '../button_style.css';
import MykhailoPhoto from './Pictures/Misha.jpg';
import NadiiaPhoto from './Pictures/Nadya.jpg';
import YuriiPhoto from './Pictures/Yura.jpg';
import OlegPhoto from './Pictures/Oleg.jpg';
import {Grid, IconButton} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Meet our TimeOut Team</h1>
      <Grid container direction="row" spacing={2}>
        <Grid item>
          <div className="card">
            <img src={MykhailoPhoto} alt="Mike Pavliuk" style={{width:'100%'}}/>
            <div className="my-container">
              <h2>Mykhailo Pavliuk</h2>
              <p>Team Lead, Back-end</p>
              <p>Best leading in the world.</p>
              <p>pavliuk.mykhailo.dev@gmail.com</p>
              <IconButton component={Link} to={{pathname: "https://www.instagram.com/mikeofsun/"}} target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ color: 'white', width: 30, height: 30, mr:1}}/>
              </IconButton>
              <IconButton component={Link} to={{pathname: "https://github.com/MikePavliuk"}} target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ color: 'white', width: 30, height: 30, mr:1}}/>
              </IconButton>
              <IconButton component={Link} to={{pathname: "https://www.linkedin.com/in/pavliuk-mykhailo"}} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ color: 'white', width: 30, height: 30, mr:1}}/>
              </IconButton>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className="card">
            <img src={NadiiaPhoto} alt="Nadiia Fomenko" style={{width:'100%'}}/>
            <div className="my-container">
              <h2>Nadiia Fomenko</h2>
              <p>Front-end</p>
              <p>Description of the done work</p>
              <p>nadiya.fomenko@gmail.com</p>
              <IconButton component={Link} to={{pathname: "/"}} target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ color: 'white', width: 30, height: 30, mr:1}}/>
              </IconButton>
              <IconButton component={Link} to={{pathname: "https://github.com/nadiyafomenko"}} target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ color: 'white', width: 30, height: 30, mr:1}}/>
              </IconButton>
              <IconButton component={Link} to={{pathname: "https://www.linkedin.com/in/nadiia-fomenko-a9b9b0176/"}} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ color: 'white', width: 30, height: 30, mr:1}}/>
              </IconButton>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className="card">
            <img src={YuriiPhoto} alt="Yura Rov" style={{width:'100%'}}/>
            <div className="my-container">
              <h2>Yurii Rovinskyi</h2>
              <p>UI, Front-end</p>
              <p>He is creating a pretty good arts.</p>
              <p>rovinskyi.yurii@comp-sc.if.ua</p>
              <IconButton component={Link} to={{pathname: "https://www.instagram.com/winds.of.change_/"}} target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ color: 'white', width: 30, height: 30, mr:1}}/>
              </IconButton>
              <IconButton component={Link} to={{pathname: "https://github.com/YuraRov"}} target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ color: 'white', width: 30, height: 30, mr:1}}/>
              </IconButton>
              <IconButton component={Link} to={{pathname: "https://www.linkedin.com/in/yurii-rovinskyi/"}} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ color: 'white', width: 30, height: 30, mr:1}}/>
              </IconButton>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className="card">
            <img src={OlegPhoto} alt="Oleg Pavliv" style={{width:'100%'}}/>
            <div className="my-container">
              <h2>Oleg Pavliv</h2>
              <p className="title">Assistant</p>
              <p>Description of the done work</p>
              <p>pavliv.oleh@comp-sc.if.ua</p>
              <IconButton component={Link} to={{pathname: ""}} target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ color: 'white', width: 30, height: 30, mr:1}}/>
              </IconButton>
              <IconButton component={Link} to={{pathname: "https://github.com/Oleg-pnu"}} target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ color: 'white', width: 30, height: 30, mr:1}}/>
              </IconButton>
              <IconButton component={Link} to={{pathname: ""}} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ color: 'white', width: 30, height: 30, mr:1}}/>
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );

};

export default AboutUsPage;
/* eslint-disable */