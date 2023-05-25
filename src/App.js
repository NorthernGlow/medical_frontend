import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {ProjectPage} from "./containers";
import {AuthorizationPage, RegistrationPage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={''} element={<ProjectPage/>}>
                    <Route index element={<Navigate to={'authorization'}/>}/>
                    <Route path={'authorization'} element={<AuthorizationPage/>}/>
                    <Route path={'registration'} element={<RegistrationPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
