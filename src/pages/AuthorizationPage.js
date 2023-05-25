import React from 'react';
import {Authorization} from "../components";
import css from "./Pages.module.css"

const AuthorizationPage = () => {
    return (
        <div className={css.Page}>
            <div>
                <text className={css.t1}>Medical</text>
                <text className={css.t2}>Card</text>
            </div>
            <Authorization/>
        </div>
    );
};

export {AuthorizationPage};