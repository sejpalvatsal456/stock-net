import { useState } from "react";
import { Package, AlertCircle, Download, Truck, PlusCircle, Repeat } from "lucide-react";

export default function Dashboard() {

  const [showFilters, setShowFilters] = useState(false);
  const [docType, setDocType] = useState("");
  const [status, setStatus] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="space-y-6">

      {/* TOP HEADER */}
      <div className="flex justify-between items-center">

        <div className="text-gray-500 text-sm">
          Dashboard / <span className="font-semibold text-black">Workspace</span>
        </div>

        <div className="bg-gray-200 px-4 py-1 rounded-full text-sm">
          WH/01 - Primary Store
        </div>

      </div>


      {/* STATS CARDS */}
      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">TOTAL INVENTORY</p>
            <h1 className="text-3xl font-bold mt-2">175</h1>
          </div>
          <Package size={32} className="text-blue-500" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">LOW STOCK ITEMS</p>
            <h1 className="text-3xl font-bold text-red-500 mt-2">1</h1>
          </div>
          <AlertCircle size={32} className="text-red-500" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">LIVE RECEIPTS</p>
            <h1 className="text-3xl font-bold mt-2">3</h1>
          </div>
          <Download size={32} className="text-green-500" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">DAILY SHIPMENTS</p>
            <h1 className="text-3xl font-bold mt-2">12</h1>
          </div>
          <Truck size={32} className="text-purple-500" />
        </div>

      </div>



      {/* MAIN SECTION */}
      <div className="grid grid-cols-3 gap-6">

        {/* WAREHOUSE LEDGER */}
        <div className="col-span-2 bg-white p-6 rounded-xl shadow">

          <div className="flex justify-between items-center mb-4">

            <h2 className="font-semibold">
              Warehouse Ledger
            </h2>

            <button
              className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200"
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </button>

          </div>


          {/* FILTER PANEL */}
          {showFilters && (
            <div className="grid grid-cols-4 gap-3 mb-4">

              <div>
                <label className="text-xs font-semibold text-gray-600">
                  Document Type
                </label>

                <select
                  className="border p-1 text-sm rounded w-full"
                  value={docType}
                  onChange={(e) => setDocType(e.target.value)}
                >
                  <option value="">All</option>
                  <option>Receipt</option>
                  <option>Delivery</option>
                  <option>Internal</option>
                  <option>Adjustment</option>
                </select>
              </div>


              <div>
                <label className="text-xs font-semibold text-gray-600">
                  Status
                </label>

                <select
                  className="border p-1 text-sm rounded w-full"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">All</option>
                  <option>Draft</option>
                  <option>Waiting</option>
                  <option>Ready</option>
                  <option>Done</option>
                  <option>Canceled</option>
                </select>
              </div>


              <div>
                <label className="text-xs font-semibold text-gray-600">
                  Warehouse
                </label>

                <select
                  className="border p-1 text-sm rounded w-full"
                  value={warehouse}
                  onChange={(e) => setWarehouse(e.target.value)}
                >
                  <option value="">All</option>
                  <option>WH01</option>
                  <option>WH02</option>
                </select>
              </div>


              <div>
                <label className="text-xs font-semibold text-gray-600">
                  Category
                </label>

                <select
                  className="border p-1 text-sm rounded w-full"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">All</option>
                  <option>Electronics</option>
                  <option>Metal</option>
                </select>
              </div>

            </div>
          )}



          {/* TABLE */}
          <table className="w-full text-sm">

            <thead className="text-gray-500 border-b">
              <tr>
                <th className="text-left py-2">REF</th>
                <th className="text-left py-2">PRODUCT</th>
                <th className="text-left py-2">TYPE</th>
                <th className="text-left py-2">QTY</th>
                <th className="text-left py-2">STATUS</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-3">M1</td>
                <td>Steel Rods</td>

                <td>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                    RECEIPT
                  </span>
                </td>

                <td>50</td>

                <td className="text-green-600">
                  Validated
                </td>

              </tr>

            </tbody>

          </table>

        </div>



        {/* QUICK OPERATIONS */}
        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="font-semibold mb-4">
            Quick Operations
          </h2>

          <div className="space-y-4">

            <button className="w-full flex items-center gap-3 bg-green-100 text-green-700 p-3 rounded-lg">
              <PlusCircle size={20} />
              Receive Stock
            </button>

            <button className="w-full flex items-center gap-3 bg-red-100 text-red-700 p-3 rounded-lg">
              <Truck size={20} />
              Outgoing Delivery
            </button>

            <button className="w-full flex items-center gap-3 bg-blue-100 text-blue-700 p-3 rounded-lg">
              <Repeat size={20} />
              Internal Transfer 
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}