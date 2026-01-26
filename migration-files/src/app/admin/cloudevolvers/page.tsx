"use client";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Save, 
  RefreshCw, 
  Eye, 
  Image as ImageIcon,
  AlertCircle,
  CheckCircle,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from '@/lib/auth-provider';

interface CloudEvolversSettings {
  heroImages: string[];
  currentHeroIndex: number;
  heroTitle: string;
  heroSubtitle: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  heroRotationEnabled: boolean;
  heroRotationInterval: number;
}

export default function CloudEvolversAdminPage() {
  const { isAuthenticated } = useAuth();
  const [settings, setSettings] = useState<CloudEvolversSettings>({
    heroImages: [],
    currentHeroIndex: 0,
    heroTitle: '',
    heroSubtitle: '',
    ctaButtonText: '',
    ctaButtonLink: '',
    heroRotationEnabled: false,
    heroRotationInterval: 5000
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [makePublic, setMakePublic] = useState(false);

  // Load current settings
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const response = await fetch('/api/cloudevolvers/settings');
        if (response.ok) {
          const data = await response.json();
          setSettings(data);
        }
      } catch (error) {
        console.error('Error loading settings:', error);
        setMessage({ type: 'error', text: 'Failed to load settings' });
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      loadSettings();
    }
  }, [isAuthenticated]);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    
    try {
      const response = await fetch('/api/cloudevolvers/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer token' // Replace with actual token
        },
        body: JSON.stringify(settings)
      });

      if (response.ok) {
        const result = await response.json();
        setMessage({ type: 'success', text: 'Settings saved successfully!' });
        setSettings(result.settings);
      } else {
        const error = await response.json();
        setMessage({ type: 'error', text: error.error || 'Failed to save settings' });
      }
    } catch (error) {
      console.error('Error saving settings:', error);
      setMessage({ type: 'error', text: 'Failed to save settings' });
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    setResetting(true);
    setMessage(null);
    
    try {
      const response = await fetch('/api/cloudevolvers/settings', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer token' // Replace with actual token
        }
      });

      if (response.ok) {
        const result = await response.json();
        setSettings(result.settings);
        setMessage({ type: 'success', text: result.message });
      } else {
        const error = await response.json();
        setMessage({ type: 'error', text: error.error || 'Failed to reset settings' });
      }
    } catch (error) {
      console.error('Error resetting settings:', error);
      setMessage({ type: 'error', text: 'Failed to reset settings' });
    } finally {
      setResetting(false);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('section', 'training');
      formData.append('public', makePublic.toString());
      formData.append('metadata', JSON.stringify({ 
        title: 'Cloud Evolvers Hero Image',
        alt: 'Cloud training and certification hero image',
        isPublic: makePublic
      }));

      const response = await fetch('/api/images/upload', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer token' // Replace with actual token
        },
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        setSettings(prev => ({ 
          ...prev, 
          heroImages: [...prev.heroImages, result.url]
        }));
        setMessage({ type: 'success', text: 'Image uploaded successfully!' });
      } else {
        const error = await response.json();
        setMessage({ type: 'error', text: error.error || 'Failed to upload image' });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setMessage({ type: 'error', text: 'Failed to upload image' });
    } finally {
      setUploading(false);
    }
  };

  const handleImageUrlAdd = (url: string) => {
    if (url.trim()) {
      setSettings(prev => ({ 
        ...prev, 
        heroImages: [...prev.heroImages, url.trim()]
      }));
    }
  };

  const handleImageRemove = (index: number) => {
    setSettings(prev => {
      const newImages = prev.heroImages.filter((_, i) => i !== index);
      const newCurrentIndex = prev.currentHeroIndex >= newImages.length 
        ? Math.max(0, newImages.length - 1) 
        : prev.currentHeroIndex;
      return {
        ...prev,
        heroImages: newImages,
        currentHeroIndex: newCurrentIndex
      };
    });
  };

  const getCurrentHeroImage = () => {
    return settings.heroImages[settings.currentHeroIndex] || settings.heroImages[0] || '';
  };

  if (loading) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // AuthProvider will handle redirect
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
            <ImageIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Cloud Evolvers Admin</h1>
            <p className="text-gray-600">Manage hero section and homepage settings</p>
          </div>
        </div>
        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
          Training-focused Brand
        </Badge>
      </div>

      {message && (
        <Alert className={`mb-6 ${message.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
          {message.type === 'success' ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-600" />
          )}
          <AlertDescription className={message.type === 'success' ? 'text-green-800' : 'text-red-800'}>
            {message.text}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Settings Form */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-emerald-600" />
                Hero Image
              </CardTitle>
              <CardDescription>
                Upload and manage the background image for the hero section
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="current-image">Current Image</Label>
                {getCurrentHeroImage() ? (
                  <div className="mt-2 relative group">
                    <img
                      src={getCurrentHeroImage()}
                      alt="Current hero image"
                      className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/90 text-gray-900"
                        onClick={() => window.open(getCurrentHeroImage(), '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Full Size
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">No image selected</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div>
                <Label htmlFor="hero-image-upload">Upload New Image</Label>
                <Input
                  id="hero-image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="mt-2"
                />
                <div className="flex items-center space-x-2 mt-3">
                  <Checkbox 
                    id="make-public"
                    checked={makePublic}
                    onCheckedChange={(checked) => setMakePublic(checked === true)}
                  />
                  <Label htmlFor="make-public" className="text-sm">
                    Make image public (can override with storage account settings)
                  </Label>
                </div>
                {uploading && (
                  <div className="flex items-center gap-2 mt-2 text-sm text-emerald-600">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Uploading image...
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="hero-image-url">Add Image URL</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="hero-image-url"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      handleImageUrlAdd(newImageUrl);
                      setNewImageUrl('');
                    }}
                    disabled={!newImageUrl.trim()}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image Gallery Management */}
          <Card>
            <CardHeader>
              <CardTitle>Hero Image Gallery</CardTitle>
              <CardDescription>
                Manage multiple hero images and configure rotation settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Image Gallery */}
              <div>
                <Label>Current Images ({settings.heroImages.length})</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {settings.heroImages.map((imageUrl, index) => (
                    <div key={index} className="relative group">
                      <div className={`relative overflow-hidden rounded-lg border-2 ${settings.currentHeroIndex === index ? 'border-emerald-500' : 'border-gray-200'}`}>
                        <img
                          src={imageUrl}
                          alt={`Hero image ${index + 1}`}
                          className="w-full h-24 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/90 text-gray-900 h-8 px-2"
                            onClick={() => setSettings(prev => ({ ...prev, currentHeroIndex: index }))}
                          >
                            {settings.currentHeroIndex === index ? 'Active' : 'Set Active'}
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="h-8 px-2"
                            onClick={() => handleImageRemove(index)}
                          >
                            ×
                          </Button>
                        </div>
                      </div>
                      {settings.currentHeroIndex === index && (
                        <div className="text-xs text-emerald-600 text-center mt-1 font-medium">
                          Currently Active
                        </div>
                      )}
                    </div>
                  ))}
                  {settings.heroImages.length === 0 && (
                    <div className="col-span-full text-center py-8 text-gray-500">
                      No hero images added yet. Upload or add an image URL above.
                    </div>
                  )}
                </div>
              </div>

              {/* Rotation Settings */}
              {settings.heroImages.length > 1 && (
                <div className="space-y-4 pt-4 border-t">
                  <Label>Image Rotation Settings</Label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="rotation-enabled"
                      checked={settings.heroRotationEnabled}
                      onChange={(e) => setSettings(prev => ({ 
                        ...prev, 
                        heroRotationEnabled: e.target.checked 
                      }))}
                      className="rounded"
                    />
                    <Label htmlFor="rotation-enabled">Enable automatic image rotation</Label>
                  </div>
                  {settings.heroRotationEnabled && (
                    <div>
                      <Label htmlFor="rotation-interval">Rotation interval (seconds)</Label>
                      <Input
                        id="rotation-interval"
                        type="number"
                        min="5"
                        max="60"
                        value={settings.heroRotationInterval}
                        onChange={(e) => setSettings(prev => ({ 
                          ...prev, 
                          heroRotationInterval: parseInt(e.target.value) || 10 
                        }))}
                        className="mt-2 w-32"
                      />
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hero Content</CardTitle>
              <CardDescription>
                Configure the text content and call-to-action for the hero section
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="hero-title">Hero Title (HTML allowed)</Label>
                <Textarea
                  id="hero-title"
                  value={settings.heroTitle}
                  onChange={(e) => setSettings(prev => ({ ...prev, heroTitle: e.target.value }))}
                  placeholder="Expert <span class=&quot;text-emerald-400&quot;>Azure Training</span>"
                  rows={3}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                <Textarea
                  id="hero-subtitle"
                  value={settings.heroSubtitle}
                  onChange={(e) => setSettings(prev => ({ ...prev, heroSubtitle: e.target.value }))}
                  placeholder="Master Azure and Microsoft 365 with hands-on training..."
                  rows={3}
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cta-text">CTA Button Text</Label>
                  <Input
                    id="cta-text"
                    value={settings.ctaButtonText}
                    onChange={(e) => setSettings(prev => ({ ...prev, ctaButtonText: e.target.value }))}
                    placeholder="View Training Programs"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="cta-link">CTA Button Link</Label>
                  <Input
                    id="cta-link"
                    value={settings.ctaButtonLink}
                    onChange={(e) => setSettings(prev => ({ ...prev, ctaButtonLink: e.target.value }))}
                    placeholder="/training"
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-600" />
                Live Preview
              </CardTitle>
              <CardDescription>
                Preview how your changes will look on the homepage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-hidden rounded-lg border-2 border-gray-200">
                {/* Mini Hero Preview */}
                <div className="relative h-64 bg-cover bg-center" style={{ 
                  backgroundImage: getCurrentHeroImage() ? `url('${getCurrentHeroImage()}')` : 'linear-gradient(135deg, #059669, #0891b2)'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-teal-900/80 to-emerald-900/85"></div>
                  <div className="relative z-10 p-6 h-full flex flex-col justify-center text-center">
                    <div className="text-xs bg-emerald-500/20 text-emerald-100 px-2 py-1 rounded-full w-fit mx-auto mb-3 border border-emerald-400/30">
                      MCT-Led Training
                    </div>
                    <h2 
                      className="text-lg font-bold text-white mb-3 leading-tight"
                      dangerouslySetInnerHTML={{ __html: settings.heroTitle || 'Hero Title' }}
                    />
                    <p className="text-sm text-emerald-100/90 mb-4 line-clamp-3">
                      {settings.heroSubtitle || 'Hero subtitle will appear here...'}
                    </p>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-900 font-semibold w-fit mx-auto"
                    >
                      {settings.ctaButtonText || 'CTA Button'}
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-xs text-gray-600 text-center">
                    This is a scaled-down preview. The actual hero section will be larger and more detailed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                onClick={() => window.open('/?NEXT_PUBLIC_CLOUD_EVOLVERS=1', '_blank')}
                variant="outline"
                className="w-full"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Cloud Evolvers Homepage
              </Button>
              
              <Button
                onClick={() => window.open('/training', '_blank')}
                variant="outline"
                className="w-full"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Training Programs
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t">
        <Button
          onClick={handleSave}
          disabled={saving}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
        >
          {saving ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Save className="h-4 w-4 mr-2" />
          )}
          {saving ? 'Saving...' : 'Save Changes'}
        </Button>

        <Button
          onClick={handleReset}
          disabled={resetting}
          variant="outline"
          className="border-orange-300 text-orange-700 hover:bg-orange-50"
        >
          {resetting ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4 mr-2" />
          )}
          {resetting ? 'Resetting...' : 'Reset to Defaults'}
        </Button>
      </div>
    </div>
  );
}
