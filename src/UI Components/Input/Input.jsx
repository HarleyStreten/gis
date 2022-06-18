import PropTypes from 'prop-types';
import s from './Input.module.css'

const Input = ({type, onChange, placeHolder, ...prop}) => {
    return(
        <input
            className={s.input}
            type={type}
            onChange={onChange}
            placeholder={placeHolder}
        />
    );
}

Input.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string
}
export default Input;