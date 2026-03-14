import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Operations from "./pages/Operations";
import MoveHistory from "./pages/MoveHistory";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import ProfileMenu from "./pages/ProfileMenu";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Operations" element={<Operations />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/ProfileMenu" element={<ProfileMenu />} />
          <Route path="/MoveHistory" element={<MoveHistory />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );  
}

export default App;