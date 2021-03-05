import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ children, title }) => (
  <>
    {title && <h2>{title}</h2>}
    {children}
  </>
);
SectionTitle.defaultProps = {
  title: '',
};
SectionTitle.propTypes = {
  title: PropTypes.string,
};
export default SectionTitle;
