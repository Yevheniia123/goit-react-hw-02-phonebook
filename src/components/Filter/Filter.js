import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label className={s.filter}>
    Find contacts by name
    <input
      type="text"
      className={s.inputFilter}
      value={value}
      onChange={onChange}
    />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
