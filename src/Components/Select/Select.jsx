import PropTypes from 'prop-types';
import './Select.css'


const Select = ({list, ...prop}) => {
return(
    <select className="select">{
      list.map((x, y)=> <option key={y}>{x}</option> )
    }</select>
);
}

Select.propTypes = {
    className: PropTypes.string,
    list: PropTypes.string 
}

export default Select