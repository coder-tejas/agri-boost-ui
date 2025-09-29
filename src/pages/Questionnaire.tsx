import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, MapPin, Wheat, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSelector from "@/components/LanguageSelector";

const QuestionnairePage = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    location: "",
    state: "",
    cropType: "",
    landSize: "",
    irrigationMethod: "",
    fertilizerUse: "",
    pestIssues: "",
    soilType: "",
    previousYield: "",
    targetYield: "",
    budget: "",
    additionalInfo: ""
  });

  const totalSteps = 4;
  const progressValue = (currentStep / totalSteps) * 100;

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <MapPin className="w-6 h-6 mr-3 text-primary" />
                {t('questionnaire.step1.title')}
              </CardTitle>
              <CardDescription className="text-lg">
                {t('questionnaire.step1.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-base font-medium">{t('questionnaire.location.label')}</Label>
                  <Input
                    id="location"
                    placeholder={t('questionnaire.location.placeholder')}
                    value={formData.location}
                    onChange={(e) => updateFormData("location", e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-base font-medium">{t('questionnaire.state.label')}</Label>
                  <Select value={formData.state} onValueChange={(value) => updateFormData("state", value)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder={t('questionnaire.state.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="haryana">Haryana</SelectItem>
                      <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="landSize" className="text-base font-medium">{t('questionnaire.landSize.label')}</Label>
                  <Input
                    id="landSize"
                    type="number"
                    placeholder={t('questionnaire.landSize.placeholder')}
                    value={formData.landSize}
                    onChange={(e) => updateFormData("landSize", e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="soilType" className="text-base font-medium">{t('questionnaire.soilType.label')}</Label>
                  <Select value={formData.soilType} onValueChange={(value) => updateFormData("soilType", value)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder={t('questionnaire.soilType.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clay">Clay</SelectItem>
                      <SelectItem value="sandy">Sandy</SelectItem>
                      <SelectItem value="loamy">Loamy</SelectItem>
                      <SelectItem value="silty">Silty</SelectItem>
                      <SelectItem value="mixed">Mixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Wheat className="w-6 h-6 mr-3 text-crop-green" />
                {t('questionnaire.step2.title')}
              </CardTitle>
              <CardDescription className="text-lg">
                {t('questionnaire.step2.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cropType" className="text-base font-medium">{t('questionnaire.cropType.label')}</Label>
                  <Select value={formData.cropType} onValueChange={(value) => updateFormData("cropType", value)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder={t('questionnaire.cropType.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="corn">Corn</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="sugarcane">Sugarcane</SelectItem>
                      <SelectItem value="soybeans">Soybeans</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="previousYield" className="text-base font-medium">{t('questionnaire.previousYield.label')}</Label>
                  <Input
                    id="previousYield"
                    placeholder={t('questionnaire.previousYield.placeholder')}
                    value={formData.previousYield}
                    onChange={(e) => updateFormData("previousYield", e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="targetYield" className="text-base font-medium">{t('questionnaire.targetYield.label')}</Label>
                  <Input
                    id="targetYield"
                    placeholder={t('questionnaire.targetYield.placeholder')}
                    value={formData.targetYield}
                    onChange={(e) => updateFormData("targetYield", e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-base font-medium">{t('questionnaire.budget.label')}</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder={t('questionnaire.budget.placeholder')}
                    value={formData.budget}
                    onChange={(e) => updateFormData("budget", e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Droplets className="w-6 h-6 mr-3 text-blue-500" />
                {t('questionnaire.step3.title')}
              </CardTitle>
              <CardDescription className="text-lg">
                {t('questionnaire.step3.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="irrigationMethod" className="text-base font-medium">{t('questionnaire.irrigation.label')}</Label>
                  <Select value={formData.irrigationMethod} onValueChange={(value) => updateFormData("irrigationMethod", value)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder={t('questionnaire.irrigation.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="drip">Drip Irrigation</SelectItem>
                      <SelectItem value="sprinkler">Sprinkler</SelectItem>
                      <SelectItem value="flood">Flood Irrigation</SelectItem>
                      <SelectItem value="furrow">Furrow Irrigation</SelectItem>
                      <SelectItem value="rainfed">Rain-fed</SelectItem>
                      <SelectItem value="mixed">Mixed Methods</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fertilizerUse" className="text-base font-medium">{t('questionnaire.fertilizer.label')}</Label>
                  <Select value={formData.fertilizerUse} onValueChange={(value) => updateFormData("fertilizerUse", value)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder={t('questionnaire.fertilizer.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="organic">Organic Only</SelectItem>
                      <SelectItem value="chemical">Chemical Only</SelectItem>
                      <SelectItem value="mixed">Mixed (Organic + Chemical)</SelectItem>
                      <SelectItem value="minimal">Minimal Use</SelectItem>
                      <SelectItem value="none">No Fertilizers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pestIssues" className="text-base font-medium">{t('questionnaire.pestIssues.label')}</Label>
                <Textarea
                  id="pestIssues"
                  placeholder={t('questionnaire.pestIssues.placeholder')}
                  value={formData.pestIssues}
                  onChange={(e) => updateFormData("pestIssues", e.target.value)}
                  className="min-h-24 text-base"
                />
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('questionnaire.step4.title')}</CardTitle>
              <CardDescription className="text-lg">
                {t('questionnaire.step4.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="additionalInfo" className="text-base font-medium">
                  {t('questionnaire.additionalInfo.label')}
                </Label>
                <Textarea
                  id="additionalInfo"
                  placeholder={t('questionnaire.additionalInfo.placeholder')}
                  value={formData.additionalInfo}
                  onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                  className="min-h-32 text-base"
                />
              </div>
              
              <div className="bg-accent p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-accent-foreground mb-3">
                  {t('questionnaire.review.title')}
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Location:</strong> {formData.location}, {formData.state}</p>
                    <p><strong>Land Size:</strong> {formData.landSize} acres</p>
                    <p><strong>Crop Type:</strong> {formData.cropType}</p>
                    <p><strong>Soil Type:</strong> {formData.soilType}</p>
                  </div>
                  <div>
                    <p><strong>Irrigation:</strong> {formData.irrigationMethod}</p>
                    <p><strong>Fertilizer Use:</strong> {formData.fertilizerUse}</p>
                    <p><strong>Target Yield:</strong> {formData.targetYield}</p>
                    <p><strong>Budget:</strong> ₹{formData.budget}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/upload">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('nav.backToUpload')}
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-crop-green rounded-lg flex items-center justify-center">
                <Wheat className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">{t('questionnaire.title')}</h1>
            </div>
          </div>
          <LanguageSelector />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 opacity-50">
                <div className="w-8 h-8 bg-crop-green rounded-full flex items-center justify-center text-white font-semibold">
                  ✓
                </div>
                <span className="text-crop-green font-semibold">{t('questionnaire.uploadComplete')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  2
                </div>
                <span className="font-semibold text-primary">{t('questionnaire.fillQuestionnaire')}</span>
              </div>
              <div className="flex items-center space-x-2 opacity-50">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-semibold">
                  3
                </div>
                <span className="text-muted-foreground">{t('questionnaire.getResults')}</span>
              </div>
            </div>
            <Progress value={66} className="h-2" />
          </div>

          {/* Step Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                {t('questionnaire.step')} {currentStep} {t('questionnaire.of')} {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progressValue)}% {t('questionnaire.complete')}
              </span>
            </div>
            <Progress value={progressValue} className="h-2" />
          </div>

          {/* Current Step Content */}
          <div className="mb-8">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              size="lg"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="text-lg px-6 py-3"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('questionnaire.previousButton')}
            </Button>

            {currentStep === totalSteps ? (
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <Link to="/results">
                  {t('questionnaire.submitButton')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={nextStep}
                className="text-lg px-6 py-3"
              >
                {t('questionnaire.nextButton')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnairePage;