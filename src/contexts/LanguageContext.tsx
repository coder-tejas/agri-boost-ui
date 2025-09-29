import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = {
  code: string;
  name: string;
  nativeName: string;
};

export const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
  { code: 'mai', name: 'Maithili', nativeName: 'मैथिली' },
  { code: 'sat', name: 'Santali', nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ' },
  { code: 'ks', name: 'Kashmiri', nativeName: 'کٲشُر' },
  { code: 'kok', name: 'Konkani', nativeName: 'कोंकणी' },
  { code: 'sd', name: 'Sindhi', nativeName: 'سنڌي' },
  { code: 'doi', name: 'Dogri', nativeName: 'डोगरी' },
  { code: 'brx', name: 'Bodo', nativeName: 'बड़ो' },
  { code: 'mni', name: 'Manipuri', nativeName: 'ꯃꯤꯇꯩꯂꯣꯟ' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली' },
  { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्' },
  { code: 'kok', name: 'Konkani', nativeName: 'कोंकणी' },
  { code: 'raj', name: 'Rajasthani', nativeName: 'राजस्थानी' },
  { code: 'bhoj', name: 'Bhojpuri', nativeName: 'भोजपुरी' },
  { code: 'mag', name: 'Magahi', nativeName: 'मगही' },
  { code: 'hne', name: 'Chhattisgarhi', nativeName: 'छत्तीसगढ़ी' },
  { code: 'awa', name: 'Awadhi', nativeName: 'अवधी' },
  { code: 'bgc', name: 'Haryanvi', nativeName: 'हरियाणवी' },
  { code: 'lah', name: 'Lahnda', nativeName: 'لہندا' },
];

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (code: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    return localStorage.getItem('agriboost-language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('agriboost-language', currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const setLanguage = (code: string) => {
    setCurrentLanguage(code);
  };

  const t = (key: string): string => {
    // This will be implemented in the hook
    return key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within LanguageProvider');
  }
  return context;
};
