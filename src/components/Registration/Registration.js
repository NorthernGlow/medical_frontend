import React, {useEffect, useState} from 'react';
import {Button, Container, Paper, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";

import css from "./Registration.module.css"

const Registration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [gender, setGender] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [profession, setProfession] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hospitals, setHospitals] = useState([]);
    const [hospital, setHospital] = useState({})

    const [hospitalName, setHospitalName] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [district, setDistrict] = useState('');
    const [street, setStreet] = useState('');
    const [numberBuild, setNumberBuild] = useState('');

    const [boxH, setBoxH] = useState(false);


    const arrPrUk = ["Лікар акушер-гінеколог", "Алерголог - імунолог", "Андролог", "Анестезіолог - реаніматолог", "Ароматерапевт", "Бактеріолог", "Венеролог", "Вертебролог", "Гастроентеролог",
        "Гематолог", "Геріатр (геронтолог)", "Гірудотерапевт", "Гомеопат", "Дерматолог", "Дієтолог", "Ембріолог", "Ендокринолог", "Ендоскопіст", "Епідеміолог", "Еферентолог",
        "Інфекціоніст", "Кардіолог", "Кардіохірург", "Кінезітерапевт", "Комбустіолог", "Косметолог", "Лікар функціональної діагностики", "Лікар швидкої допомоги", "Мамолог", "Мануальний терапевт",
        "Медсестра (медбрат)", "Міколог", "Нарколог", "Невролог", "Нейрохірург", "Неонатолог", "Нефролог", "Онколог", "Ортопед", "Оториноларинголог (отоларинголог, ЛОР)", "Лікар-офтальмолог", "Патологоанатом",
        "Педіатр", "Ортопед", "Проктолог", "Психіатр", "Психотерапевт", "Пульмонолог", "Реабілітолог", "Ревматолог", "Рентгенолог", "Рефлексотерапевт", "Сексолог", "Сімейний лікар",
        "Спортивний лікар", "Стоматолог", "Терапевт", "Токсиколог", "Травматолог", "Трансплантолог", "Уролог", "Фармацевт", "Спеціаліст з клітинних технологій", "Фоніатр", "Фізіолог", "Хірург"];
    const arrPr = ["OBSTETRICIAN", "ALLERGISTIMMUNOLOGIST", "ANDROLOGIST", "ANESTHESIOLOGIST", "AROMATHERAPIST", "BACTERIOLOGIST", "VENEREOLOGIST", "VERTEBROLOGIST", "GASTROENTEROLOGIST",
        "HEMATOLOGIST", "GERIATRICIAN", "HIRUDOTHERAPIST", "HOMEOPATH", "DERMATOLOGIST", "NUTRITIONIST", "EMBRYOLOGIST", "ENDOCRINOLOGIST", "ENDOSCOPIST", "EPIDEMIOLOGIST", "EFFERENTOLOGIST",
        "INFECTIONIST", "CARDIOLOGIST", "CARDIACSURGEON", "KINESITHERAPIST", "COMBUSTIOLOGIST", "BEAUTICIAN", "FUNCTIONALDIAGNOSTICIAN", "EMERGENCYDOCTOR", "MAMMOLOGIST", "CHIROPRACTOR",
        "NURSE", "MYCOLOGIST", "NARCOLOGIST", "NEUROLOGIST", "NEUROSURGEON", "NEONATOLOGIST", "NEPHROLOGIST", "ONCOLOGIST", "ORTHOPAEDIST", "OTORHINOLARYNGOLOGIST", "OPHTHALMOLOGIST", "PATHOLOGIST",
        "PEDIATRICIAN", "PODIATRIST", "PROCTOLOGIST", "PSYCHIATRIST", "PSYCHOTHERAPIST", "PULMONOLOGIST", "REHABILITATIONSPECIALIST", "RHEUMATOLOGIST", "RADIOLOGIST", "REFLEXOLOGIST", "SEXOLOGIST", "FAMILYDOCTOR",
        "SPORTSDOCTOR", "DENTIST", "THERAPIST", "TOXICOLOGIST", "TRAUMATOLOGIST", "TRANSPLANTOLOGIST", "UROLOGIST", "PHARMACIST", "SPECIALISTINCELLULARTECHNOLOGIES", "PHONIATRICIAN", "PHYSIOLOGIST", "SURGEON"];

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        let customer = {};
        if (boxH) {
            const hospital = {hospitalName, city, region, district, street, numberBuild}
            customer = {name, surname, patronymic, gender, birthDay, profession, hospital, email, password}

            fetch(`http://localhost:8080/registration`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(customer)

            }).then((res) => res.json())
                .then((result) => {
                    localStorage.setItem('doctorId', JSON.stringify(result))
                    console.log("New doctor added")
                })

        } else {
            customer = {name, surname, patronymic, gender, birthDay, profession, email, password}

            fetch(`http://localhost:8080/registration`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(customer)

            }).then((res) => res.json())
                .then((result) => {
                    localStorage.setItem('doctorId', JSON.stringify(result))
                    fetch(`http://localhost:8080/registration/hospital/${result}`, {
                        method: "PATCH",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(hospital)
                    }).then((res) => console.log(res))
                        .catch((err) => console.log(err))
                    console.log("New doctor added")
                })
        }
        navigate(`/doctor`)

    }

    const handleChange = (e) => {
        setGender(e.target.value);
    };

    function changeDate(e) {
        setBirthDay(e.target.value);
    }

    function changeProfession(e) {
        setProfession(e.target.value);
    }

    useEffect(() => {
        fetch(`http://localhost:8080/getAllHospital`)
            .then((res) => res.json())
            .then((result) => {
                setHospitals(result)
            })

    }, [])


    function clickAddHospital(e) {
        e.preventDefault();
        if (boxH) {
            setBoxH(false)
        } else {
            setBoxH(true)
        }
    }

    function changeHospital(id) {
        fetch(`http://localhost:8080/getHospitalById/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setHospital(result)
            })

    }


    return (
        <div>
            <Container>
                <Paper elevation={3} id={css.paperStyle}>
                    <h1 className={css.header}>Registration</h1>
                    <form className={css.Form} noValidate autoComplete="off">
                        <TextField className={css.Input} id="outlined-basic" label="Ім'я" variant="outlined"
                                   style={{"margin": "15px 0"}}
                                   type={"text"} fullWidth
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Прізвище" variant="outlined"
                                   style={{"margin": "15px 0"}}
                                   type={"text"} fullWidth
                                   value={surname}
                                   onChange={(e) => setSurname(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="По батькові" variant="outlined"
                                   style={{"margin": "15px 0"}}
                                   type={"text"} fullWidth
                                   value={patronymic}
                                   onChange={(e) => setPatronymic(e.target.value)}
                        />
                        <fieldset className={css.Fieldset}>
                            <legend>Стать</legend>
                            <div className={css.Radio}>
                                <div>
                                    <input type="radio" id="MALE" name="drone" value="MALE" onChange={handleChange}/>
                                    <label htmlFor="MALE">Чоловік</label>
                                </div>
                                <div>
                                    <input type="radio" id="FEMALE" name="drone" value="FEMALE"
                                           onChange={handleChange}/>
                                    <label htmlFor="FEMALE">Жінка</label>
                                </div>
                            </div>
                        </fieldset>
                        <label htmlFor="start" className={css.LabelDate}>Дата народження:</label>
                        <input type="date" id="start" name="trip-start" className={css.Date}
                               onChange={changeDate}
                               min="1950-01-01"/>
                        <div className={css.Prof}>
                            <label className={css.LabelDate}>Направлення:</label>
                            <select className="form-control" id={css.formControl} onChange={changeProfession}>
                                <option>Вибір направлення</option>
                                {
                                    arrPrUk.map((value, index) => <option value={arrPr[index]}
                                                                          key={index}>{value}</option>)
                                }
                            </select>
                        </div>
                        <div className={css.Prof}>
                            <label className={css.LabelDate}>Лікарня, де ви працюєте:</label>
                            <div className={css.box}>
                                <select className="form-control" id={css.formControl}
                                >
                                    <option>Вибір лікарні</option>
                                    {
                                        hospitals.map((value, index) => <option value={value} key={index}
                                                                                onChange={changeHospital(value.id)}>"{value.hospitalName}",
                                            м.{value.city}, {value.region} обл.</option>)
                                    }
                                </select>
                                <button className={css.btn} onClick={clickAddHospital}><AddIcon></AddIcon></button>
                            </div>
                            {
                                boxH && <div>
                                    <TextField className={css.Input} id="outlined-basic" label="Назва лікарні"
                                               variant="outlined"
                                               style={{"margin": "15px 0"}}
                                               type={"text"} fullWidth
                                               value={hospitalName}
                                               onChange={(e) => setHospitalName(e.target.value)}
                                    />
                                    <TextField className={css.Input} id="outlined-basic" label="Місто" variant="outlined"
                                               style={{"margin": "15px 0"}}
                                               type={"text"} fullWidth
                                               value={city}
                                               onChange={(e) => setCity(e.target.value)}
                                    />
                                    <TextField className={css.Input} id="outlined-basic" label="Район" variant="outlined"
                                               style={{"margin": "15px 0"}}
                                               type={"text"} fullWidth
                                               value={district}
                                               onChange={(e) => setDistrict(e.target.value)}
                                    />
                                    <TextField className={css.Input} id="outlined-basic" label="Область" variant="outlined"
                                               style={{"margin": "15px 0"}}
                                               type={"text"} fullWidth
                                               value={region}
                                               onChange={(e) => setRegion(e.target.value)}
                                    />
                                    <TextField className={css.Input} id="outlined-basic" label="Вулиця" variant="outlined"
                                               style={{"margin": "15px 0"}}
                                               type={"text"} fullWidth
                                               value={street}
                                               onChange={(e) => setStreet(e.target.value)}
                                    />
                                    <TextField className={css.Input} id="outlined-basic" label="Номер будинку"
                                               variant="outlined"
                                               style={{"margin": "15px 0"}}
                                               type={"text"} fullWidth
                                               value={numberBuild}
                                               onChange={(e) => setNumberBuild(e.target.value)}
                                    />
                                </div>
                            }
                        </div>
                        <TextField className={css.Input} id="outlined-basic" label="Email" variant="outlined"
                                   style={{"margin": "15px 0"}}
                                   type={"text"} fullWidth
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Пароль" variant="outlined"
                                   style={{"margin": "15px 0"}}
                                   type={"password"} fullWidth
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button id={css.Button} variant="contained" onClick={handleClick}>
                            Зареєструватись
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export
{
    Registration
}
    ;