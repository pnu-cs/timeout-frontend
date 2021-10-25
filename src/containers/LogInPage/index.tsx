import React, {useState} from 'react';
import { FormControl, InputLabel, TextField, Button , Typography} from '@mui/material';

import {useDispatch} from "react-redux";
import {logInInit} from "../../redux/user/actions";

import './styles.css';

// TODO add layout for login form
// на цій сторінці має бути форма для логіну, я тут використовую бібліотеку material ui, тому що вона має готові стилізовані форми
// але нам ці стилі не дуже підходять, тому тут треба застилізувати і зробити гарну форму яка буде підходити під дизайн
// PS мені здається що тут має бути поле email і password, але треба узгодити як ми на бекенді будемо логінити користувачів
// dispatch(logInInit(userData)) - в цьому місці дані з форми викликають сагу src/redux/user/sagas/logInSaga.tsx
// там повинен бути реквест, який залогінить користувача та поверне нам токен
// цей токен треба зберегти в сховище (redux але краще пошукати більш секюрне місце) і надалі перевіряти
// що має бути доступне користувачу який залогінений і що не має

function LogInPage() {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const userData: object = {
        email,
        password
    };

    const onLogInPress = () => dispatch(logInInit(userData));

    return <div className="login-container">
        <Typography>Log in</Typography>
        <FormControl>
            <InputLabel htmlFor="email-input">Email address</InputLabel>
            <TextField
                id='outlined-textarea'
                multiline
                variant='outlined'
                rows={1}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <InputLabel htmlFor="password-input">Email address</InputLabel>
            <TextField
                id='outlined-textarea'
                multiline
                variant='outlined'
                rows={1}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="outlined" onClick={onLogInPress}>Submit</Button>
        </FormControl>
    </div>;
}

export default LogInPage;
