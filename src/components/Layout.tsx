
import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  BookOpen, 
  MessageSquare, 
  Users, 
  Settings,
  GraduationCap,
  Info,
  Phone,
  Mail,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const Layout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigation = [
    { name: 'Home', href: '/home', icon: Home },
    { name: 'Study', href: '/study', icon: BookOpen },
    { name: 'Homework Help', href: '/homework-help', icon: MessageSquare },
    { name: 'Study Groups', href: '/groups', icon: Users },
    { name: 'About', href: '/about', icon: Info },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Website Header Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/home" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">ScholarSide</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      isActive 
                        ? "text-primary" 
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                to="/settings"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === '/settings' 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                <Settings className="h-4 w-4" />
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded-md",
                        isActive 
                          ? "text-primary bg-primary/10" 
                          : "text-muted-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
                <Link
                  to="/settings"
                  className={cn(
                    "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded-md",
                    location.pathname === '/settings' 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Website Footer */}
      <footer className="border-t bg-muted/30 mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">ScholarSide</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                Your ultimate study companion for academic success. We provide comprehensive tools and resources to help students excel in their educational journey.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="flex flex-col space-y-2 text-sm">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-semibold">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>0818780199</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span>WhatsApp: 0818780199</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href="mailto:lwandileayanda925@gmail.com" 
                    className="hover:text-primary transition-colors"
                  >
                    lwandileayanda925@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t pt-6 mt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Lwandile Gazu Digital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
