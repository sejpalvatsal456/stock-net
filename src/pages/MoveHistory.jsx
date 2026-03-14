import { useState } from "react";

export default function MoveHistory() {

  const [moves] = useState([
    {
      id: 1,
      date: "2026-03-14",
      product: "Laptop",
      type: "Receipt",
      from: "Supplier",
      to: "Main Warehouse",
      qty: 20
    },
    {
      id: 2,
      date: "2026-03-15",
      product: "Mouse",
      type: "Delivery",
      from: "Main Warehouse",
      to: "Amazon",
      qty: -10
    },
    {
      id: 3,
      date: "2026-03-16",
      product: "Keyboard",
      type: "Adjustment",
      from: "Warehouse 1",
      to: "Warehouse 1",
      qty: -2
    }
  ]);

  return (

    <div className="p-8">

      <h1 className="text-2xl font-semibold mb-6">Move History</h1>

      <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">

        <table className="w-full table-fixed">

          <thead className="bg-gray-50 border-b text-sm">

            <tr>

              <th className="p-3 text-left w-32">Date</th>
              <th className="p-3 text-left w-40">Product</th>
              <th className="p-3 text-left w-28">Type</th>
              <th className="p-3 text-left w-44">From</th>
              <th className="p-3 text-left w-44">To</th>
              <th className="p-3 text-center w-24">Qty</th>

            </tr>

          </thead>

          <tbody className="text-sm">

            {moves.map((move) => (

              <tr key={move.id} className="border-b hover:bg-gray-50">

                <td className="p-3">{move.date}</td>

                <td className="p-3">{move.product}</td>

                <td className="p-3">

                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      move.type === "Receipt"
                        ? "bg-green-100 text-green-700"
                        : move.type === "Delivery"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {move.type}
                  </span>

                </td>

                <td className="p-3">{move.from}</td>

                <td className="p-3">{move.to}</td>

                <td
                  className={`p-3 text-center font-semibold ${
                    move.qty > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {move.qty}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}
