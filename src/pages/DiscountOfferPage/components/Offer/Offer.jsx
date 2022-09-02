import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Offer.scss';
import Label from '../../../../../images/Label.svg';

const {
  offerHead,
  offerContent,
  discImg,
  msgSection,
  offerHeader,
  offerMsgB,
  offerMsg,
  btnGroup,
  acceptBtn,
  denyBtn,
} = styles;

export const Offer = ({ onAccept }) => {
  return (
    <>
      <div className={offerHead}>
        <span>✕</span>
      </div>
      <div className={offerContent}>
        <img className={discImg} src={Label} alt="Discount Label"></img>
        <div className={msgSection}>
          <h3 className={offerHeader}>
            Before You Go...
            <br />
            Would 50% Off For 6 Months Help?
          </h3>
          <p className={offerMsg}>
            We know things REALLY suck in the world right now - and many
            businesses and freelancers are struggling to stay afloat during this
            COVID-19 crisis.
          </p>
          <p className={offerMsgB}>
            So if you could use the extra cushion, grab 50% off for 6 months.
          </p>
          <p className={offerMsg}>We hope you’re staying safe and healthy!</p>
          <div className={btnGroup}>
            <button onClick={() => onAccept(true)} className={acceptBtn}>
              50 % OFF For 6 Months
            </button>
            <Link to="/survey">
              <button className={denyBtn}>No, thanks! I’ll cancel</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
