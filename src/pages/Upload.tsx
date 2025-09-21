import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Upload, FileText, X, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

const UploadPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files).filter(
      file => file.type === 'application/pdf'
    );
    
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files]);
      simulateUpload();
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter(
      file => file.type === 'application/pdf'
    );
    
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files]);
      simulateUpload();
    }
  }, []);

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Upload className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Upload Soil Test Report</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  1
                </div>
                <span className="font-semibold text-primary">Upload Soil Test</span>
              </div>
              <div className="flex items-center space-x-2 opacity-50">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-semibold">
                  2
                </div>
                <span className="text-muted-foreground">Fill Questionnaire</span>
              </div>
              <div className="flex items-center space-x-2 opacity-50">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-semibold">
                  3
                </div>
                <span className="text-muted-foreground">Get Results</span>
              </div>
            </div>
            <Progress value={33} className="h-2" />
          </div>

          {/* Upload Area */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Upload Your Soil Test Report</CardTitle>
              <CardDescription className="text-lg">
                Upload a PDF file of your soil test report. We'll analyze the nutrient levels, pH, and other key indicators.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                  isDragOver
                    ? 'border-primary bg-primary/5 scale-105'
                    : 'border-muted-foreground/25 hover:border-primary/50 hover:bg-accent/50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Drop your soil test PDF here
                </h3>
                <p className="text-muted-foreground mb-6">
                  or click to browse files
                </p>
                <input
                  type="file"
                  accept=".pdf"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-input"
                />
                <Button size="lg" asChild>
                  <label htmlFor="file-input" className="cursor-pointer">
                    Choose Files
                  </label>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Supports PDF files up to 10MB
                </p>
              </div>

              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Uploading...</span>
                    <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-crop-green mr-2" />
                  Uploaded Files ({uploadedFiles.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-accent rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <FileText className="w-8 h-8 text-primary" />
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Next Step */}
          {uploadedFiles.length > 0 && (
            <div className="flex justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/questionnaire">
                  Continue to Questionnaire
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;