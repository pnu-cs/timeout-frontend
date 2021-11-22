import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {FormControl, Grid, IconButton, InputAdornment} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {signUpInit} from "../../redux/user/actions";
import './styles.css';
import '../button_style.css';
import {SignUpUserInputDataType} from "../../redux/user/types";
import {ColorButton, StylizedTextField} from "../stylized_components";

const SignUpPage: React.FC = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passConfirm, setPassConfirm] = useState<string>('');
    const [showPassword, setPasswordVisibility] = useState<boolean>(false);
    const [showPassConfirm, setPassConfirmVisibility] = useState<boolean>(false);

    const userData: SignUpUserInputDataType = {
        name,
        surname,
        email,
        password,
    };

    const onSignUpPress = () => dispatch(signUpInit(userData));

    return <div className="signup-box">
        <h2>Create a new account</h2>
        <Grid container direction={"column"} spacing={3}>
            <Grid item>
                    <StylizedTextField
                        fullWidth label="Name" value={name}
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
                    <StylizedTextField
                        fullWidth label="Surname" value={surname}
                        onChange={(e) => setSurname(e.target.value)}
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
                    <StylizedTextField
                        fullWidth label="Email" value={email}
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
                    <StylizedTextField
                        fullWidth label="Password" value={password}
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
                                    <IconButton sx={{ color: "white" }}
                                                onClick={()=> {setPasswordVisibility(!showPassword)}}
                                                edge="end">
                                        {showPassword ? <Visibility/> : <VisibilityOff /> }
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
                <FormControl error fullWidth>
                    <StylizedTextField
                        label="Confirm your password" value={passConfirm}
                        onChange={(e) => setPassConfirm(e.target.value) }
                        type={showPassConfirm ? 'input' : 'password'}
                        helperText={(password === passConfirm) ? '' : 'Password mismatch'}
                        FormHelperTextProps={ { style: { color: 'red' } } }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon sx={{ color: "white" }}/>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton sx={{ color: "white" }}
                                                onClick={()=> {setPassConfirmVisibility(!showPassConfirm)}}
                                                edge="end">
                                        {showPassConfirm ? <Visibility/> : <VisibilityOff />}
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
                <ColorButton fullWidth className="button-glow" variant="text" onClick={
                    (e)=>((password === passConfirm) ? onSignUpPress() : e.preventDefault())}>
                    Sign up
                </ColorButton>
            </Grid>
        </Grid>
    </div>;
}

export default SignUpPage;
