import React, {useState} from 'react';
import {
    FormControl,
    TextField,
    Button,
    InputAdornment,
    styled,
    Grid,
    IconButton,
    ButtonProps,
    Link
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import {useDispatch} from "react-redux";
import {logInInit} from "../../redux/user/actions";

import './styles.css';

import {Visibility, VisibilityOff} from "@mui/icons-material";

// TODO add layout for login form
// на цій сторінці має бути форма для логіну, я тут використовую бібліотеку material ui, тому що вона має готові стилізовані форми
// але нам ці стилі не дуже підходять, тому тут треба застилізувати і зробити гарну форму яка буде підходити під дизайн
// PS мені здається що тут має бути поле email і password, але треба узгодити як ми на бекенді будемо логінити користувачів
// dispatch(logInInit(userData)) - в цьому місці дані з форми викликають сагу src/redux/user/sagas/logInSaga.tsx
// там повинен бути реквест, який залогінить користувача та поверне нам токен
// цей токен треба зберегти в сховище (redux але краще пошукати більш секюрне місце) і надалі перевіряти
// що має бути доступне користувачу який залогінений і що не має

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

function LogInPage() {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setPasswordVisibility] = useState(false);

    const userData: object = {
        email,
        password,
        showPassword: Boolean
    };

    console.log(email);
    console.log(password);

    const onLogInPress = () => dispatch(logInInit(userData));

    return <div className="login-box">
        <h2>Log in to your account</h2>
        <Grid container direction={"column"} spacing={3}>
            <Grid item>
                <FormControl fullWidth>
                    <StylizedTextField
                        id="custom-stylized-input" label="Email" value={email}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'input' : 'password'}  id="custom-stylized-input" label="Password"
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
                                              edge="end"
                                          >
                                              {showPassword ? <VisibilityOff /> : <Visibility/>}
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
                    <ColorButton className="glow-on-hover" variant="text" onClick={onLogInPress}>Log in</ColorButton>
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl>
                    <p>New to TimeOut? <Link href="/signup" underline="none" color="#58A6FF">Create an account</Link>.</p>
                </FormControl>
            </Grid>
        </Grid>
    </div>;
}

export default LogInPage;
