// Translation keys and content for all supported languages

export type TranslationKey = 
  | 'app.name'
  | 'nav.uploadTest'
  | 'nav.questionnaire'
  | 'nav.back'
  | 'nav.backToHome'
  | 'nav.backToUpload'
  | 'nav.backToForm'
  | 'landing.hero.title'
  | 'landing.hero.subtitle'
  | 'landing.hero.cta'
  | 'landing.hero.learnMore'
  | 'landing.features.title'
  | 'landing.features.subtitle'
  | 'landing.feature1.title'
  | 'landing.feature1.description'
  | 'landing.feature1.button'
  | 'landing.feature2.title'
  | 'landing.feature2.description'
  | 'landing.feature2.button'
  | 'landing.feature3.title'
  | 'landing.feature3.description'
  | 'landing.feature3.button'
  | 'landing.cta.title'
  | 'landing.cta.subtitle'
  | 'landing.cta.button'
  | 'landing.footer.copyright'
  | 'upload.title'
  | 'upload.step1'
  | 'upload.step2'
  | 'upload.step3'
  | 'upload.cardTitle'
  | 'upload.cardDescription'
  | 'upload.dropzone.title'
  | 'upload.dropzone.subtitle'
  | 'upload.dropzone.button'
  | 'upload.dropzone.support'
  | 'upload.uploading'
  | 'upload.uploadedFiles'
  | 'upload.continueButton'
  | 'questionnaire.title'
  | 'questionnaire.uploadComplete'
  | 'questionnaire.fillQuestionnaire'
  | 'questionnaire.getResults'
  | 'questionnaire.step'
  | 'questionnaire.of'
  | 'questionnaire.complete'
  | 'questionnaire.step1.title'
  | 'questionnaire.step1.description'
  | 'questionnaire.location.label'
  | 'questionnaire.location.placeholder'
  | 'questionnaire.state.label'
  | 'questionnaire.state.placeholder'
  | 'questionnaire.landSize.label'
  | 'questionnaire.landSize.placeholder'
  | 'questionnaire.soilType.label'
  | 'questionnaire.soilType.placeholder'
  | 'questionnaire.step2.title'
  | 'questionnaire.step2.description'
  | 'questionnaire.cropType.label'
  | 'questionnaire.cropType.placeholder'
  | 'questionnaire.previousYield.label'
  | 'questionnaire.previousYield.placeholder'
  | 'questionnaire.targetYield.label'
  | 'questionnaire.targetYield.placeholder'
  | 'questionnaire.budget.label'
  | 'questionnaire.budget.placeholder'
  | 'questionnaire.step3.title'
  | 'questionnaire.step3.description'
  | 'questionnaire.irrigation.label'
  | 'questionnaire.irrigation.placeholder'
  | 'questionnaire.fertilizer.label'
  | 'questionnaire.fertilizer.placeholder'
  | 'questionnaire.pestIssues.label'
  | 'questionnaire.pestIssues.placeholder'
  | 'questionnaire.step4.title'
  | 'questionnaire.step4.description'
  | 'questionnaire.additionalInfo.label'
  | 'questionnaire.additionalInfo.placeholder'
  | 'questionnaire.review.title'
  | 'questionnaire.previousButton'
  | 'questionnaire.nextButton'
  | 'questionnaire.submitButton'
  | 'results.title'
  | 'results.share'
  | 'results.download'
  | 'results.analysisComplete.title'
  | 'results.analysisComplete.subtitle'
  | 'results.yieldPotential'
  | 'results.soilHealth.title'
  | 'results.recommendedCrops.title'
  | 'results.fertilizer.title'
  | 'results.irrigation.title'
  | 'results.cta.title'
  | 'results.cta.subtitle'
  | 'results.cta.downloadButton'
  | 'results.cta.analyzeButton';

type Translations = {
  [lang: string]: Record<TranslationKey, string>;
};

