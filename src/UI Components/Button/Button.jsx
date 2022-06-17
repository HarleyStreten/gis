import PropTypes from 'prop-types';
import './button.css'


const Button = ({text, onClick}) => {
    return(
        <button
            onClick={onClick}
            className="buttonMy">
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