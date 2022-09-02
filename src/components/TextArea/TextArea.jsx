import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '..';
import styles from './TextArea.scss';

const { textarea } = styles;

export const TextArea = ({ placeholder }) => {
  return (
    <>
      <textarea
        className={textarea}
        name="feedback"
        id="feedback"
        placeholder={placeholder}
      ></textarea>
      <Divider />
    </>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
};