const englishTranslations: Record<TranslationKey, string> = {
  'app.name': 'AgriBoost',
  'nav.uploadTest': 'Upload Test',
  'nav.questionnaire': 'Questionnaire',
  'nav.back': 'Back',
  'nav.backToHome': 'Back to Home',
  'nav.backToUpload': 'Back to Upload',
  'nav.backToForm': 'Back to Form',
  'landing.hero.title': 'Boost Your Crop Yield with Science',
  'landing.hero.subtitle': 'Transform your farming with AI-powered soil analysis and personalized recommendations. Upload your soil test, answer a few questions, and get expert advice tailored to your land.',
  'landing.hero.cta': 'Get Started',
  'landing.hero.learnMore': 'Learn More',
  'landing.features.title': 'Simple Steps to Better Harvests',
  'landing.features.subtitle': 'Our three-step process helps you make data-driven decisions for your farm',
  'landing.feature1.title': 'Upload Soil Test',
  'landing.feature1.description': 'Simply upload your PDF soil test report. Our system will analyze the key nutrients and pH levels to understand your soil composition.',
  'landing.feature1.button': 'Upload Now',
  'landing.feature2.title': 'Fill Land & Crop Form',
  'landing.feature2.description': 'Answer questions about your location, crop type, land size, irrigation methods, and current farming practices for personalized recommendations.',
  'landing.feature2.button': 'Start Form',
  'landing.feature3.title': 'Get Personalized Advice',
  'landing.feature3.description': 'Receive AI-powered recommendations for fertilizers, irrigation, crop selection, and pest management tailored specifically to your land and goals.',
  'landing.feature3.button': 'View Sample Report',
  'landing.cta.title': 'Ready to Boost Your Harvest?',
  'landing.cta.subtitle': 'Join thousands of farmers who have increased their yields with our science-backed recommendations.',
  'landing.cta.button': 'Start Your Analysis',
  'landing.footer.copyright': '© 2024 AgriBoost. Empowering farmers with science-driven insights.',
  'upload.title': 'Upload Soil Test Report',
  'upload.step1': 'Upload Soil Test',
  'upload.step2': 'Fill Questionnaire',
  'upload.step3': 'Get Results',
  'upload.cardTitle': 'Upload Your Soil Test Report',
  'upload.cardDescription': "Upload a PDF file of your soil test report. We'll analyze the nutrient levels, pH, and other key indicators.",
  'upload.dropzone.title': 'Drop your soil test PDF here',
  'upload.dropzone.subtitle': 'or click to browse files',
  'upload.dropzone.button': 'Choose Files',
  'upload.dropzone.support': 'Supports PDF files up to 10MB',
  'upload.uploading': 'Uploading...',
  'upload.uploadedFiles': 'Uploaded Files',
  'upload.continueButton': 'Continue to Questionnaire',
  'questionnaire.title': 'Farmer Questionnaire',
  'questionnaire.uploadComplete': 'Upload Complete',
  'questionnaire.fillQuestionnaire': 'Fill Questionnaire',
  'questionnaire.getResults': 'Get Results',
  'questionnaire.step': 'Step',
  'questionnaire.of': 'of',
  'questionnaire.complete': 'Complete',
  'questionnaire.step1.title': 'Location & Land Details',
  'questionnaire.step1.description': 'Tell us about your farm location and land characteristics',
  'questionnaire.location.label': 'Farm Location (City/District)',
  'questionnaire.location.placeholder': 'e.g., Punjab, Maharashtra',
  'questionnaire.state.label': 'State',
  'questionnaire.state.placeholder': 'Select your state',
  'questionnaire.landSize.label': 'Land Size (in acres)',
  'questionnaire.landSize.placeholder': 'e.g., 5.5',
  'questionnaire.soilType.label': 'Soil Type',
  'questionnaire.soilType.placeholder': 'Select soil type',
  'questionnaire.step2.title': 'Crop & Farming Details',
  'questionnaire.step2.description': 'Information about your crops and current farming practices',
  'questionnaire.cropType.label': 'Primary Crop Type',
  'questionnaire.cropType.placeholder': 'Select your main crop',
  'questionnaire.previousYield.label': 'Previous Year Yield (per acre)',
  'questionnaire.previousYield.placeholder': 'e.g., 25 quintals',
  'questionnaire.targetYield.label': 'Target Yield (per acre)',
  'questionnaire.targetYield.placeholder': 'e.g., 35 quintals',
  'questionnaire.budget.label': 'Budget for Improvements (₹)',
  'questionnaire.budget.placeholder': 'e.g., 50000',
  'questionnaire.step3.title': 'Irrigation & Fertilization',
  'questionnaire.step3.description': 'Details about your current irrigation and fertilization methods',
  'questionnaire.irrigation.label': 'Irrigation Method',
  'questionnaire.irrigation.placeholder': 'Select irrigation method',
  'questionnaire.fertilizer.label': 'Current Fertilizer Use',
  'questionnaire.fertilizer.placeholder': 'Select fertilizer practice',
  'questionnaire.pestIssues.label': 'Common Pest/Disease Issues',
  'questionnaire.pestIssues.placeholder': 'Describe any recurring pest problems, diseases, or crop challenges you face...',
  'questionnaire.step4.title': 'Additional Information',
  'questionnaire.step4.description': 'Any other details that might help us provide better recommendations',
  'questionnaire.additionalInfo.label': 'Additional Notes (Optional)',
  'questionnaire.additionalInfo.placeholder': 'Share any other information about your farming practices, challenges, or goals...',
  'questionnaire.review.title': 'Review Your Information',
  'questionnaire.previousButton': 'Previous',
  'questionnaire.nextButton': 'Next Step',
  'questionnaire.submitButton': 'Get My Recommendations',
  'results.title': 'Your AgriBoost Report',
  'results.share': 'Share',
  'results.download': 'Download PDF',
  'results.analysisComplete.title': 'Analysis Complete!',
  'results.analysisComplete.subtitle': 'Your personalized farming recommendations are ready',
  'results.yieldPotential': 'Yield Improvement Potential',
  'results.soilHealth.title': 'Soil Health Analysis',
  'results.recommendedCrops.title': 'Recommended Crops',
  'results.fertilizer.title': 'Fertilizer Recommendations',
  'results.irrigation.title': 'Irrigation Plan',
  'results.cta.title': 'Ready to Implement These Recommendations?',
  'results.cta.subtitle': 'Start with the high-priority fertilizer applications and consider upgrading to drip irrigation for maximum yield improvement.',
  'results.cta.downloadButton': 'Download Full Report',
  'results.cta.analyzeButton': 'Analyze Another Field',
};

