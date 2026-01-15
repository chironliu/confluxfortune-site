
export type Language = 'EN' | 'TC';

export interface TranslationSchema {
  nav: {
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  segments: {
    insurance: {
      title: string;
      desc: string;
    };
    familyOffice: {
      title: string;
      desc: string;
    };
    funds: {
      title: string;
      desc: string;
    };
    fintech: {
      title: string;
      desc: string;
    };
  };
  footer: {
    address: string;
    contact: string;
    rights: string;
  };
  privacy: {
    title: string;
    subtitle: string;
    effectiveDate: string;
    lastUpdated: string;
    sections: {
      introduction: { title: string; content: string };
      informationWeCollect: { title: string; content: string; items: string[] };
      howWeUse: { title: string; content: string; items: string[] };
      dataProtection: { title: string; content: string };
      yourRights: { title: string; content: string; items: string[] };
      contactUs: { title: string; content: string; email: string; address: string };
      changes: { title: string; content: string };
    };
  };
  terms: {
    title: string;
    subtitle: string;
    effectiveDate: string;
    lastUpdated: string;
    importantNotice: string;
    sections: {
      acceptance: { title: string; content: string };
      services: { title: string; content: string; items: string[] };
      userResponsibilities: { title: string; content: string; items: string[] };
      disclaimer: { title: string; content: string; items: string[] };
      limitation: { title: string; content: string; items: string[] };
      riskDisclaimer: { title: string; warning: string; content: string };
      intellectualProperty: { title: string; content: string };
      termination: { title: string; content: string };
      governingLaw: { title: string; content: string };
      changes: { title: string; content: string };
      contactUs: { title: string; content: string; email: string; address: string };
    };
  };
}
