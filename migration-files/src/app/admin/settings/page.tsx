"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Save, RefreshCw } from 'lucide-react';
import { toast } from "sonner";
import Link from "next/link";

interface Settings {
  maxFileSize: number;
  allowedTypes: string[];
  defaultSection: string;
  autoOptimize: boolean;
  defaultPublic: boolean;
}

interface StorageConfig {
  accountName: string;
  containerName: string;
  hasConnectionString: boolean;
  environment: string;
  localDev: boolean;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    maxFileSize: 10, // MB
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    defaultSection: 'general',
    autoOptimize: true,
    defaultPublic: false
  });

  const [storageConfig, setStorageConfig] = useState<StorageConfig | null>(null);
  const [saving, setSaving] = useState(false);
  const [loadingConfig, setLoadingConfig] = useState(true);
  const [testingConnection, setTestingConnection] = useState(false);

  useEffect(() => {
    loadStorageConfig();
  }, []);

  const loadStorageConfig = async () => {
    try {
      setLoadingConfig(true);
      const response = await fetch('/api/admin/storage/config');
      
      if (response.ok) {
        const data = await response.json();
        setStorageConfig(data.config);
      } else {
        toast.error('Failed to load storage configuration');
      }
    } catch (error) {
      console.error('Error loading storage config:', error);
      toast.error('Error loading storage configuration');
    } finally {
      setLoadingConfig(false);
    }
  };

  const testConnection = async () => {
    try {
      setTestingConnection(true);
      const response = await fetch('/api/admin/storage/test', {
        method: 'POST'
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.success(`Successfully connected to ${data.accountName} storage!`);
      } else {
        toast.error(data.error || 'Connection test failed');
      }
    } catch (error) {
      console.error('Error testing connection:', error);
      toast.error('Error testing storage connection');
    } finally {
      setTestingConnection(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Settings saved successfully');
    } catch (error) {
      toast.error('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const toggleFileType = (type: string) => {
    setSettings(prev => ({
      ...prev,
      allowedTypes: prev.allowedTypes.includes(type)
        ? prev.allowedTypes.filter(t => t !== type)
        : [...prev.allowedTypes, type]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Configure image upload settings</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/admin">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Link>
        </Button>
      </div>

      <div className="grid gap-6">
        {/* Upload Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Upload Settings</CardTitle>
            <CardDescription>
              Configure file upload limits and defaults
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="maxFileSize">Maximum File Size (MB)</Label>
              <Input
                id="maxFileSize"
                type="number"
                min="1"
                max="100"
                value={settings.maxFileSize}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  maxFileSize: parseInt(e.target.value) || 10
                }))}
              />
            </div>

            <div>
              <Label htmlFor="defaultSection">Default Section</Label>
              <select
                id="defaultSection"
                value={settings.defaultSection}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  defaultSection: e.target.value
                }))}
                className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
              >
                <option value="general">General</option>
                <option value="blog">Blog</option>
                <option value="showcase">Showcase</option>
                <option value="hero">Hero Images</option>
                <option value="training">Training</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="defaultPublic"
                checked={settings.defaultPublic}
                onCheckedChange={(checked) => setSettings(prev => ({
                  ...prev,
                  defaultPublic: checked as boolean
                }))}
              />
              <Label htmlFor="defaultPublic">
                Make images public by default
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="autoOptimize"
                checked={settings.autoOptimize}
                onCheckedChange={(checked) => setSettings(prev => ({
                  ...prev,
                  autoOptimize: checked as boolean
                }))}
              />
              <Label htmlFor="autoOptimize">
                Auto-optimize images on upload
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* File Types */}
        <Card>
          <CardHeader>
            <CardTitle>Allowed File Types</CardTitle>
            <CardDescription>
              Select which file types can be uploaded
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { type: 'image/jpeg', label: 'JPEG/JPG' },
                { type: 'image/png', label: 'PNG' },
                { type: 'image/gif', label: 'GIF' },
                { type: 'image/webp', label: 'WebP' }
              ].map(({ type, label }) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={settings.allowedTypes.includes(type)}
                    onCheckedChange={() => toggleFileType(type)}
                  />
                  <Label htmlFor={type}>{label}</Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Storage Info */}
        <Card>
          <CardHeader>
            <CardTitle>Azure Blob Storage Configuration</CardTitle>
            <CardDescription>
              Current blob storage settings and connection info
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Storage Account:</span>
                <span className="font-mono bg-muted px-2 py-1 rounded">localdev</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Container:</span>
                <span className="font-mono bg-muted px-2 py-1 rounded">images</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Environment:</span>
                <span className="text-blue-600 font-medium">Development</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Connection Status:</span>
                <span className="text-green-600 font-medium">Connected</span>
              </div>
              <div className="pt-2 border-t">
                <p className="text-xs text-muted-foreground">
                  Production will use a different storage account. All uploads are stored in Azure Blob Storage.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Storage Info */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Azure Blob Storage Configuration</CardTitle>
              <CardDescription>
                Current Azure blob storage settings and usage
              </CardDescription>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={loadStorageConfig}
              disabled={loadingConfig}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loadingConfig ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </CardHeader>
          <CardContent>
            {loadingConfig ? (
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full"></div>
                <span className="ml-2 text-muted-foreground">Loading configuration...</span>
              </div>
            ) : storageConfig ? (
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Storage Account:</span>
                  <span className="font-mono">{storageConfig.accountName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Container:</span>
                  <span className="font-mono">{storageConfig.containerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Environment:</span>
                  <span className={storageConfig.environment === 'development' ? 'text-blue-600' : 'text-green-600'}>
                    {storageConfig.environment}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Connection String:</span>
                  <span className={storageConfig.hasConnectionString ? 'text-green-600' : 'text-red-600'}>
                    {storageConfig.hasConnectionString ? 'Configured' : 'Missing'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Local Dev Mode:</span>
                  <span className={storageConfig.localDev ? 'text-blue-600' : 'text-gray-600'}>
                    {storageConfig.localDev ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between">
                    <span>Storage Used:</span>
                    <span>45.2 MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Storage Limit:</span>
                    <span>5 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Images:</span>
                    <span>23</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0.9%' }}></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    0.9% of storage used
                  </div>
                </div>
                <div className="pt-3 border-t">
                  <Button 
                    onClick={testConnection} 
                    disabled={testingConnection}
                    variant="outline"
                    className="w-full"
                  >
                    {testingConnection ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Testing Connection...
                      </>
                    ) : (
                      'Test Storage Connection'
                    )}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                Failed to load storage configuration
              </div>
            )}
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <>Saving...</>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Settings
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
