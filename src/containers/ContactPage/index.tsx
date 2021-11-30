import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
import './styles.css';
import '../button_style.css';
import { Grid, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import ReCAPTCHA from 'react-google-recaptcha';
import { useSnackbar } from 'notistack';
import { ColorButton, StylizedTextField } from '../stylized_components';
import { history } from '../../redux/store';

init('user_okjm7EhPoecdv6ejYr8oG');

const ContactPage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [captchaVerify, setCaptchaVerify] = useState<boolean>(false);

  const regex = /^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@((gmail\.com)|(comp-sc\.if\.ua)|(pnu\.edu\.ua))$/i;

  const submit = () => {
    if (fullName && email && message && captchaVerify) {
      const serviceId = 'service_xm5ebnm';
      const templateId = 'template_9eahxki';
      const templateParams = {
        fullName,
        email,
        message,
      };

      emailjs.send(serviceId, templateId, templateParams)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      history.goBack();
      enqueueSnackbar('Thank you for your message, check your email for further instructions!', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
    } else {
      enqueueSnackbar('Please fill in all fields!', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
    }
  };

  return (
    <div className="contact-box">
      <h1>Contact Form</h1>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <StylizedTextField
            fullWidth
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBoxIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
        </Grid>
        <Grid item>
          <StylizedTextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={(regex.test(email)) ? '' : 'Please enter valid Gmail address'}
            FormHelperTextProps={{ style: { color: 'red' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
        </Grid>
        <Grid item>
          <StylizedTextField
            multiline
            rows={4}
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MessageIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
        </Grid>
        <Grid item>
          <div className="captcha">
            <ReCAPTCHA
              theme="dark"
              sitekey="6LdXNk0dAAAAAM3iB4CEjjS69i-CiP-Zr3oTYwTi"
              onChange={() => { setCaptchaVerify(!captchaVerify); }}
            />
          </div>
        </Grid>
        <Grid item>
          <ColorButton fullWidth className="button-glow" variant="text" onClick={submit}>
            Submit
          </ColorButton>
        </Grid>
      </Grid>
    </div>
  );

  // { /* <div className="map-frame"> */ }
  // { /*    <iframe */ }
  // { /*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.042096807901!2d24.698791815858172!3d48.91459020470167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c13f3e2cfaa9%3A0xde33c2341e09d861!2sPrykarpat%C2%B7s%CA%B9kyy%20Natsional%CA%B9nyy%20Universytet!5e0!3m2!1sen!2sua!4v1635174252361!5m2!1sen!2sua" */ }
  // { /*        loading="lazy" className="map"/> */ }
  // { /* </div> */ }
};

export default ContactPage;
