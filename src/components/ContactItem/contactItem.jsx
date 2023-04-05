import React from "react"; 
import PropTypes from "prop-types";

const ContactItem = ({ name, number}) => {
    return <li>{name}: {number}</li>
}

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}