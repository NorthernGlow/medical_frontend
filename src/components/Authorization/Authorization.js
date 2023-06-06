import React, {useState} from 'react';
import {Button, Container, Paper, TextField} from "@mui/material";

import css from "./Authorization.module.css"
import {useNavigate} from "react-router-dom";

const Authorization = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [answer, setAnswer] = useState(0);
    const [auth, setAuth] = useState(false);

    const [position, setPosition] = useState(false);
    const [person, setPerson] = useState(0);

    const navigate = useNavigate();

    const handleClickDoctor = (e) => {
        e.preventDefault()
        setAuth(true);
        const customer = {email, password}
        fetch('http://localhost:8080/authorization', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(customer)

        }).then((res) => res.json())
            .then((result) => {
                setAnswer(result)
            })
        if (answer !== 0) {
            localStorage.setItem('doctorId', JSON.stringify(answer))
            navigate('/doctor')
        }
    }

    const handleClickPatient = (e) => {
        e.preventDefault()
        setAuth(true);
        const customer = {email, password}
        fetch('http://localhost:8080/authorizationPatient', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(customer)

        }).then((res) => res.json())
            .then((result) => {
                setAnswer(result)
            })
        if (answer !== 0) {
            localStorage.setItem('patientId', JSON.stringify(answer))
            navigate('/patient')
        }
    }

    function clickPatient() {
        setPosition(true)
        setPerson(2)
    }

    function clickDoctor() {
        setPosition(true)
        setPerson(1)
    }

    return (
        <div>
            {position && <Container>
                <Paper elevation={3} id={css.paperStyle}>
                    <h1 className={css.header}>Authorization</h1>
                    <form className={css.Form} noValidate autoComplete="off">
                        <TextField className={css.Input} id="outlined-basic" label="Email" variant="outlined"
                                   style={{"margin": "15px 0"}}
                                   type={"text"} fullWidth
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Password" variant="outlined"
                                   style={{"margin": "15px 0"}}
                                   type={"password"} fullWidth
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                        />
                        {(person === 1) && <Button id={css.Button} variant="contained" onClick={handleClickDoctor}>
                            Ввійти
                        </Button>}
                        {(person === 2) && <Button id={css.Button} variant="contained" onClick={handleClickPatient}>
                            Ввійти
                        </Button>}
                    </form>
                    {(answer === 0 && auth === true) && <h4 className={css.Error}>Ви ввели невірно дані</h4>}
                </Paper>
            </Container>}
            {
                !position && <div className={css.MainButton}>
                    <button className={css.btn} onClick={clickPatient}>Пацієнт</button>
                    <button className={css.btn} onClick={clickDoctor}>Лікар</button>
                </div>
            }
        </div>
    );
};

export {Authorization};