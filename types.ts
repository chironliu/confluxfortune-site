
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
}
