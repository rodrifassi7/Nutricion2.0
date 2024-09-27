import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, AboutUsPage } from "../pages";
import { MenuPage } from "../pages/MenuPage";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/menu" element={<MenuPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
