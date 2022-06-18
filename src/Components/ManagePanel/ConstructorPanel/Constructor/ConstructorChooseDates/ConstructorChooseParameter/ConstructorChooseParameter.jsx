import s from './ConstructorChooseParameter.module.css';
import CheckboxConstructor from "../../../../../../UI Components/CheckboxConstructor/CheckboxConstructor";
import InputTwo from "../../../../../../UI Components/InputTwo/InputTwo";

const ConstructorChooseParameter = (props) => {
    return (
        <div className={s.parameterBlock}>
            <CheckboxConstructor name={props.headParam}/>
            <InputTwo className={s.midParam} placeHolder={props.midParam}/>
        </div>
    );
}

export default ConstructorChooseParameter;