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
    const [hospital, setHospital] = useState({});

    const [hospitalName, setHospitalName] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [district, setDistrict] = useState('');
    const [street, setStreet] = useState('');
    const [buildingNumber, setBuildingNumber] = useState('');

    const [boxH,setBoxH] = useState(false);

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
        const customer = {email, password}

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

    function changeHospital(e) {
        setHospital(e.target.value)
        console.log(hospital);
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
                            <label className={css.LabelDate}>Лікарня де працюєте:</label>
                            <div className={css.box}>
                                <select className="form-control" id={css.formControl}
                                        onChange={changeHospital}>
                                    <option>Вибір лікарні</option>
                                    {
                                        hospitals.map((value, index) => <option value={value} key={index}>"{value.name}",
                                            м.{value.city}, {value.region} обл.</option>)
                                    }
                                </select>
                                <button className={css.btn} onClick={()=>setBoxH(true)}><AddIcon></AddIcon></button>
                            </div>
                            {
                                boxH && <div>
                                    <TextField className={css.Input} id="outlined-basic" label="Назва лікарні" variant="outlined"
                                               style={{"margin": "15px 0"}}
                                               type={"text"} fullWidth
                                               value={name}
                                               onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            }
                        </div>

                        <Button id={css.Button} variant="contained" onClick={handleClick}>
                            Зареєструватись
                        </Button>
                    </form>
                    {/*{(answer === 0 && auth === true) && <h4 className={css.Error}>Ви ввели невірно дані</h4>}*/}
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