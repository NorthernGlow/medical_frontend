import React from 'react';
import {Outlet} from "react-router-dom"

import {Header2} from "../components";

const ProjectPageAfterSignIn = () => {
    return (
        <div>
            <Header2/>
            <Outlet/>
        </div>
    );
};

export {ProjectPageAfterSignIn};