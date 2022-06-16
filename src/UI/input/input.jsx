import PropTypes from 'prop-types';
import './input.css'

const Input = ({type, onChange}) => {
return(
    <input 
    className="input" 
    type={type}
    onChange={onChange} />
);
}

Input.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string
}
export default Input;
