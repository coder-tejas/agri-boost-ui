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

const QuestionnairePage = () => {
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
                Location & Land Details
              </CardTitle>
              <CardDescription className="text-lg">
                Tell us about your farm location and land characteristics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-base font-medium">Farm Location (City/District)</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Punjab, Maharashtra"
                    value={formData.location}
                    onChange={(e) => updateFormData("location", e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-base font-medium">State</Label>
                  <Select value={formData.state} onValueChange={(value) => updateFormData("state", value)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select your state" />
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
                  <Label htmlFor="landSize" className="text-base font-medium">Land Size (in acres)</Label>
                  <Input
                    id="landSize"
                    type="number"
                    placeholder="e.g., 5.5"
                    value={formData.landSize}
                    onChange={(e) => updateFormData("landSize", e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="soilType" className="text-base font-medium">Soil Type</Label>
                  <Select value={formData.soilType} onValueChange={(value) => updateFormData("soilType", value)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select soil type" />
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
                Crop & Farming Details
              </CardTitle>
              <CardDescription className="text-lg">
                Information about your crops and current farming practices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cropType" className="text-base font-medium">Primary Crop Type</Label>
                  <Select value={formData.cropType} onValueChange={(value) => updateFormData("cropType", value)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select your main crop" />
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
                  <Label htmlFor="previousYield" className="text-base font-medium">Previous Year Yield (per acre)</Label>
                  <Input
                    id="previousYield"
                    placeholder="e.g., 25 quintals"
                    value={formData.previousYield}
                    onChange={(e) => updateFormData("previousYield", e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="targetYield" className="text-base font-medium">Target Yield (per acre)</Label>
                  <Input
                    id="targetYield"
                    placeholder="e.g., 35 quintals"
                    value={formData.targetYield}
                    onChange={(e) => updateFormData("targetYield", e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-base font-medium">Budget for Improvements (₹)</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="e.g., 50000"
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
                Irrigation & Fertilization
              </CardTitle>
              <CardDescription className="text-lg">
                Details about your current irrigation and fertilization methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="irrigationMethod" className="text-base font-medium">Irrigation Method</Label>
                  <Select value={formData.irrigationMethod} onValueChange={(value) => updateFormData("irrigationMethod", value)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select irrigation method" />
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
                  <Label htmlFor="fertilizerUse" className="text-base font-medium">Current Fertilizer Use</Label>
                  <Select value={formData.fertilizerUse} onValueChange={(value) => updateFormData("fertilizerUse", value)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select fertilizer practice" />
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
                <Label htmlFor="pestIssues" className="text-base font-medium">Common Pest/Disease Issues</Label>
                <Textarea
                  id="pestIssues"
                  placeholder="Describe any recurring pest problems, diseases, or crop challenges you face..."
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
              <CardTitle className="text-2xl">Additional Information</CardTitle>
              <CardDescription className="text-lg">
                Any other details that might help us provide better recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="additionalInfo" className="text-base font-medium">
                  Additional Notes (Optional)
                </Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Share any other information about your farming practices, challenges, or goals..."
                  value={formData.additionalInfo}
                  onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                  className="min-h-32 text-base"
                />
              </div>
              
              <div className="bg-accent p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-accent-foreground mb-3">
                  Review Your Information
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
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/upload">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Upload
            </Link>
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-crop-green rounded-lg flex items-center justify-center">
              <Wheat className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Farmer Questionnaire</h1>
          </div>
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
                <span className="text-crop-green font-semibold">Upload Complete</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  2
                </div>
                <span className="font-semibold text-primary">Fill Questionnaire</span>
              </div>
              <div className="flex items-center space-x-2 opacity-50">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-semibold">
                  3
                </div>
                <span className="text-muted-foreground">Get Results</span>
              </div>
            </div>
            <Progress value={66} className="h-2" />
          </div>

          {/* Step Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progressValue)}% Complete
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
              Previous
            </Button>

            {currentStep === totalSteps ? (
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <Link to="/results">
                  Get My Recommendations
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={nextStep}
                className="text-lg px-6 py-3"
              >
                Next Step
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