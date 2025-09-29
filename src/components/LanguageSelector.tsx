import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguageContext, supportedLanguages } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguageContext();

  const currentLang = supportedLanguages.find(lang => lang.code === currentLanguage);

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Select value={currentLanguage} onValueChange={setLanguage}>
        <SelectTrigger className="w-[180px] h-9 bg-background">
          <SelectValue>
            {currentLang ? currentLang.nativeName : 'English'}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="max-h-[400px] overflow-y-auto">
          {supportedLanguages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              <div className="flex flex-col items-start">
                <span className="font-medium">{language.nativeName}</span>
                <span className="text-xs text-muted-foreground">{language.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
