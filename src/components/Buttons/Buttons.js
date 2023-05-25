import React from 'react';
import {useNavigate} from "react-router-dom"

import css from './Buttons.module.css'

const Buttons = () => {
    const navigate = useNavigate();

    const onClickAuthorization = ()=>{
        navigate('/authorization')
    }

    const onClickRegistration = () => {
      navigate('/registration')
    }
    return (
        <div className={css.Buttons}>
            <button className={css.Button} onClick={onClickAuthorization}>Вхід</button>
            <button className={css.Button} onClick={onClickRegistration}>Реєстрація</button>
        </div>
    );
};

export {Buttons};