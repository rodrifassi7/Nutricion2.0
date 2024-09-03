import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, ProductsPage, AboutUsPage } from "../pages";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductsPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
