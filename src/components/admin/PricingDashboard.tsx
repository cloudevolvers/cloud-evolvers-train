import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FloppyDisk as Save, 
  ArrowsClockwise as RefreshCw, 
  CurrencyDollar as DollarSign, 
  Tag, 
  Calendar,
  WarningCircle as AlertCircle,
  CheckCircle,
  Database,
  Eye,
  House,
  ChartBar,
  CloudArrowUp
} from '@phosphor-icons/react';
import FrontendPricingService from '@/services/frontend-pricing-service';
import { Link } from 'react-router-dom';

interface PricingData {
  basePrices: Record<string, number>;
  promotion: {
    percentage: number;
    active: boolean;
    reason: string;
    validUntil: string;
  } | null;
}

interface CoursePreview {
  slug: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  hasDiscount: boolean;
  discount: number;
}

export default function PricingDashboard() {
  const [pricingData, setPricingData] = useState<PricingData>({
    basePrices: {},
    promotion: null
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedPreviewCourses, setSelectedPreviewCourses] = useState<string[]>([]);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');

  // Helper function to categorize courses
  const categorizeCourse = (courseSlug: string): string => {
    if (courseSlug.includes('azure') || courseSlug.includes('az-')) return 'Azure Certifications';
    if (courseSlug.includes('ms-') || courseSlug.includes('365') || courseSlug.includes('office')) return 'Microsoft 365';
    if (courseSlug.includes('pl-') || courseSlug.includes('power')) return 'Power Platform';
    if (courseSlug.includes('sc-') || courseSlug.includes('security')) return 'Security';
    if (courseSlug.includes('dp-') || courseSlug.includes('data')) return 'Data & Analytics';
    if (courseSlug.includes('ai-') || courseSlug.includes('ai')) return 'AI & Machine Learning';
    if (courseSlug.includes('md-') || courseSlug.includes('dynamics')) return 'Dynamics 365';
    if (courseSlug.includes('mb-') || courseSlug.includes('business')) return 'Business Applications';
    return 'Other Certifications';
  };

  // Filter courses based on search
  const filteredCourses = Object.entries(pricingData.basePrices).filter(([courseSlug]) => 
    courseSlug.toLowerCase().includes(searchTerm.toLowerCase()) ||
    courseSlug.replace(/-/g, ' ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group courses by category with counts
  const courseCategoriesWithCounts = React.useMemo(() => {
    const categories: Record<string, Array<[string, number]>> = {};
    
    filteredCourses.forEach(([courseSlug, price]) => {
      const category = categorizeCourse(courseSlug);
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push([courseSlug, price]);
    });

    return Object.entries(categories)
      .map(([category, courses]) => ({
        category,
        courses: courses.sort((a, b) => a[0].localeCompare(b[0])),
        count: courses.length
      }))
      .sort((a, b) => a.category.localeCompare(b.category));
  }, [filteredCourses]);

  // Get preview data for selected courses
  const getPreviewData = (): CoursePreview[] => {
    const coursesToPreview = selectedPreviewCourses.length > 0 
      ? selectedPreviewCourses 
      : Object.keys(pricingData.basePrices).slice(0, 5);

    return coursesToPreview.map(slug => {
      const priceInfo = FrontendPricingService.getPromotionalPrice(slug);
      return {
        slug,
        name: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        originalPrice: priceInfo.originalPrice,
        discountedPrice: priceInfo.discountedPrice,
        hasDiscount: priceInfo.hasDiscount,
        discount: priceInfo.discount
      };
    });
  };

  // Sync to Azure Storage Table (SWA backend)
  const syncToAzure = async () => {
    if (!isAuthenticated) {
      showMessage('error', 'Authentication required');
      return;
    }

    setSyncStatus('syncing');
    try {
      // Sync pricing data to Azure Functions API
      const response = await fetch('/api/pricing/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-functions-key': 'loganislove' // Admin key
        },
        body: JSON.stringify({
          basePrices: pricingData.basePrices,
          promotion: pricingData.promotion
        })
      });

      if (response.ok) {
        const result = await response.json();
        setSyncStatus('success');
        showMessage('success', `Successfully synced ${result.syncedCourses} courses to Azure Storage!`);
        setTimeout(() => setSyncStatus('idle'), 3000);
      } else {
        const error = await response.json();
        throw new Error(error.message || response.statusText);
      }
    } catch (error) {
      console.error('Sync error:', error);
      setSyncStatus('error');
      showMessage('error', `Failed to sync to Azure: ${error.message}. Using local storage only.`);
      setTimeout(() => setSyncStatus('idle'), 3000);
    }
  };

  // CourseCard component
  const CourseCard = ({ 
    courseSlug, 
    price, 
    index, 
    onPriceChange, 
    onUpdate, 
    saving, 
    isAuthenticated,
    onTogglePreview
  }: {
    courseSlug: string;
    price: number;
    index: number;
    onPriceChange: (price: number) => void;
    onUpdate: () => void;
    saving: boolean;
    isAuthenticated: boolean;
    onTogglePreview?: (slug: string) => void;
  }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.02 }}
      className="border rounded-lg p-4 bg-card hover:shadow-md transition-shadow"
    >
      <h3 className="font-semibold text-sm mb-3 text-foreground line-clamp-2 min-h-[2.5rem]">
        {courseSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </h3>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg font-bold text-muted-foreground">€</span>
        <Input
          type="number"
          min="0"
          step="10"
          value={price}
          onChange={(e) => onPriceChange(parseInt(e.target.value) || 0)}
          className="w-20 text-center font-semibold"
        />
      </div>
      <div className="flex gap-2">
        <Button
          size="sm"
          onClick={onUpdate}
          disabled={saving || !isAuthenticated}
          className="flex-1"
          variant={price === FrontendPricingService.getCoursePrice(courseSlug) ? "outline" : "default"}
        >
          {saving ? (
            <RefreshCw className="h-3 w-3 animate-spin" />
          ) : (
            <Save className="h-3 w-3" />
          )}
        </Button>
        {onTogglePreview && (
          <Button
            size="sm"
            onClick={() => onTogglePreview(courseSlug)}
            variant="ghost"
            className="px-2"
            title="Toggle preview"
          >
            <Eye className="h-3 w-3" />
          </Button>
        )}
      </div>
      {price !== FrontendPricingService.getCoursePrice(courseSlug) && (
        <Badge variant="outline" className="text-xs mt-2">
          Default: €{FrontendPricingService.getCoursePrice(courseSlug)}
        </Badge>
      )}
    </motion.div>
  );

  useEffect(() => {
    if (isAuthenticated) {
      fetchPricingData();
    }
  }, [isAuthenticated]);

  const handleLogin = (password: string) => {
    // Simple client-side password check - in production this would be server-side
    if (password === 'loganislove') {
      setIsAuthenticated(true);
      showMessage('success', 'Authentication successful');
    } else {
      showMessage('error', 'Invalid password');
    }
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const fetchPricingData = async () => {
    setLoading(true);
    try {
      // Get data from frontend service instead of API
      const allPricing = FrontendPricingService.getAllPricing();
      
      setPricingData({
        basePrices: allPricing.basePrices,
        promotion: allPricing.promotion
      });
      showMessage('success', 'Pricing data loaded successfully (frontend-only)');
    } catch (error) {
      console.error('Error loading pricing:', error);
      showMessage('error', `Failed to load pricing data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const updateCoursePrice = async (courseSlug: string, price: number) => {
    if (!isAuthenticated) {
      showMessage('error', 'Authentication required for updates');
      return;
    }

    setSaving(true);
    try {
      // Update via frontend service
      FrontendPricingService.updateCoursePrice(courseSlug, price);
      
      setPricingData(prev => ({
        ...prev,
        basePrices: {
          ...prev.basePrices,
          [courseSlug]: price
        }
      }));
      showMessage('success', `Updated ${courseSlug} price to €${price} (saved to localStorage)`);
    } catch (error) {
      showMessage('error', `Failed to update ${courseSlug} price`);
    } finally {
      setSaving(false);
    }
  };

  const updatePromotion = async () => {
    if (!isAuthenticated) {
      showMessage('error', 'Authentication required for updates');
      return;
    }

    if (!pricingData.promotion) return;

    setSaving(true);
    try {
      // Update via frontend service
      FrontendPricingService.updatePromotion(pricingData.promotion);
      showMessage('success', 'Promotion updated successfully (saved to localStorage)');
    } catch (error) {
      showMessage('error', 'Failed to update promotion');
    } finally {
      setSaving(false);
    }
  };

  const seedData = async () => {
    if (!isAuthenticated) {
      showMessage('error', 'Authentication required for seeding data');
      return;
    }

    setSaving(true);
    try {
      // Reset to default data via frontend service
      FrontendPricingService.resetToDefaults();
      await fetchPricingData();
      showMessage('success', 'Default pricing data restored (frontend-only)');
    } catch (error) {
      showMessage('error', 'Failed to restore pricing data');
    } finally {
      setSaving(false);
    }
  };

  // Login form component
  const LoginForm = () => {
    const [password, setPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoggingIn(true);
      setTimeout(() => {
        handleLogin(password);
        setIsLoggingIn(false);
        if (password !== 'loganislove') {
          setPassword('');
        }
      }, 500);
    };

    return (
      <div className="from-green-900/20 to-emerald-900/20 min-h-screen bg-gradient-to-br flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Database className="h-6 w-6 text-primary" />
              Admin Login
            </CardTitle>
            <p className="text-muted-foreground">
              Enter your password to access the pricing management dashboard
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoggingIn}
                  autoFocus
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={!password || isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                    Authenticating...
                  </>
                ) : (
                  'Login'
                )}
              </Button>
            </form>
            {message && (
              <div className={`mt-4 p-3 rounded-md text-sm ${
                message.type === 'success' 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {message.text}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <LoginForm />;
  }

  if (loading) {
    return (
      <div className="from-green-900/20 to-emerald-900/20 min-h-screen bg-gradient-to-br flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading pricing data...</p>
        </div>
      </div>
    );
  }

  // If no data loaded and not loading, show error state
  if (!pricingData.basePrices || Object.keys(pricingData.basePrices).length === 0) {
    return (
      <div className="from-green-900/20 to-emerald-900/20 min-h-screen bg-gradient-to-br flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-xl text-red-600">
              <AlertCircle className="h-6 w-6" />
              API Connection Failed
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Unable to load pricing data from localStorage. Check the console for detailed error information.
            </p>
            <Button onClick={fetchPricingData} className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Retry Connection
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="from-green-900/20 to-emerald-900/20 min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
                <Database className="h-8 w-8 text-primary" />
                Pricing Management Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage training course prices and promotional discounts
              </p>
            </div>
            <Button
              onClick={fetchPricingData}
              variant="outline"
              disabled={loading}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </motion.div>

        {/* Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
              message.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {message.type === 'success' ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            {message.text}
          </motion.div>
        )}

        {/* Admin Controls */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Admin Access Granted
              </div>
              <div className="flex gap-2">
                <Link to="/">
                  <Button variant="outline" size="sm">
                    <House className="h-4 w-4 mr-2" />
                    Home
                  </Button>
                </Link>
                <Button
                  onClick={() => setShowPreview(!showPreview)}
                  variant={showPreview ? "default" : "outline"}
                  size="sm"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  {showPreview ? 'Hide' : 'Show'} Preview
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Storage Status</p>
                <p className="text-xs text-muted-foreground">
                  Data is stored in browser localStorage. Changes persist across sessions.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Azure Sync</p>
                <Button
                  onClick={syncToAzure}
                  disabled={syncStatus === 'syncing'}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  {syncStatus === 'syncing' ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                      Syncing...
                    </>
                  ) : syncStatus === 'success' ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Synced
                    </>
                  ) : syncStatus === 'error' ? (
                    <>
                      <AlertCircle className="h-4 w-4 mr-2 text-red-500" />
                      Failed
                    </>
                  ) : (
                    <>
                      <CloudArrowUp className="h-4 w-4 mr-2" />
                      Sync to Azure
                    </>
                  )}
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Reset Data</p>
                <Button
                  onClick={seedData}
                  disabled={saving}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  {saving ? (
                    <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <Database className="h-4 w-4 mr-2" />
                  )}
                  Seed Defaults
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Courses</p>
                  <p className="text-2xl font-bold">{Object.keys(pricingData.basePrices).length}</p>
                </div>
                <Database className="h-8 w-8 text-blue-500 opacity-50" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Average Price</p>
                  <p className="text-2xl font-bold">
                    €{Math.round(Object.values(pricingData.basePrices).reduce((a, b) => a + b, 0) / Object.keys(pricingData.basePrices).length)}
                  </p>
                </div>
                <ChartBar className="h-8 w-8 text-green-500 opacity-50" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Promotion Status</p>
                  <p className="text-2xl font-bold">
                    {pricingData.promotion?.active ? `${pricingData.promotion.percentage}%` : 'Off'}
                  </p>
                </div>
                <Tag className="h-8 w-8 text-orange-500 opacity-50" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Preview Courses</p>
                  <p className="text-2xl font-bold">{selectedPreviewCourses.length || 5}</p>
                </div>
                <Eye className="h-8 w-8 text-purple-500 opacity-50" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Panel */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Pricing Preview
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Preview how prices appear to customers. Toggle courses in the grid to add/remove from preview.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {getPreviewData().map((course) => (
                      <Card key={course.slug} className="border-2">
                        <CardContent className="pt-6">
                          <h3 className="font-semibold mb-3 line-clamp-2">{course.name}</h3>
                          {course.hasDiscount ? (
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-green-600">
                                  €{course.discountedPrice}
                                </span>
                                <Badge className="bg-green-500 text-white">
                                  -{course.discount}%
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground line-through">
                                Original: €{course.originalPrice}
                              </p>
                              <p className="text-xs text-green-600 font-medium">
                                Save €{course.originalPrice - course.discountedPrice}
                              </p>
                            </div>
                          ) : (
                            <div className="text-2xl font-bold">
                              €{course.originalPrice}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  {pricingData.promotion?.active && (
                    <div className="from-orange-900/20 to-red-900/20 mt-4 p-4 bg-gradient-to-r rounded-lg">
                      <p className="text-orange-300 font-semibold">
                        {pricingData.promotion.reason}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Valid until: {new Date(pricingData.promotion.validUntil).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Promotion Settings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tag className="h-5 w-5" />
              Promotional Discount
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pricingData.promotion ? (
              <>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Switch
                      checked={pricingData.promotion.active}
                      onCheckedChange={(checked) =>
                        setPricingData(prev => ({
                          ...prev,
                          promotion: prev.promotion ? { ...prev.promotion, active: checked } : null
                        }))
                      }
                    />
                    <span className="font-medium">Enable Promotional Discount</span>
                    {pricingData.promotion.active && (
                      <Badge className="bg-green-500 text-white">
                        ACTIVE
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Discount Percentage</label>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={pricingData.promotion.percentage}
                        onChange={(e) =>
                          setPricingData(prev => ({
                            ...prev,
                            promotion: prev.promotion 
                              ? { ...prev.promotion, percentage: parseInt(e.target.value) || 0 }
                              : null
                          }))
                        }
                        className="w-20"
                      />
                      <span className="text-sm text-muted-foreground">%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Reason</label>
                    <Input
                      value={pricingData.promotion.reason}
                      onChange={(e) =>
                        setPricingData(prev => ({
                          ...prev,
                          promotion: prev.promotion 
                            ? { ...prev.promotion, reason: e.target.value }
                            : null
                        }))
                      }
                      placeholder="e.g., New Company Launch Special"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Valid Until</label>
                    <Input
                      type="date"
                      value={pricingData.promotion.validUntil}
                      onChange={(e) =>
                        setPricingData(prev => ({
                          ...prev,
                          promotion: prev.promotion 
                            ? { ...prev.promotion, validUntil: e.target.value }
                            : null
                        }))
                      }
                    />
                  </div>
                </div>

                <Button
                  onClick={updatePromotion}
                  disabled={saving || !isAuthenticated}
                  className="w-full sm:w-auto"
                >
                  {saving ? (
                    <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  Update Promotion
                </Button>
              </>
            ) : (
              <p className="text-muted-foreground">No promotional data available</p>
            )}
          </CardContent>
        </Card>

        {/* Course Prices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Course Prices ({Object.keys(pricingData.basePrices).length} courses)
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Organize courses by category for easier management. Current pricing applies globally with promotional discounts.
            </p>
          </CardHeader>
          <CardContent>
            {/* Search and Filter */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <Button
                onClick={() => setShowAllCourses(!showAllCourses)}
                variant="outline"
                className="whitespace-nowrap"
              >
                {showAllCourses ? 'Show Categories' : 'Show All'}
              </Button>
            </div>

            {/* Course Grid */}
            {showAllCourses ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {filteredCourses.map(([courseSlug, price], index) => (
                  <CourseCard
                    key={courseSlug}
                    courseSlug={courseSlug}
                    price={price}
                    index={index}
                    onPriceChange={(newPrice) => {
                      setPricingData(prev => ({
                        ...prev,
                        basePrices: {
                          ...prev.basePrices,
                          [courseSlug]: newPrice
                        }
                      }));
                    }}
                    onUpdate={() => updateCoursePrice(courseSlug, pricingData.basePrices[courseSlug])}
                    saving={saving}
                    isAuthenticated={isAuthenticated}
                    onTogglePreview={(slug) => {
                      setSelectedPreviewCourses(prev => 
                        prev.includes(slug) 
                          ? prev.filter(s => s !== slug)
                          : [...prev, slug]
                      );
                      if (!showPreview) setShowPreview(true);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {courseCategoriesWithCounts.map(({ category, courses, count }) => (
                  <div key={category} className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b">
                      <h3 className="text-lg font-semibold">{category}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {count} courses
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                      {courses.map(([courseSlug, price], index) => (
                        <CourseCard
                          key={courseSlug}
                          courseSlug={courseSlug}
                          price={price}
                          index={index}
                          onPriceChange={(newPrice) => {
                            setPricingData(prev => ({
                              ...prev,
                              basePrices: {
                                ...prev.basePrices,
                                [courseSlug]: newPrice
                              }
                            }));
                          }}
                          onUpdate={() => updateCoursePrice(courseSlug, pricingData.basePrices[courseSlug])}
                          saving={saving}
                          isAuthenticated={isAuthenticated}
                          onTogglePreview={(slug) => {
                            setSelectedPreviewCourses(prev => 
                              prev.includes(slug) 
                                ? prev.filter(s => s !== slug)
                                : [...prev, slug]
                            );
                            if (!showPreview) setShowPreview(true);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
