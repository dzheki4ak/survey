import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Excl from '../../../images/Excl.svg';
import { surveyAnswers } from './constants';
import { Answer } from './components/Answer';
import styles from './SurveyPage.scss';

const {
  header,
  container,
  rtrnBtnCont,
  content,
  retutnBtn,
  returnText,
  contentHeader,
  contentText,
  textSection,
  chooseSection,
  warningSection,
  btnSection,
  backBtn,
  cncMmbBtn,
  btnSectionMod,
  cncMmbBtnActive,
} = styles;

export const SurveyPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState();

  return (
    <>
      <header className={header}></header>
      <main className={container}>
        <div className={rtrnBtnCont}>
          <Link to="/">
            <div className={retutnBtn}>{'‹'}</div>
          </Link>

          <p className={returnText}>Cancellation Survey</p>
        </div>
        <div className={content}>
          <section className={textSection}>
            <h2 className={contentHeader}>We’re sad to see you go... </h2>
            <p className={contentText}>
              Can you tell us why you want to cancel your membership?
            </p>
          </section>
          <section className={chooseSection}>
            {surveyAnswers.map(item => (
              <Answer
                id={item.id}
                text={item.text}
                key={item.id}
                selectedId={selectedAnswer}
                selectedHandler={setSelectedAnswer}
              />
            ))}
          </section>
          <section className={warningSection}>
            <img src={Excl} alt="Excl mark" />
            <p>
              Are you absolutely sure you want to cancel? If you do you'll lose
              access to so many cool things. And you'll lose the chance to stay
              on this plan at the same cost ongoing (regardless of future price
              increases).
            </p>
          </section>
          <section
            className={`${btnSection} ${selectedAnswer && btnSectionMod}`}
          >
            <Link to="/">
              <button className={backBtn}>{'⬅ Back'}</button>
            </Link>
            <button
              className={`${cncMmbBtn} ${selectedAnswer && cncMmbBtnActive}`}
              disabled={!selectedAnswer}
            >
              Cancel Membership
            </button>
          </section>
        </div>
      </main>
    </>
  );
};
