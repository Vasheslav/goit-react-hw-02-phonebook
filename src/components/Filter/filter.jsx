import React from "react";

const Filter = ({filterValue, onChange}) => {
    return <label>
            Find contacts by name
            <input type="text" value={filterValue} onChange={onChange} />
          </label>
}

export default Filter;