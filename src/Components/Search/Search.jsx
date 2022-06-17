import PropTypes from 'prop-types';
import './Search.css'


const Search = ({text, ...prop}) => {
return(
    <input className="search" type="textbox" placeholder={text}/>
);
}

Search.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
}
export default Search;