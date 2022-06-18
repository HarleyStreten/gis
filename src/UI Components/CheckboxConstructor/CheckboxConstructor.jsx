import PropTypes from 'prop-types';
import "./CheckboxConstructor.css"

const Checkbox = (props, {onChange}) => {
    return (
        <div>
            <label className="checkLabel">
                <input
                    className="check"
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
