import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, TranslationKey } from '@/lib/translations';

export const useTranslation = () => {
  const { currentLanguage, setLanguage } = useLanguageContext();

  const t = (key: TranslationKey): string => {
    const languageTranslations = translations[currentLanguage];
    if (!languageTranslations) {
      // Fallback to English
      return translations['en']?.[key] || key;
    }
    
    return languageTranslations[key] || translations['en']?.[key] || key;
  };

  return {
    t,
    currentLanguage,
    setLanguage,
  };
};
