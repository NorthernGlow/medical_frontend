import React from 'react';
import {Outlet} from "react-router-dom"

import {Header} from "../components";

const ProjectPage = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {ProjectPage};