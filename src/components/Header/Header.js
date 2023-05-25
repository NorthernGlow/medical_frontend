import React from 'react';
import LocalHospitalSharpIcon from '@mui/icons-material/LocalHospitalSharp';

import css from "./Header.module.css"
import {Buttons} from "../Buttons/Buttons";


const Header = () => {
    return (
        <div className={css.Header}>
            <LocalHospitalSharpIcon id={css.Icon}/>
            <Buttons/>
        </div>
    );
};

export {Header};