const hindiTranslations: Record<TranslationKey, string> = {
  'app.name': 'एग्रीबूस्ट',
  'nav.uploadTest': 'टेस्ट अपलोड करें',
  'nav.questionnaire': 'प्रश्नावली',
  'nav.back': 'वापस',
  'nav.backToHome': 'होम पर वापस जाएं',
  'nav.backToUpload': 'अपलोड पर वापस जाएं',
  'nav.backToForm': 'फॉर्म पर वापस जाएं',
  'landing.hero.title': 'विज्ञान के साथ अपनी फसल की पैदावार बढ़ाएं',
  'landing.hero.subtitle': 'AI-संचालित मिट्टी विश्लेषण और व्यक्तिगत सिफारिशों के साथ अपनी खेती को बदलें। अपना मिट्टी परीक्षण अपलोड करें, कुछ सवालों के जवाब दें, और अपनी जमीन के अनुरूप विशेषज्ञ सलाह प्राप्त करें।',
  'landing.hero.cta': 'शुरू करें',
  'landing.hero.learnMore': 'और जानें',
  'landing.features.title': 'बेहतर फसल के लिए सरल कदम',
  'landing.features.subtitle': 'हमारी तीन-चरणीय प्रक्रिया आपको अपने खेत के लिए डेटा-आधारित निर्णय लेने में मदद करती है',
  'landing.feature1.title': 'मिट्टी परीक्षण अपलोड करें',
  'landing.feature1.description': 'बस अपनी मिट्टी परीक्षण रिपोर्ट की PDF अपलोड करें। हमारा सिस्टम आपकी मिट्टी की संरचना को समझने के लिए प्रमुख पोषक तत्वों और pH स्तरों का विश्लेषण करेगा।',
  'landing.feature1.button': 'अभी अपलोड करें',
  'landing.feature2.title': 'भूमि और फसल फॉर्म भरें',
  'landing.feature2.description': 'व्यक्तिगत सिफारिशों के लिए अपने स्थान, फसल के प्रकार, भूमि के आकार, सिंचाई के तरीकों और वर्तमान खेती प्रथाओं के बारे में सवालों के जवाब दें।',
  'landing.feature2.button': 'फॉर्म शुरू करें',
  'landing.feature3.title': 'व्यक्तिगत सलाह प्राप्त करें',
  'landing.feature3.description': 'अपनी जमीन और लक्ष्यों के अनुरूप उर्वरकों, सिंचाई, फसल चयन और कीट प्रबंधन के लिए AI-संचालित सिफारिशें प्राप्त करें।',
  'landing.feature3.button': 'नमूना रिपोर्ट देखें',
  'landing.cta.title': 'अपनी फसल को बढ़ाने के लिए तैयार हैं?',
  'landing.cta.subtitle': 'हमारी विज्ञान-आधारित सिफारिशों के साथ अपनी पैदावार बढ़ाने वाले हजारों किसानों में शामिल हों।',
  'landing.cta.button': 'अपना विश्लेषण शुरू करें',
  'landing.footer.copyright': '© 2024 एग्रीबूस्ट। विज्ञान-संचालित अंतर्दृष्टि के साथ किसानों को सशक्त बनाना।',
  'upload.title': 'मिट्टी परीक्षण रिपोर्ट अपलोड करें',
  'upload.step1': 'मिट्टी परीक्षण अपलोड करें',
  'upload.step2': 'प्रश्नावली भरें',
  'upload.step3': 'परिणाम प्राप्त करें',
  'upload.cardTitle': 'अपनी मिट्टी परीक्षण रिपोर्ट अपलोड करें',
  'upload.cardDescription': 'अपनी मिट्टी परीक्षण रिपोर्ट की PDF फ़ाइल अपलोड करें। हम पोषक तत्वों के स्तर, pH और अन्य प्रमुख संकेतकों का विश्लेषण करेंगे।',
  'upload.dropzone.title': 'अपनी मिट्टी परीक्षण PDF यहां छोड़ें',
  'upload.dropzone.subtitle': 'या फ़ाइलें ब्राउज़ करने के लिए क्लिक करें',
  'upload.dropzone.button': 'फ़ाइलें चुनें',
  'upload.dropzone.support': '10MB तक की PDF फ़ाइलें समर्थित हैं',
  'upload.uploading': 'अपलोड हो रहा है...',
  'upload.uploadedFiles': 'अपलोड की गई फ़ाइलें',
  'upload.continueButton': 'प्रश्नावली पर जाएं',
  'questionnaire.title': 'किसान प्रश्नावली',
  'questionnaire.uploadComplete': 'अपलोड पूर्ण',
  'questionnaire.fillQuestionnaire': 'प्रश्नावली भरें',
  'questionnaire.getResults': 'परिणाम प्राप्त करें',
  'questionnaire.step': 'चरण',
  'questionnaire.of': 'का',
  'questionnaire.complete': 'पूर्ण',
  'questionnaire.step1.title': 'स्थान और भूमि विवरण',
  'questionnaire.step1.description': 'हमें अपने खेत के स्थान और भूमि की विशेषताओं के बारे में बताएं',
  'questionnaire.location.label': 'खेत का स्थान (शहर/जिला)',
  'questionnaire.location.placeholder': 'जैसे, पंजाब, महाराष्ट्र',
  'questionnaire.state.label': 'राज्य',
  'questionnaire.state.placeholder': 'अपना राज्य चुनें',
  'questionnaire.landSize.label': 'भूमि का आकार (एकड़ में)',
  'questionnaire.landSize.placeholder': 'जैसे, 5.5',
  'questionnaire.soilType.label': 'मिट्टी का प्रकार',
  'questionnaire.soilType.placeholder': 'मिट्टी का प्रकार चुनें',
  'questionnaire.step2.title': 'फसल और खेती विवरण',
  'questionnaire.step2.description': 'आपकी फसलों और वर्तमान खेती प्रथाओं के बारे में जानकारी',
  'questionnaire.cropType.label': 'प्राथमिक फसल प्रकार',
  'questionnaire.cropType.placeholder': 'अपनी मुख्य फसल चुनें',
  'questionnaire.previousYield.label': 'पिछले वर्ष की उपज (प्रति एकड़)',
  'questionnaire.previousYield.placeholder': 'जैसे, 25 क्विंटल',
  'questionnaire.targetYield.label': 'लक्ष्य उपज (प्रति एकड़)',
  'questionnaire.targetYield.placeholder': 'जैसे, 35 क्विंटल',
  'questionnaire.budget.label': 'सुधार के लिए बजट (₹)',
  'questionnaire.budget.placeholder': 'जैसे, 50000',
  'questionnaire.step3.title': 'सिंचाई और उर्वरकीकरण',
  'questionnaire.step3.description': 'आपकी वर्तमान सिंचाई और उर्वरकीकरण विधियों के बारे में विवरण',
  'questionnaire.irrigation.label': 'सिंचाई विधि',
  'questionnaire.irrigation.placeholder': 'सिंचाई विधि चुनें',
  'questionnaire.fertilizer.label': 'वर्तमान उर्वरक उपयोग',
  'questionnaire.fertilizer.placeholder': 'उर्वरक प्रथा चुनें',
  'questionnaire.pestIssues.label': 'सामान्य कीट/रोग मुद्दे',
  'questionnaire.pestIssues.placeholder': 'किसी भी आवर्ती कीट समस्याओं, रोगों या फसल चुनौतियों का वर्णन करें...',
  'questionnaire.step4.title': 'अतिरिक्त जानकारी',
  'questionnaire.step4.description': 'कोई अन्य विवरण जो हमें बेहतर सिफारिशें प्रदान करने में मदद कर सकता है',
  'questionnaire.additionalInfo.label': 'अतिरिक्त नोट्स (वैकल्पिक)',
  'questionnaire.additionalInfo.placeholder': 'अपनी खेती प्रथाओं, चुनौतियों या लक्ष्यों के बारे में कोई अन्य जानकारी साझा करें...',
  'questionnaire.review.title': 'अपनी जानकारी की समीक्षा करें',
  'questionnaire.previousButton': 'पिछला',
  'questionnaire.nextButton': 'अगला चरण',
  'questionnaire.submitButton': 'मेरी सिफारिशें प्राप्त करें',
  'results.title': 'आपकी एग्रीबूस्ट रिपोर्ट',
  'results.share': 'साझा करें',
  'results.download': 'PDF डाउनलोड करें',
  'results.analysisComplete.title': 'विश्लेषण पूर्ण!',
  'results.analysisComplete.subtitle': 'आपकी व्यक्तिगत खेती सिफारिशें तैयार हैं',
  'results.yieldPotential': 'उपज सुधार क्षमता',
  'results.soilHealth.title': 'मिट्टी स्वास्थ्य विश्लेषण',
  'results.recommendedCrops.title': 'अनुशंसित फसलें',
  'results.fertilizer.title': 'उर्वरक सिफारिशें',
  'results.irrigation.title': 'सिंचाई योजना',
  'results.cta.title': 'इन सिफारिशों को लागू करने के लिए तैयार हैं?',
  'results.cta.subtitle': 'उच्च-प्राथमिकता उर्वरक अनुप्रयोगों के साथ शुरू करें और अधिकतम उपज सुधार के लिए ड्रिप सिंचाई में अपग्रेड करने पर विचार करें।',
  'results.cta.downloadButton': 'पूर्ण रिपोर्ट डाउनलोड करें',
  'results.cta.analyzeButton': 'दूसरे खेत का विश्लेषण करें',
};

export const translations: Translations = {
  en: englishTranslations,
  hi: hindiTranslations,
  // Other languages fallback to English for now
  bn: englishTranslations,
  te: englishTranslations,
  mr: englishTranslations,
  ta: englishTranslations,
  ur: englishTranslations,
  gu: englishTranslations,
  kn: englishTranslations,
  or: englishTranslations,
  pa: englishTranslations,
  ml: englishTranslations,
  as: englishTranslations,
  mai: englishTranslations,
  sat: englishTranslations,
  ks: englishTranslations,
  kok: englishTranslations,
  sd: englishTranslations,
  doi: englishTranslations,
  brx: englishTranslations,
  mni: englishTranslations,
  ne: englishTranslations,
  sa: englishTranslations,
  raj: englishTranslations,
  bhoj: englishTranslations,
  mag: englishTranslations,
  hne: englishTranslations,
  awa: englishTranslations,
  bgc: englishTranslations,
  lah: englishTranslations,
};
