import React, {useState} from 'react';
import { InputAdornment, Grid, IconButton} from '@mui/material';
import {Link} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import {useDispatch} from "react-redux";
import {logInInit} from "../../redux/user/actions";

import './styles.css';
import '../button_style.css';

import {Visibility, VisibilityOff} from "@mui/icons-material";
import {LogInUserInputDataType} from "../../redux/user/types";
import {ColorButton, StylizedTextField} from "../stylized_components";

const LogInPage: React.FC = () => {
    const dispatch = useDispatch();

    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [showPassword, setPasswordVisibility] = useState<boolean>(false);

    const userData: LogInUserInputDataType = {
        email,
        password,
    };

    const onLogInPress = () => dispatch(logInInit(userData));

    return <div className="login-box">
        <h2>Log in to your account</h2>
        <Grid container direction={"column"} spacing={3}>
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
                    <StylizedTextField fullWidth
                        label="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'input' : 'password'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon sx={{ color: "white" }}/>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton sx={{ color: "white" }} onClick={()=> {setPasswordVisibility(!showPassword)}} edge="end">
                                        {showPassword ? <Visibility/>: <VisibilityOff /> }
                                    </IconButton>
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
                <ColorButton fullWidth className="button-glow" variant="text" onClick={onLogInPress}>
                    Log in
                </ColorButton>
            </Grid>
            <Grid item>
                <p>New to TimeOut? <Link to="/signup" className="signup-link-style">Create an account</Link>.</p>
            </Grid>
        </Grid>
    </div>;
}

export default LogInPage;
