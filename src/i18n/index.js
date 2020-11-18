import langs from './langs';
const i18n = (lang) => {
  if (lang) {
    const language = langs[lang]; // fix this!
    return language;
  } else return langs[0];
};

export default i18n;
