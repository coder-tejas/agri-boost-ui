import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Upload, FileText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-farmland.jpg";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslation } from "@/hooks/useTranslation";

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">AgriBoost</h1>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <Link to="/upload" className="text-muted-foreground hover:text-foreground transition-colors">
                Upload Test
              </Link>
              <Link to="/questionnaire" className="text-muted-foreground hover:text-foreground transition-colors">
                Questionnaire
              </Link>
            </nav>
            <LanguageSelector />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Boost Your Crop Yield with 
                <span className="text-primary"> Science</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your farming with AI-powered soil analysis and personalized recommendations. 
                Upload your soil test, answer a few questions, and get expert advice tailored to your land.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/upload">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Modern farming with technology integration" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple Steps to Better Harvests
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our three-step process helps you make data-driven decisions for your farm
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Upload Soil Test</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg leading-relaxed">
                Simply upload your PDF soil test report. Our system will analyze the key nutrients 
                and pH levels to understand your soil composition.
              </CardDescription>
              <Button className="mt-6 w-full" variant="outline" asChild>
                <Link to="/upload">Upload Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-crop-green/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-crop-green" />
              </div>
              <CardTitle className="text-2xl">Fill Land & Crop Form</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg leading-relaxed">
                Answer questions about your location, crop type, land size, irrigation methods, 
                and current farming practices for personalized recommendations.
              </CardDescription>
              <Button className="mt-6 w-full" variant="outline" asChild>
                <Link to="/questionnaire">Start Form</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-crop-gold/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-crop-gold" />
              </div>
              <CardTitle className="text-2xl">Get Personalized Advice</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg leading-relaxed">
                Receive AI-powered recommendations for fertilizers, irrigation, crop selection, 
                and pest management tailored specifically to your land and goals.
              </CardDescription>
              <Button className="mt-6 w-full" variant="outline">
                View Sample Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-accent-foreground mb-4">
            Ready to Boost Your Harvest?
          </h3>
          <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who have increased their yields with our science-backed recommendations.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link to="/upload">
              Start Your Analysis <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AgriBoost</span>
            </div>
            <p className="text-white/80">
              © 2024 AgriBoost. Empowering farmers with science-driven insights.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;