import PropTypes from 'prop-types';
import './select.css'


const search = ({text}) => {
return(
    <input className="search" type="textbox" placeholder={text}/>
);
}

search.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
}
export default search;