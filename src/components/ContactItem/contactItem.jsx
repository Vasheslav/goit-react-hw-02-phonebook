import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './contactItem.styled';

const ContactItem = ({ name, number, onDelete, id }) => {
  return (
    <Container>
      <li>
        {name}: {number}
      </li>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </Container>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
