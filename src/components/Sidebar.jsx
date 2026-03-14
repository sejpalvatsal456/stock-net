import { NavLink } from "react-router-dom";
import { Home, Package, Warehouse, ShoppingCart, CreditCard } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 min-h-screen p-6">

      {/* TITLE */}
      <h1 className="text-2xl font-semibold mb-10">
        Inventory
      </h1>


      {/* MENU */}
      <nav className="flex flex-col gap-4">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 p-4 rounded-xl transition
            ${isActive ? "bg-white shadow-md font-semibold" : "bg-gray-200 hover:bg-gray-300"}`
          }
        >
          <Home size={20} />
          Home
        </NavLink>


        <NavLink
          to="/products"
          className={({ isActive }) =>
            `flex items-center gap-3 p-4 rounded-xl transition
            ${isActive ? "bg-white shadow-md font-semibold" : "bg-gray-200 hover:bg-gray-300"}`
          }
        >
          <Package size={20} />
          Products
        </NavLink>

        <NavLink
          to="/Operations"
          className={({ isActive }) =>
            `flex items-center gap-3 p-4 rounded-xl transition
            ${isActive ? "bg-white shadow-md font-semibold" : "bg-gray-200 hover:bg-gray-300"}`
          }
        >
          <ShoppingCart size={20} />
          Operations
        </NavLink>

        <NavLink
          to="/MoveHistory"
          className={({ isActive }) =>
            `flex items-center gap-3 p-4 rounded-xl transition
            ${isActive ? "bg-white shadow-md font-semibold" : "bg-gray-200 hover:bg-gray-300"}`
          }
        >
          <CreditCard size={20} />
          Move History
        </NavLink>

        <NavLink
          to="/Setting"
          className={({ isActive }) =>
            `flex items-center gap-3 p-4 rounded-xl transition
            ${isActive ? "bg-white shadow-md font-semibold" : "bg-gray-200 hover:bg-gray-300"}`
          }
        >
          <CreditCard size={20} />
          Setting
          </NavLink>
        
        <NavLink
          to="/ProfileMenu"
          className={({ isActive }) =>
            `flex items-center gap-3 p-4 rounded-xl transition
            ${isActive ? "bg-white shadow-md font-semibold" : "bg-gray-200 hover:bg-gray-300"}`
          }
        >
          <CreditCard size={20} />
          Profile Menu
          </NavLink>
        
      </nav>

    </div>
  );
}