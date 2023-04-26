import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './filter.styled';

const Filter = ({ filterValue, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filterValue} onChange={onChange} />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
