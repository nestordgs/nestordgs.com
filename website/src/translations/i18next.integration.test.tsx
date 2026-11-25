import React from 'react';
import { execFileSync } from 'node:child_process';
import { act, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next, useTranslation } from 'react-i18next';
import english from './en.json';
import spanish from './es.json';

vi.unmock('i18next');
vi.unmock('react-i18next');

test('real React translations update when switching between English and Spanish', async () => {
  const instance = i18next.createInstance();
  await instance.use(initReactI18next).init({
    resources: { en: english, es: spanish },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

  function Translation() {
    const { t } = useTranslation();
    return <p>{t('menu.aptitud')}</p>;
  }

  render(<I18nextProvider i18n={instance}><Translation /></I18nextProvider>);
  expect(screen.getByText('Skills')).toBeInTheDocument();

  await act(async () => { await instance.changeLanguage('es'); });
  expect(screen.getByText('Habilidades')).toBeInTheDocument();

  await act(async () => { await instance.changeLanguage('en'); });
  expect(screen.getByText('Skills')).toBeInTheDocument();
});

test('deep resource merges do not corrupt shared built-in functions', () => {
  // Isolate the advisory payload so a regression cannot poison the test runner.
  execFileSync(process.execPath, ['-e', `
    const assert = require('node:assert/strict');
    const i18next = require('i18next').createInstance();
    (async () => {
      await i18next.init({ lng: 'en', resources: { en: { translation: {} } } });
      i18next.addResourceBundle('en', 'translation', {
        hasOwnProperty: { call: 'corrupted' }
      }, true, true);
      assert.equal(Object.prototype.hasOwnProperty.call, Function.prototype.call);
      assert.equal(Object.prototype.hasOwnProperty.call({ safe: true }, 'safe'), true);
    })().catch(error => { console.error(error); process.exitCode = 1; });
  `], { cwd: process.cwd(), stdio: 'pipe' });
});
