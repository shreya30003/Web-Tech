import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/" className="list">
          Shopify
        </Link>
        <Link to="/solutions" className="list">
          Solutions
        </Link>
        <Link to="/pricing" className="list">
          Pricing
        </Link>
        <Link to="/whats_new" className="list">
          What's New
        </Link>

        <Link to="/resources" className="list">
          Resources
        </Link>
        <Link to="/login" className="list">
          Login
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              title="Making Commerce Better for Everyone"
              description="Shopify is supporting the next generation of entrepreneurs, the world's biggest brands, and everyone in between"
            />
          }
        />
        <Route
          path="/solutions"
          element={
            <MainPage title="Solutions" description="Our solutions for you" />
          }
        />
        <Route
          path="/pricing"
          element={
            <MainPage title="Pricing" description="Our pricings for you" />
          }
        />
        <Route
          path="/resources"
          element={
            <MainPage title="Resources" description="These are the resources" />
          }
        />
        <Route
          path="/whats_new"
          element={
            <MainPage
              title="What's New"
              description="Stay updated with our latest features"
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
