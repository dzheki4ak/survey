import React, { useState } from 'react';
import { Divider, TextArea } from '../../../../components';
import ChevronDown from '../../../../../images/ChevronDown.svg';
import InfoIcon from '../../../../../images/info.svg';
import { products } from './constants';
import styles from './Bugs.scss';

const {
  fieldset,
  dropMask,
  dropdown,
  dropdownItem,
  fieldsetMod,
  btnGroup,
  probBtn,
  reason,
} = styles;

export const Bugs = () => {
  const [dropOpen, setDropOpen] = useState(false);
  const [count, setCount] = useState(0);

  const onCheck = e => {
    if (e.target.checked === true) {
      setCount(prev => prev + 1);
    } else {
      setCount(prev => prev - 1);
    }
  };

  const onMouseLeave = () => {
    setDropOpen(false);
    setCount(0);
  };

  return (
    <form>
      <span className={reason}>
        Which product(s) did you have an issue with?
        <img src={InfoIcon} alt="info icon" />
      </span>
      <fieldset
        className={`${fieldset} ${dropOpen && fieldsetMod}`}
        onClick={() => setDropOpen(!dropOpen)}
      >
        <div className={dropMask}>
          {dropOpen ? (
            <span>{`${count} products selected`}</span>
          ) : (
            <span>Select Product(s)</span>
          )}
          <img src={ChevronDown} alt="Dropdown Icon" />
        </div>
      </fieldset>
      {dropOpen && (
        <div className={dropdown} onMouseLeave={onMouseLeave}>
          {products.map(item => (
            <div className={dropdownItem} key={item.id}>
              <input type="checkbox" onChange={onCheck} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}
      <Divider />
      <span className={reason}>What was it?</span>
      <div className={btnGroup}>
        <button type="button" className={probBtn}>
          One Major Problem
        </button>
        <button type="button" className={probBtn}>
          Various things
        </button>
      </div>
      <Divider />
      <span className={reason}>
        What problem(s) did you encounter?
        <img src={InfoIcon} alt="info icon" />
      </span>
      <TextArea placeholder="" />
    </form>
  );
};
