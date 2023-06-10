import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import Hero from "./components/Hero";

function App() {
  const HomePage = () => {
    return (
      <>
        <Navbar />
        <Hero />
      </>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/berries" element={<OurBerriesPage />} />
      <Route path="/products" element={<OurProductsPage />} />
      <Route path="/sites" element={<OurSitesPage />} />
      <Route path="/work-with-us" element={<WorkWithUsPage />} />
      <Route path="/new-webapp" element={<Webapp />} />
      <Route path="/webapp2" element={<Webapp />} />
      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
