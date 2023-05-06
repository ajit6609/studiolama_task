import React from "react";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./pages/personalInfo";
import Issues from "./pages/issues";
import Appointment from "./pages/appointment";
import Final from "./pages/final";
import Dissues from "./pages/dissues";
import Moreinfo from "./pages/Moreinfo";
import Otherinfo from "./pages/otherinfo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalInfo />} />
      <Route path="/moreinfo" element={<Moreinfo />} />

      <Route path="/issues" element={<Issues />} />
      <Route path="/dissues" element={<Dissues />} />
      <Route path="/otherinfo" element={<Otherinfo />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  );
};

export default App;
