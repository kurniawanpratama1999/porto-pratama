import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layouts from "./Components/Layouts";
import "tailwindcss/tailwind.css";
import Page_Home from "./Pages/Home/Page_Home";
import Page_About from "./Pages/About/Page_About";
import Page_Contact from "./Pages/Contact/Page_Contact";
import Page_Project from "./Pages/Project/Page_Project";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Page_Home />} />
        <Route path="/about" element={<Page_About />} />
        <Route path="/contact" element={<Page_Contact />} />
        <Route path="/project" element={<Page_Project />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
