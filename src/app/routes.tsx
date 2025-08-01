import { Routes, Route } from "react-router-dom";
import { Home } from "../features/home/pages/home";
import { SignUp } from "../features/sign-up/pages/sign-up";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
