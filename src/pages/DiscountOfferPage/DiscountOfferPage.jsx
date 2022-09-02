import React, { useState } from 'react';
import styles from './DiscountOfferPage.scss';
import { Offer } from './components/Offer';
import { Applied } from './components/Applied';

const { discPage, offerSection } = styles;

export const DiscountOfferPage = () => {
  const [acceptDsc, setAcceptDsc] = useState(false);

  return (
    <>
      <main className={discPage}>
        <div className={offerSection}>
          {!acceptDsc ? <Offer onAccept={setAcceptDsc} /> : <Applied />}
        </div>
      </main>
    </>
  );
};
