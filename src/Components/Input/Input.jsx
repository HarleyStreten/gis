import PropTypes from 'prop-types';
import './Input.css'

const Input = ({type, onChange, ...prop}) => {
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
