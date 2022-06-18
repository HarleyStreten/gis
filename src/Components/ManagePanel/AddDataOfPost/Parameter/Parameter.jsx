import s from './Parameter.module.css';
import InputTwo from "../../../../UI Components/InputTwo/InputTwo";

const Parameter = (props) => {
    return (
        <div className={s.parameterBlock}>
            <div className={s.headParam}>
                {props.headParam}
            </div>
            <InputTwo className={s.midParam} placeHolder={props.midParam}/>
            <div className={s.endParam}>
                {props.endParam}
            </div>
        </div>
    );
}

export default Parameter;