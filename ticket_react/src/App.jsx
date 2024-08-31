import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
