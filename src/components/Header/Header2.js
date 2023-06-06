import React, {useState} from 'react';
import LocalHospitalSharpIcon from "@mui/icons-material/LocalHospitalSharp";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useNavigate} from "react-router-dom";

import css from "./Header.module.css";

const Header2 = () => {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    function Exit() {
        setOpen(false)
        localStorage.clear();
        navigate(`/authorization`)
    }

    function handleClose() {
        setOpen(false)
    }

    function ModalIconExit() {
        setOpen(true)
    }

    return (
        <div>
            <div className={css.Header}>
                <LocalHospitalSharpIcon id={css.Icon}/>
                <button className={css.Button} onClick={ModalIconExit}>Вихід</button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Вихід`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Ви дійсно хочете вийти?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        НІ
                    </Button>
                    <Button onClick={Exit} color="primary" autoFocus>
                        ТАК
                    </Button>
                </DialogActions>
            </Dialog></div>
    )
        ;
};

export {Header2};