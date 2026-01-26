"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FileText, Image, Home, Menu, X, Database, Layout, Key, LogOut, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth-provider";

export default function AdminNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout, isAuthenticated } = useAuth();

  // Don't render navbar if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  const routes = [
    {
      path: "/admin",
      label: "Dashboard",
      icon: <Home className="h-4 w-4 mr-2" />
    },
    {
      path: "/admin/cloudevolvers",
      label: "Cloud Evolvers",
      icon: <GraduationCap className="h-4 w-4 mr-2" />
    },
    {
      path: "/admin/blog-images",
      label: "Blog Images",
      icon: <FileText className="h-4 w-4 mr-2" />
    },
    {
      path: "/admin/services",
      label: "Services",
      icon: <Database className="h-4 w-4 mr-2" />
    },
    {
      path: "/admin/images",
      label: "Images",
      icon: <Image className="h-4 w-4 mr-2" />
    },
    {
      path: "/admin/showcase",
      label: "Showcase",
      icon: <Layout className="h-4 w-4 mr-2" />
    },
    {
      path: "/admin/homepage",
      label: "Homepage",
      icon: <Home className="h-4 w-4 mr-2" />
    },
    {
      path: "/admin/api-keys",
      label: "API Keys",
      icon: <Key className="h-4 w-4 mr-2" />
    }
  ];

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  return (
    <nav className="border-b bg-background sticky top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/admin" className="text-xl font-bold mr-8">
              Admin Panel
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {routes.map(route => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === route.path
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  {route.icon}
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild className="hidden md:flex">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                View Site
              </Link>
            </Button>
            
            <Button variant="ghost" onClick={handleLogout} className="hidden md:flex">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t px-4 py-2">
          <div className="space-y-1">
            {routes.map(route => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                  pathname === route.path
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {route.icon}
                {route.label}
              </Link>
            ))}
            <Link
              href="/"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-4 w-4 mr-2" />
              View Site
            </Link>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 rounded-md text-sm font-medium hover:bg-muted"
              onClick={() => {
                setMobileMenuOpen(false);
                handleLogout();
              }}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
