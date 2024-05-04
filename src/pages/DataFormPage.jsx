import {useSelector} from "react-redux";


const DataFormPage = () => {


    const {name, age, gender} = useSelector(state => state.user)
    return (
        <div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{gender}</div>
        </div>
    );
};

export default DataFormPage;