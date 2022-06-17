import PropTypes from 'prop-types';
import s from './ButtonOutline.module.css'

const Button = ({text, onClick}) => {
    return(
        <button
            onClick={onClick}
            className={s.buttonMy}>
            {text}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}
export default Button;