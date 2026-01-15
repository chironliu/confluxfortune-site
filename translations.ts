
import { TranslationSchema } from './types';

export const translations: Record<'EN' | 'TC', TranslationSchema> = {
  EN: {
    nav: {
      about: "Heritage",
      services: "Expertise",
      contact: "Connect"
    },
    hero: {
      title: "Conflux Fortune",
      subtitle: "Based in Hong Kong, building a trusted wealth haven for Greater Bay Area investors.",
      cta: "Discover the Future of Wealth"
    },
    segments: {
      insurance: {
        title: "Insurance Brokerage",
        desc: "Precision-engineered risk management and protection strategies for global asset preservation."
      },
      familyOffice: {
        title: "Family Office",
        desc: "Institutional-grade wealth governance for multi-generational success and legacy planning."
      },
      funds: {
        title: "Asset Management",
        desc: "Strategic fund structures leveraging alternative investments and quantitative insights."
      },
      fintech: {
        title: "FinTech Innovation",
        desc: "Next-gen digital solutions bridging traditional finance with the transparency of Web3."
      }
    },
    footer: {
      address: "Hong Kong Finance Center, Central, Hong Kong",
      contact: "contact@confluxfortune.com",
      rights: "© 2024 Conflux Fortune LIMITED. All Rights Reserved."
    }
  },
  TC: {
    nav: {
      about: "品牌傳承",
      services: "專業板塊",
      contact: "聯絡我們"
    },
    hero: {
      title: "灣匯財富",
      subtitle: "立足香港，為大灣區投資者搭建值得信賴的財富港灣",
      cta: "探索資產價值"
    },
    segments: {
      insurance: {
        title: "保險代理業務",
        desc: "全球風險精算與全方位的財富安全堡壘，為跨國資產的穩健增長保駕護航。"
      },
      familyOffice: {
        title: "家族辦公室",
        desc: "量身定制的家族治理架構與財富傳承，將東方價值觀與全球視野完美結合。"
      },
      funds: {
        title: "基金管理與投資",
        desc: "多元化的基金組合與創新的資產管理模型，旨在捕捉全球市場的超額收益。"
      },
      fintech: {
        title: "金融科技生態",
        desc: "以人工智能與數字技術賦能金融服務，重新定義交易的速度、安全與透明度。"
      }
    },
    footer: {
      address: "香港中環金融中心大廈",
      contact: "contact@confluxfortune.com",
      rights: "© 2024 灣匯財富 Conflux Fortune LIMITED. 版權所有。"
    }
  }
};
