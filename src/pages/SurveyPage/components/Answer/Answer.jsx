import React from 'react';
import PropTypes from 'prop-types';
import styles from './Answer.scss';

import { Bugs } from '../Bugs/Bugs';
import { TextArea } from '../../../../components';

const { answerInactive, answerAct } = styles;

export const Answer = ({ id, text, selectedId, selectedHandler }) => {
  const checkHandler = e => {
    selectedHandler(id);
  };

  const isChecked = selectedId === id;

  return (
    <>
      <div className={`${answerInactive} ${isChecked && answerAct}`}>
        <input
          id={id}
          name="choose"
          value={text}
          type="radio"
          onChange={checkHandler}
        />
        <label htmlFor={id}>{text}</label>
      </div>
      {id === 2 && isChecked && (
        <TextArea placeholder="What is the better solution? If you don’t mind sharing. Your feedback is much appreaciated!" />
      )}
      {id === 4 && isChecked && <Bugs />}
    </>
  );
};

Answer.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  selectedId: PropTypes.number || PropTypes.any,
  selectedHandler: PropTypes.func,
};
