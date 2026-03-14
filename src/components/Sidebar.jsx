import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md h-screen">

      <div className="p-4 text-xl font-bold border-b">
        Inventory
      </div>

      <nav className="flex flex-col p-4 gap-3 text-gray-700">

        <Link to="/" className="hover:bg-blue-100 p-2 rounded">
          Home
        </Link>

        <Link to="/products" className="hover:bg-blue-100 p-2 rounded">
          Items
        </Link>

        <Link to="/inventory" className="hover:bg-blue-100 p-2 rounded">
          Inventory
        </Link>

        <Link to="/sales" className="hover:bg-blue-100 p-2 rounded">
          Sales
        </Link>

        <Link to="/purchases" className="hover:bg-blue-100 p-2 rounded">
          Purchases
        </Link>

      </nav>
    </div>
  );
}