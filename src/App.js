import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource-variable/azeret-mono";
import "@fontsource/noto-sans";
import theme from "./theme";
import LandingPage from "./pages/landing";
import ProjectPage from "./pages/projects";
import FeastFinder from "./pages/projectPages/FeastFinder";
import AboutMe from "./pages/aboutme";
import Myself from "./pages/myself";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/projects/FeastFinder" element={<FeastFinder />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/myself" element={<Myself />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}
