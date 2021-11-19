import React, {useState} from 'react';
import {FormControl, TextField, Button, InputAdornment, styled, Grid, IconButton, ButtonProps} from '@mui/material';
import {Link} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import {useDispatch, useSelector} from "react-redux";
import {logInInit} from "../../redux/user/actions";

import './styles.css';

import {Visibility, VisibilityOff} from "@mui/icons-material";
import {LogInUserInputDataType} from "../../redux/user/types";
import {selectIsUserError} from "../../redux/user/selectors";

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

const LogInPage: React.FC = () => {
    const dispatch = useDispatch();

    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [showPassword, setPasswordVisibility] = useState<boolean>(false);

    const error = useSelector(selectIsUserError);

    const userData: LogInUserInputDataType = {
        email,
        password,
    };

    const onLogInPress = () => dispatch(logInInit(userData));

    return <div className="login-box">
        <h2>Log in to your account</h2>
        <Grid container direction={"column"} spacing={3}>
            <Grid item>
                <FormControl fullWidth>
                    <StylizedTextField
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
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <StylizedTextField
                        label="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'input' : 'password'}
                        helperText={error && error?.userNotExists ? error?.userNotExists : ''}
                        FormHelperTextProps={ { style: { color: 'red' } } }
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
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <ColorButton className="login-button-glow" variant="text" onClick={onLogInPress}>Log in</ColorButton>
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl>
                    <p>New to TimeOut? <Link to="/signup" className="signup-link-style">Create an account</Link>.</p>
                </FormControl>
            </Grid>
        </Grid>
    </div>;
}

export default LogInPage;
