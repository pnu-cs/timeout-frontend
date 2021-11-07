import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {
    Button,
    ButtonProps,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    styled,
    TextField
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {signUpInit} from "../../redux/user/actions";
import './styles.css';

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
        '& p':{
            color: 'white',
        },
    },
});

const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: '#fff'
}));

function SignUpPage() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [showPassword, setPasswordVisibility] = useState(false);
    const [showPassConfirm, setPassConfirmVisibility] = useState(false);

    console.log(name);
    console.log(surname);
    console.log(email);
    console.log(password);
    console.log(passConfirm);

    const userData: object = {
        name,
        surname,
        email,
        password,
        showPassword: Boolean
    };

    const passwordConfirm: object = {
        passConfirm,
        showPassConfirm: Boolean
    };

    const onSignUpPress = () => dispatch(signUpInit(userData, passwordConfirm));

    return <div className="signup-box">
        <h2>Create a new account</h2>
        <Grid container direction={"column"} spacing={3}>
            <Grid item>
                <FormControl fullWidth>
                    <StylizedTextField
                        label="Name" value={name}
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
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <StylizedTextField
                        label="Surname" value={surname}
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
                </FormControl>
            </Grid>
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
