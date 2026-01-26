"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Home, Upload, Image, Settings, ArrowLeft } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function AdminHeader() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/admin',
      label: 'Dashboard',
      icon: Home,
      exact: true
    },
    {
      href: '/admin/upload',
      label: 'Upload',
      icon: Upload
    },
    {
      href: '/admin/gallery',
      label: 'Gallery',
      icon: Image
    },
    {
      href: '/admin/settings',
      label: 'Settings',
      icon: Settings
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Title */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Website</span>
            </Link>
            <div className="h-4 w-px bg-border" />
            <h1 className="text-lg font-semibold">Admin Panel</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.exact 
                ? pathname === item.href 
                : pathname.startsWith(item.href) && item.href !== '/admin';
              
              // Special case for dashboard when on exact /admin
              const isDashboardActive = item.href === '/admin' && pathname === '/admin';
              const finalIsActive = item.exact ? isDashboardActive : isActive;

              return (
                <Button
                  key={item.href}
                  variant={finalIsActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className={cn(
                    "h-9",
                    finalIsActive && "bg-primary text-primary-foreground"
                  )}
                >
                  <Link href={item.href} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <select 
              value={pathname} 
              onChange={(e) => window.location.href = e.target.value}
              className="text-sm border rounded px-2 py-1"
            >
              {navItems.map((item) => (
                <option key={item.href} value={item.href}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
