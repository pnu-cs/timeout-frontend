import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, ButtonProps, FormControl, Grid, IconButton, InputAdornment, styled, TextField} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {signUpInit} from "../../redux/user/actions";
import './styles.css';
import {SignUpUserInputDataType} from "../../redux/user/types";
import {selectIsUserError} from "../../redux/user/selectors";

const StylizedTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#fff',
        },
        '&:hover fieldset': {
            borderColor: '#1f6feb'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#1f6feb'
        },
    },
});

const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: '#fff'
}));

function SignUpPage() {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passConfirm, setPassConfirm] = useState<string>('');
    const [showPassword, setPasswordVisibility] = useState<boolean>(false);
    const [showPassConfirm, setPassConfirmVisibility] = useState<boolean>(false);

    const error = useSelector(selectIsUserError);

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
                <FormControl fullWidth>
                    <StylizedTextField
                        label="Name" value={name}
                        onChange={(e) => setName(e.target.value)}
                        helperText={(error && error?.firstName) ? error?.firstName : ''}
                        FormHelperTextProps={ { style: { color: 'red' } } }
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
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <StylizedTextField
                        label="Surname" value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        helperText={(error && error?.lastName) ? error?.lastName : ''}
                        FormHelperTextProps={ { style: { color: 'red' } } }
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
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <StylizedTextField
                        label="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        helperText={(error && error?.email) ? error?.email : ''}
                        FormHelperTextProps={ { style: { color: 'red' } } }
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
                        helperText={(error && error?.password) ? error?.password : ''}
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
                </FormControl>
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
                <FormControl fullWidth>
                    <ColorButton className="signup-button-glow" variant="text" onClick={
                        (e)=>((password === passConfirm) ? onSignUpPress() : e.preventDefault())}>
                        Sign up
                    </ColorButton>
                </FormControl>
            </Grid>
        </Grid>
    </div>;
}

export default SignUpPage;
