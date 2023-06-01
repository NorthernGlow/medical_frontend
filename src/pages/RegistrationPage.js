import React from 'react';
import {Registration} from "../components";
import css from "./Pages.module.css";

const RegistrationPage = () => {
    return (
        <div className={css.Page}>
            <div>
                <text className={css.t1}>Medical</text>
                <text className={css.t2}>Card</text>
            </div>
            <Registration/>
        </div>
    );
};

export {RegistrationPage};