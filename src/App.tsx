// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import Login from "./pages/Login";
// import Signup from  "./pages/Signup";
// import SubscriptionPlans from "./pages/Subscription"
// import Payments from './pages/Payments'
// import ProtectedRoute from "./components/Protected";
// import PersonalDashboard from "./pages/PersonalDashboard";

// const queryClient = new QueryClient();

// const App = () => {
//   return(
//   <QueryClientProvider client={queryClient}>

//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter basename="/~ohokgmuc/">
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SubscriptionPlans />} />
//           <Route path='/payments/' element={<Payments/>}/>
//           <Route path='/personal_dashboard' element= 
//           {
//           <ProtectedRoute>
//           <PersonalDashboard/>
//           </ProtectedRoute>
//           }  
//           />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// )};

// export default App;

// App.tsx
import { useLocation, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SubscriptionPlans from "./pages/Subscription";
import Payments from "./pages/Payments";
import ProtectedRoute from "./components/Protected";
import PersonalDashboard from "./pages/PersonalDashboard";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const useTawkControl = (pathname: string) => {
  useEffect(() => {
    const hidePaths = ["/signup","/personal_dashboard"];

    const shouldHide = hidePaths.includes(pathname);

    // Wait until Tawk loads
    const handleTawkLoad = () => {
      if (window.Tawk_API) {
        if (shouldHide) {
          window.Tawk_API.hideWidget?.();
        } else {
          window.Tawk_API.showWidget?.();
        }
      }
    };

    if (window.Tawk_API && typeof window.Tawk_API.onLoad === "function") {
      window.Tawk_API.onLoad = handleTawkLoad;
    } else {
      // Retry check if Tawk_API isn't ready yet
      const interval = setInterval(() => {
        if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
          handleTawkLoad();
          clearInterval(interval);
        }
      }, 300);
      // Optional: clear it after 10s max
      setTimeout(() => clearInterval(interval), 10000);
    }
  }, [pathname]);
};


const App = () => {
  const location = useLocation();
  useTawkControl(location.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* <BrowserRouter basename="/~ohokgmuc/"> */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SubscriptionPlans />} />
          <Route path="/payments/" element={<Payments />} />
          <Route
            path="/personal_dashboard"
            element={
              <ProtectedRoute>
                <PersonalDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </BrowserRouter> */}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
