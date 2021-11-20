import React, { useState } from 'react'
import emailjs, {init} from 'emailjs-com'
import './styles.css';
import {
    Button,
    ButtonProps,
    Grid,
    InputAdornment,
    styled,
    TextField
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MessageIcon from '@mui/icons-material/Message';

init('user_okjm7EhPoecdv6ejYr8oG');

const StylizedTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#fff',
        },
        '&:hover fieldset': {
            borderColor: '#1f6feb',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#1f6feb',
        },
    },
});

const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: '#fff'
}));

function ContactPage() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [emailSent, setEmailSent] = useState(false);

        const submit = () => {
            if (name && email && message) {
                const serviceId = 'service_xm5ebnm';
                const templateId = 'template_9eahxki';
                const templateParams = {
                    name,
                    email,
                    message
                };

                emailjs.send(serviceId, templateId, templateParams)
                    .then(response => console.log(response))
                    .then(error => console.log(error));

                setName('');
                setEmail('');
                setMessage('');
                setEmailSent(true);
            } else {
                alert('Please fill in all fields.');
            }
        }
    return <div className="root">
            <div className="map-frame">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.042096807901!2d24.698791815858172!3d48.91459020470167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c13f3e2cfaa9%3A0xde33c2341e09d861!2sPrykarpat%C2%B7s%CA%B9kyy%20Natsional%CA%B9nyy%20Universytet!5e0!3m2!1sen!2sua!4v1635174252361!5m2!1sen!2sua"
                    loading="lazy" className="map"/>
            </div>
            <div className="column">
                <h2>Contact Form</h2>
                <Grid container direction={"column"} spacing={3}>
                    <Grid item>
                    <StylizedTextField fullWidth
                        label="Full Name" value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountBoxIcon sx={{ color: "white" }}/>
                                </InputAdornment>
                            ),
                            style: { color: 'white' }
                        }}
                        InputLabelProps={{
                            style: { color: 'white' }
                        }}
                    />
                    </Grid>
                    <Grid item>
                    <StylizedTextField fullWidth
                        label="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon sx={{ color: "white" }}/>
                                </InputAdornment>
                            ),
                            style: { color: 'white' }
                        }}
                        InputLabelProps={{
                            style: { color: 'white' }
                        }}
                    />
                    </Grid>
                    <Grid item>
                    <StylizedTextField multiline maxRows={3} fullWidth
                        label="Message" value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MessageIcon sx={{ color: "white" }}/>
                                </InputAdornment>
                            ),
                            style: { color: 'white' }
                        }}
                        InputLabelProps={{
                            style: { color: 'white' }
                        }}
                    />
                    </Grid>
                    <Grid item>
                        <ColorButton fullWidth className="login-button-glow" variant="text" onClick={submit}>Submit</ColorButton>
                    </Grid>
                </Grid>
            </div>
            {/*<div id="contact-form">*/}
            {/*    <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />*/}
            {/*    <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />*/}
            {/*    <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>*/}
            {/*    <button onClick={submit}>Send Message</button>*/}
            {/*    <span className={emailSent ? 'visible' : undefined}>Thank you for your message, we will be in touch in no time!</span>*/}
            {/*</div>*/}

        </div>;
}

export default ContactPage;
