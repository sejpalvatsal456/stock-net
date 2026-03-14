import { Link } from "react-router-dom";
import "./layout.css";

function Layout({ children }) {
  return (
    <div className="app">

      <div className="sidebar">
        <h2>CoreInventory</h2>

        <Link to="/">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/receipts">Receipts</Link>
        <Link to="/deliveries">Deliveries</Link>
      </div>

      <div className="main">

        <div className="navbar">
          <h3>Inventory Management System</h3>
        </div>

        <div className="content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Layout;