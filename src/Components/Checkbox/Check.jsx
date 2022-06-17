import PropTypes from 'prop-types';
import './Check.css'

const Checkbox = ({onChange, ...prop}) => {
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
