import PropTypes from 'prop-types';
import './select.css'


const select = ({list}) => {
return(
    <select className="select">{
      list.map((x, y)=> <option key={y}>{x}</option> )
    }</select>
);
}

select.propTypes = {
    className: PropTypes.string,
    list: PropTypes.string 
}

export default select