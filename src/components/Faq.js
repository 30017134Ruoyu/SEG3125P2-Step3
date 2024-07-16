import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';
import { useTranslation } from 'react-i18next';
import './Faq.css';

const Faq = () => {
  const { t } = useTranslation();

  return (
    <div className='faq-page'>
      <NavBar />
      <Container className="text-center mt-1">
        <div className="title-container">
        </div>
      </Container>
      <Container>
        <h2 className='back mt-4'>{t('title_faq')}</h2>
      </Container>

      <Container>
        <div className="faq-content">
          <h2>{t('faq_question_1')}</h2>
          <p>{t('faq_answer_1')}</p>

          <h2>{t('faq_question_2')}</h2>
          <p>{t('faq_answer_2')}</p>

          <h2>{t('faq_question_3')}</h2>
          <p>{t('faq_answer_3')}</p>

          <h2>{t('faq_question_4')}</h2>
          <p>{t('faq_answer_4')}</p>
        </div>
      </Container>

      <footer className="footer text-center py-3">{t('footer_text')}</footer>
    </div>
  );
};

export default Faq;