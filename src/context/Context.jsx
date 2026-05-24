import React, { useState } from 'react';
import MensajeIngles from '../language/en.json';
import MensajeEspañol from '../language/es.json';
import { IntlProvider } from 'react-intl';

const LangProvider = ({ children }) => {
  let locale = 'en-US';
  let messages = MensajeIngles;
  const stored = localStorage.getItem('lang');

  if (stored === 'es-ES') {
    locale = 'es-ES';
    messages = MensajeEspañol;
  } else if (stored === 'en-US') {
    locale = 'en-US';
    messages = MensajeIngles;
  }

  const [intlMessages] = useState(messages);
  const [intlLocale] = useState(locale);

  return (
    <IntlProvider locale={intlLocale} messages={intlMessages}>
      {children}
    </IntlProvider>
  );
};

export { LangProvider };
