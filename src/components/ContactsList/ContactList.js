import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ filterName, deleteId }) => (
  <ul>
    {filterName.map(item => (
      <li key={item.id}>
        <span>
          {item.name} : {item.number}
        </span>

        <button
          type="button"
          className={s.deleteitem}
          onClick={() => {
            deleteId(item.id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  filterName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteId: PropTypes.func.isRequired,
};

export default ContactList;
