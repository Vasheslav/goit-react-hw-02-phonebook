import React from "react";
import PropTypes from "prop-types";

const Filter = ({filterValue, onChange}) => {
    return <label>
            Find contacts by name
            <input type="text" value={filterValue} onChange={onChange} />
          </label>
}

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}