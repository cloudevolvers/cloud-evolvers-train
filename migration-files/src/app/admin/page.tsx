"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ImageIcon, 
  Home, 
  PenTool,
  GraduationCap,
  Upload,
  Image,
  Settings
} from 'lucide-react';
import { useAuth } from '@/lib/auth-provider';

export default function AdminPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold">Image Management</h1>
        <p className="text-muted-foreground mt-2">
          Upload and manage images using Azure Blob Storage
        </p>
        <div className="mt-3 text-xs text-muted-foreground bg-muted/50 px-3 py-2 rounded">
          <span className="font-medium">Storage Account:</span> localdev (development)
          <span className="mx-2">•</span>
          <span className="font-medium">Container:</span> images
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cloud Evolvers Admin Card */}
        <Card className="hover:shadow-md transition-shadow border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-emerald-600" />
              Cloud Evolvers Admin
            </CardTitle>
            <CardDescription>Manage hero image and homepage settings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Configure the Cloud Evolvers brand homepage including hero image, titles, and call-to-action buttons.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600" asChild>
              <Link href="/admin/cloudevolvers">Manage Cloud Evolvers</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Blog Images Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-blue-500" />
              Upload Images
            </CardTitle>
            <CardDescription>
              Upload new images to Azure Blob Storage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/admin/upload">Upload Images</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Image className="h-5 w-5 text-green-500" />
              Manage Images
            </CardTitle>
            <CardDescription>
              View and manage existing images in blob storage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/gallery">View Gallery</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-purple-500" />
              Settings
            </CardTitle>
            <CardDescription>
              Configure blob storage settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/settings">Settings</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-center pt-6 border-t">
        <Button variant="outline" asChild>
          <Link href="/">
            <Home className="h-4 w-4 mr-2" />
            Back to Website
          </Link>
        </Button>
      </div>
    </div>
  );
}
