import { Plus, Package } from "lucide-react";

export default function Products() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <Package className="text-blue-500" />
          Products
        </h1>

        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">

          <Plus size={18} />

          Add Product

        </button>

      </div>



      {/* PRODUCTS TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-gray-600">

            <tr>
              <th className="text-left px-6 py-3">Product</th>
              <th className="text-left px-6 py-3">SKU</th>
              <th className="text-left px-6 py-3">Stock</th>
              <th className="text-left px-6 py-3">Price</th>
            </tr>

          </thead>


          <tbody>

            <tr className="border-t hover:bg-gray-50">

              <td className="px-6 py-4 font-medium">
                Laptop
              </td>

              <td className="px-6 py-4 text-gray-600">
                LAP123
              </td>

              <td className="px-6 py-4">

                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                  45
                </span>

              </td>

              <td className="px-6 py-4 font-semibold">
                $1200
              </td>

            </tr>



            <tr className="border-t hover:bg-gray-50">

              <td className="px-6 py-4 font-medium">
                Mouse
              </td>

              <td className="px-6 py-4 text-gray-600">
                MOU22
              </td>

              <td className="px-6 py-4">

                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                  200
                </span>

              </td>

              <td className="px-6 py-4 font-semibold">
                $20
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  
  );
}