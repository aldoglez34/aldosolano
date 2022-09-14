import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landing-page/LandingPage";

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
