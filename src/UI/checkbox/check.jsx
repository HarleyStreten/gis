import PropTypes from 'prop-types';
import './check.css'

const Checkbox = ({onChange}) => {
return(
    <input 
    className="check" 
    type="checkbox"
    onChange={onChange} />
);
}

Checkbox.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func
}
export default Checkbox;
