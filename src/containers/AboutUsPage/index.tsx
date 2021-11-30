import React from 'react';
import './styles.css';
import '../button_style.css';
import { Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import MykhailoPhoto from './Pictures/Misha.jpg';
import NadiiaPhoto from './Pictures/Nadya.jpg';
import YuriiPhoto from './Pictures/Yura.jpg';
import OlegPhoto from './Pictures/Oleg.jpg';

const AboutUsPage: React.FC = () => {
  const iconStyle = {
    color: 'white',
    width: 35,
    height: 35,
    mr: 1.5,
  };
  return (
    <div style={{ overflowY: 'scroll' }}>
      <h1 style={{ textAlign: 'center' }}>Meet our TimeOut Team</h1>
      <Grid container direction="row" spacing={2} style={{ justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <img src={MykhailoPhoto} alt="Mike Pavliuk" style={{ width: '100%' }} />
            <div className="my-container">
              <h2>Mykhailo Pavliuk</h2>
              <p>Team Lead, Back-end</p>
              <p>Best leading in the world.</p>
              <p>pavliuk.mykhailo.dev@gmail.com</p>
              <IconButton component={Link} to={{ pathname: 'https://www.instagram.com/mikeofsun/' }} target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={iconStyle} />
              </IconButton>
              <IconButton component={Link} to={{ pathname: 'https://github.com/MikePavliuk' }} target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={iconStyle} />
              </IconButton>
              <IconButton component={Link} to={{ pathname: 'https://www.linkedin.com/in/pavliuk-mykhailo' }} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={iconStyle} />
              </IconButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <img src={NadiiaPhoto} alt="Nadiia Fomenko" style={{ width: '100%' }} />
            <div className="my-container">
              <h2>Nadiia Fomenko</h2>
              <p>UI/UX, Front-end</p>
              <p>The Goddess of ReactJS</p>
              <p>nadiya.fomenko@gmail.com</p>
              <IconButton component={Link} to={{ pathname: 'https://www.instagram.com/nadiia_fmnk/' }} target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={iconStyle} />
              </IconButton>
              <IconButton component={Link} to={{ pathname: 'https://github.com/nadiyafomenko' }} target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={iconStyle} />
              </IconButton>
              <IconButton component={Link} to={{ pathname: 'https://www.linkedin.com/in/nadiia-fomenko-a9b9b0176/' }} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={iconStyle} />
              </IconButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <img src={YuriiPhoto} alt="Yura Rov" style={{ width: '100%' }} />
            <div className="my-container">
              <h2>Yurii Rovinskyi</h2>
              <p>UI, Front-end</p>
              <p>He stylized this page.</p>
              <p>rovinskyi.yurii@comp-sc.if.ua</p>
              <IconButton component={Link} to={{ pathname: 'https://www.instagram.com/winds.of.change_/' }} target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={iconStyle} />
              </IconButton>
              <IconButton component={Link} to={{ pathname: 'https://github.com/YuraRov' }} target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={iconStyle} />
              </IconButton>
              <IconButton component={Link} to={{ pathname: 'https://www.linkedin.com/in/yurii-rovinskyi/' }} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={iconStyle} />
              </IconButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <img src={OlegPhoto} alt="Oleg Pavliv" style={{ width: '100%' }} />
            <div className="my-container">
              <h2>Oleg Pavliv</h2>
              <p>Researcher</p>
              <p>Lord of the Watches</p>
              <p>pavliv.oleh@comp-sc.if.ua</p>
              <IconButton component={Link} to={{ pathname: 'https://www.instagram.com/olegg_pavliv/' }} target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={iconStyle} />
              </IconButton>
              <IconButton component={Link} to={{ pathname: 'https://github.com/Oleg-pnu' }} target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={iconStyle} />
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUsPage;
