import PropTypes from 'prop-types';
import s from './InputTwo.module.css'

const InputTwo = ({type, onChange, placeHolder, ...prop}) => {
    return(
        <input
            className={s.input}
            type={type}
            onChange={onChange}
            placeholder={placeHolder}
        />
    );
}

InputTwo.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string
}
export default InputTwo;