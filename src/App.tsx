
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Layout from "@/components/Layout";
import OnboardingScreen from "@/pages/OnboardingScreen";
import HomeScreen from "@/pages/HomeScreen";
import StudyScreen from "@/pages/StudyScreen";
import AboutScreen from "@/pages/AboutScreen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Check if user has completed onboarding
const hasCompletedOnboarding = () => {
  return localStorage.getItem('scholarside-onboarding') !== null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                hasCompletedOnboarding() ? 
                <Navigate to="/home" replace /> : 
                <Navigate to="/onboarding" replace />
              } 
            />
            <Route path="/onboarding" element={<OnboardingScreen />} />
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<HomeScreen />} />
              <Route path="study" element={<StudyScreen />} />
              <Route path="about" element={<AboutScreen />} />
              <Route path="homework-help" element={<div className="p-8 text-center">Homework Help - Coming Soon!</div>} />
              <Route path="groups" element={<div className="p-8 text-center">Study Groups - Coming Soon!</div>} />
              <Route path="settings" element={<div className="p-8 text-center">Settings - Coming Soon!</div>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
