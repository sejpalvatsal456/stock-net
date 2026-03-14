<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Purchase from "./pages/Purchase";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
      </Layout>
    </BrowserRouter>
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Receipts from "./pages/Receipts";
import Deliveries from "./pages/Deliveries";

function App() {
  return (
    <Router>
      <Layout>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/receipts" element={<Receipts />} />
          <Route path="/deliveries" element={<Deliveries />} />
        </Routes>

      </Layout>
    </Router>
>>>>>>> d607b07ae1d75ad4fe9e7c7ae31137a7b7a085ed
  );
}

export default App;