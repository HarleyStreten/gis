import s from './Parameter.module.css';

const Parameter = (props) => {
    return (
        <div className={s.parameterBlock}>
            <div className={s.headParam}>
                {props.headParam}
            </div>
            <textarea className={s.midParam} placeholder={props.midParam}/>
            <div className={s.endParam}>
                {props.endParam}
            </div>
        </div>
    );
}

export default Parameter;