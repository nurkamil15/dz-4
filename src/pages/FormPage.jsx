import {useState} from "react";
import {useDispatch} from "react-redux";
import {changeAge, changeGender, changeName} from "../store/userSlice.js";
import {useNavigate} from "react-router-dom";


const FormPage = () => {

    const [name, setName] =useState('')
    const[age, setAge] = useState('')
    const[gender, setGender] = useState('')
    const dispatch= useDispatch()
    const navigate= useNavigate()

    const sendSubmit = (e) =>{
        e.preventDefault()
        dispatch(changeName(name))
        dispatch(changeAge(age))
        dispatch(changeGender(gender))
        navigate("/data")
        setName('')
        setAge('')
        setGender('')


    }


    return (
        <div>
            <form onSubmit={sendSubmit}>
                <input type="text" placeholder='Введите имя' onInput={(e) => setName(e.target.value)}/>
                <input type="number" placeholder='Введите ваш возраст' onInput={(e) => setAge(e.target.value)}/>
                <input type="text" placeholder='Введите ваш пол' onInput={(e) => setGender(e.target.value)}/>
                <button>Отправить</button>
            </form>
        </div>
    );
};

export default FormPage;