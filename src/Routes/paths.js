import i18n from '../i18n';
const lang = i18n();
const home = lang.screenGroups.home.screens;
const solutions = lang.screenGroups.solutions.screens;
const us = lang.screenGroups.us.screens;
const legal = lang.screenGroups.legal.screens;
export default {
  HOME: `/${home.home.path}`,
  SECURITY: `/${solutions.security.path}`,
  CONTROL: `/${solutions.control.path}`,
  TRACKING: `/${solutions.tracking.path}`,
  TEAM: `/${us.team.path}`,
  WORK_WITH_US: `/${us.workWithUs.path}`,
  TERMS: `/${legal.terms.path}`,
  PRIVACY: `/${legal.privacy.path}`,
};
