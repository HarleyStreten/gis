import PropTypes from 'prop-types';
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const Multiselect = ({list}) => {
    const [selected, setSelected] = useState([]);

    return (
        <div>
            <MultiSelect
                className="multiSelect"
                options={list}
                value={selected}
                onChange={setSelected}
            />
        </div>
    );
};

Multiselect.propTypes = {
    className: PropTypes.string,
    list: PropTypes.string
}
export default Multiselect;