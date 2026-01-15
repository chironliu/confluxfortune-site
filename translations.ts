
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
      rights: "© 2026 Conflux Fortune LIMITED. All Rights Reserved."
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "Privacy Policy",
      effectiveDate: "January 15, 2026",
      lastUpdated: "January 15, 2026",
      sections: {
        introduction: {
          title: "1. Introduction",
          content: "Conflux Fortune LIMITED (\"we\", \"the Company\") values your privacy rights. This Privacy Policy explains how we collect, use, disclose and protect your personal data. By using our services, you agree to the contents of this policy."
        },
        informationWeCollect: {
          title: "2. Information We Collect",
          content: "We may collect the following types of personal data:",
          items: [
            "Contact information (email address, phone number)",
            "Personal information (name, title, company name)",
            "Browsing and usage data (IP address, device information, browsing history)",
            "Any other information you voluntarily provide"
          ]
        },
        howWeUse: {
          title: "3. How We Use Your Information",
          content: "We use the collected information for the following purposes:",
          items: [
            "To provide and improve our services",
            "To communicate with you, including responding to your inquiries",
            "To send marketing materials (if you consent)",
            "To analyze website usage to improve user experience",
            "To comply with legal and regulatory requirements"
          ]
        },
        dataProtection: {
          title: "4. Data Protection",
          content: "We take appropriate technical and organizational measures to protect your personal data from unauthorized access, use, modification, or disclosure. However, please note that no internet transmission method is 100% secure."
        },
        yourRights: {
          title: "5. Your Rights",
          content: "Under the Personal Data (Privacy) Ordinance of Hong Kong and other applicable laws, you have the following rights:",
          items: [
            "Access to the personal data we hold about you",
            "Request correction of inaccurate data",
            "Request deletion of your personal data",
            "Object to or restrict the processing of your data",
            "Withdraw consent (where applicable)"
          ]
        },
        contactUs: {
          title: "6. Contact Us",
          content: "If you have any questions about this Privacy Policy or inquiries about your data privacy, please contact us via:",
          email: "privacy@confluxfortune.com",
          address: "Hong Kong"
        },
        changes: {
          title: "7. Changes to This Policy",
          content: "We may update this Privacy Policy from time to time. We will post any changes on this page and update the \"Effective Date\" and \"Last Updated\" sections. We recommend that you review this policy regularly to stay informed."
        }
      }
    },
    terms: {
      title: "Terms of Service",
      subtitle: "Terms of Service",
      effectiveDate: "January 15, 2026",
      lastUpdated: "January 15, 2026",
      importantNotice: "IMPORTANT NOTICE: Please read this agreement carefully. By using our services, you agree to be bound by these terms.",
      sections: {
        acceptance: {
          title: "1. Acceptance of Terms",
          content: "Welcome to the services provided by Conflux Fortune LIMITED (\"we\", \"the Company\"). By accessing or using our website and related services, you agree to be bound by all terms and conditions of this Terms of Service (\"this Agreement\"). If you do not agree to any terms of this Agreement, please do not use our services."
        },
        services: {
          title: "2. Services Provided",
          content: "Conflux Fortune LIMITED provides the following services through its website:",
          items: [
            "Asset protection and wealth management consulting",
            "Family office services",
            "Investment fund management",
            "Fintech solutions",
            "Related professional consulting services"
          ]
        },
        userResponsibilities: {
          title: "3. User Responsibilities",
          content: "When using our services, you agree to:",
          items: [
            "Provide accurate, complete and up-to-date information",
            "Protect your account password and information security",
            "Not use the services for illegal or unauthorized activities",
            "Comply with all applicable laws and regulations",
            "Not interfere with or disrupt the operation of services",
            "Not attempt unauthorized access to any system or information"
          ]
        },
        disclaimer: {
          title: "4. Disclaimer of Warranties",
          content: "This service is provided on an \"as is\" and \"as available\" basis without any express or implied warranties, including but not limited to:",
          items: [
            "Interruptions or discontinuities of the service",
            "Accuracy, reliability or completeness of information",
            "The service will meet your requirements",
            "The service will be uninterrupted, timely, secure or error-free"
          ]
        },
        limitation: {
          title: "5. Limitation of Liability",
          content: "To the maximum extent permitted by law, Conflux Fortune LIMITED shall not be liable for:",
          items: [
            "Any direct, indirect, incidental, special or consequential damages",
            "Loss of profits, data loss or loss of business opportunities",
            "Damages arising from use or inability to use the service",
            "Damages caused by force majeure, third-party actions or other causes beyond our control"
          ]
        },
        riskDisclaimer: {
          title: "6. Risk Disclaimer",
          warning: "Investment Risk Warning",
          content: "Investment involves risk. Past performance is not indicative of future results. All investment decisions should be based on your own financial situation, investment objectives and risk tolerance. We strongly recommend consulting professional advisors before making any investment decisions."
        },
        intellectualProperty: {
          title: "7. Intellectual Property",
          content: "All content of this website, including but not limited to text, graphics, logos, images, software and code, is the property of Conflux Fortune LIMITED or its licensors and is protected by intellectual property laws. Use, reproduction, modification or distribution in any manner without our prior written consent is prohibited."
        },
        termination: {
          title: "8. Termination",
          content: "We reserve the right to suspend or terminate your access to the services at any time without prior notice, including but not limited to violations of this Agreement or legal and regulatory requirements. Upon termination, all your rights to use will immediately terminate."
        },
        governingLaw: {
          title: "9. Governing Law and Jurisdiction",
          content: "This Agreement shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region. Any disputes arising from or in connection with this Agreement shall be subject to the jurisdiction of Hong Kong courts."
        },
        changes: {
          title: "10. Changes to Terms",
          content: "We reserve the right to modify the terms of this Agreement at any time. Modified terms will be published on the website and will become effective upon publication. Continued use of the service indicates your acceptance of the modified terms."
        },
        contactUs: {
          title: "11. Contact Us",
          content: "If you have any questions about this Agreement, please contact us via:",
          email: "legal@confluxfortune.com",
          address: "Hong Kong"
        }
      }
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
      rights: "© 2026 灣匯財富 Conflux Fortune LIMITED. 版權所有。"
    },
    privacy: {
      title: "隱私條款",
      subtitle: "隱私條款",
      effectiveDate: "2026年1月15日",
      lastUpdated: "2026年1月15日",
      sections: {
        introduction: {
          title: "1. 簡介",
          content: "Conflux Fortune LIMITED(「我們」、「本公司」)重視您的隱私權利。本隱私政策說明我們如何收集、使用、披露及保護您的個人資料。使用我們的服務即表示您同意本政策的內容。"
        },
        informationWeCollect: {
          title: "2. 我們收集的資料",
          content: "我們可能收集以下類型的個人資料:",
          items: [
            "聯絡資料(電郵地址、電話號碼)",
            "個人資料(姓名、職稱、公司名稱)",
            "瀏覽和使用數據(IP地址、設備信息、瀏覽歷史)",
            "您自願提供的任何其他資料"
          ]
        },
        howWeUse: {
          title: "3. 我們如何使用您的資料",
          content: "我們使用收集的資料用於以下目的:",
          items: [
            "提供和改進我們的服務",
            "與您溝通,包括回應您的查詢",
            "發送市場推廣資料(如您同意)",
            "分析網站使用情況以改善用戶體驗",
            "遵守法律法規要求"
          ]
        },
        dataProtection: {
          title: "4. 資料保護",
          content: "我們採取適當的技術和組織措施保護您的個人資料,防止未經授權的存取、使用、修改或披露。然而,請注意沒有任何互聯網傳輸方法是100%安全的。"
        },
        yourRights: {
          title: "5. 您的權利",
          content: "根據香港《個人資料(私隱)條例》及其他適用法律,您享有以下權利:",
          items: [
            "查閱我們持有的關於您的個人資料",
            "要求更正不準確的資料",
            "要求刪除您的個人資料",
            "反對或限制處理您的資料",
            "撤回同意(如適用)"
          ]
        },
        contactUs: {
          title: "6. 聯絡我們",
          content: "如您對本隱私政策有任何疑問或關於您的資料隱私的查詢,請透過以下方式聯絡我們:",
          email: "privacy@confluxfortune.com",
          address: "香港"
        },
        changes: {
          title: "7. 政策變更",
          content: "我們可能會不時更新本隱私政策。我們會在本頁面公布任何變更,並更新「生效日期」和「最後更新日期」。建議您定期查看本政策以了解最新內容。"
        }
      }
    },
    terms: {
      title: "用戶協議",
      subtitle: "用戶協議",
      effectiveDate: "2026年1月15日",
      lastUpdated: "2026年1月15日",
      importantNotice: "重要聲明:請仔細閱讀本協議。使用我們的服務即表示您同意受本協約條款約束。",
      sections: {
        acceptance: {
          title: "1. 接受條款",
          content: "歡迎使用 Conflux Fortune LIMITED(「我們」、「本公司」)提供的服務。通過訪問或使用我們的網站及相關服務,您同意受本用戶協議(「本協議」)的所有條款和條件約束。如果您不同意本協議的任何條款,請勿使用我們的服務。"
        },
        services: {
          title: "2. 提供的服務",
          content: "Conflux Fortune LIMITED 通過其網站提供以下服務:",
          items: [
            "資產保護和財富管理諮詢",
            "家族辦公室服務",
            "投資基金管理",
            "金融科技解決方案",
            "相關專業諮詢服務"
          ]
        },
        userResponsibilities: {
          title: "3. 用戶責任",
          content: "使用我們的服務時,您同意:",
          items: [
            "提供準確、完整和最新的資訊",
            "保護您的帳戶密碼和資訊安全",
            "不得使用服務進行非法或未經授權的活動",
            "遵守所有適用的法律法規",
            "不干擾或破壞服務的運作",
            "不試試未經授權存取任何系統或資訊"
          ]
        },
        disclaimer: {
          title: "4. 免責聲明",
          content: "本服務按「現狀」和「可用」基礎提供,不提供任何明示或暗示的保證,包括但不限於:",
          items: [
            "服務的中斷或不連續性",
            "資訊的準確性、可靠性或完整性",
            "服務將滿足您的要求",
            "服務將不間斷及時、安全或無錯誤"
          ]
        },
        limitation: {
          title: "5. 責任限制",
          content: "在法律允許的最大範圍內,Conflux Fortune LIMITED 對以下情況不承擔任何責任:",
          items: [
            "任何直接、間接、附帶、特殊或懲罰性損害",
            "利潤損失、資料丟失或商機損失",
            "因使用或無法使用服務而產生的損害",
            "因不可抗力、第三方行為或其他我們無法控制的原因導致的損害"
          ]
        },
        riskDisclaimer: {
          title: "6. 風險免責聲明",
          warning: "投資風險提示",
          content: "投資涉及風險。過往表現並不代表未來結果。所有投資決策應基於您自身的財務狀況、投資目標和風險承受能力。我們強烈建議在做出任何投資決策前諮詢專業顧問。"
        },
        intellectualProperty: {
          title: "7. 知識產權",
          content: "本網站的所有內容,包括但不限於文字、圖形、標誌、圖像、軟件和代碼,均為 Conflux Fortune LIMITED 或其授權方的財產,受知識產權法保護。未經我們事先書面許可,不得以任何方式使用、複製、修改或分發。"
        },
        termination: {
          title: "8. 終止",
          content: "我們保留隨時暫停或終止您對服務的訪問權限的權利,無需事先通知,原因包括但不限於違反本協議或法律法規要求。終止後,您的所有使用權利將立即終止。"
        },
        governingLaw: {
          title: "9. 適用法律和管轄權",
          content: "本協議受香港特別行政區法律管轄,並根據其法律解釋。任何因本協議引起的或與本協議有關的糾紛應提交香港法院管轄。"
        },
        changes: {
          title: "10. 條款變更",
          content: "我們保留隨時修改本協議條款的權利。修改後的條款將在網站上公布,並自公布之日起生效。繼續使用服務即表示您接受修改後的條款。"
        },
        contactUs: {
          title: "11. 聯絡我們",
          content: "如您對本協議有任何疑問,請透過以下方式聯絡我們:",
          email: "legal@confluxfortune.com",
          address: "香港"
        }
      }
    }
  }
};
