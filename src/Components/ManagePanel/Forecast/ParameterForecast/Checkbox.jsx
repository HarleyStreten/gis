import PropTypes from 'prop-types';
import s from "./Checkbox.module.css"

const Checkbox = (props, {onChange}) => {
    return (
        <div>
            <label className={s.checkLabel}>
            <input
                className={s.check}
                type="checkbox"
                onChange={onChange}/>
                {props.name}</label>
        </div>
    );
}

Checkbox.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func
}
export default Checkbox;
