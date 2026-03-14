import { useState } from "react";
import { Package, Plus, Pencil, Trash } from "lucide-react";
import AddProductModal from "../components/AddProductModal";

export default function Products() {

  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false); 
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", sku: "LAP123", stock: 45, price: 1200 },
    { id: 2, name: "Mouse", sku: "MOU22", stock: 200, price: 20 }
  ]);
  const [selected, setSelected] = useState([]);
  const [selectMode, setSelectMode] = useState(false);

  // select single
  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // select all
  const toggleSelectAll = () => {
    if (selected.length === products.length) {
      setSelected([]);
    } else {
      setSelected(products.map((p) => p.id));
    }
  };

  // delete one
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // delete selected
  const deleteSelected = () => {
    setProducts(products.filter((p) => !selected.includes(p.id)));
    setSelected([]);
  };

  // AddProduct
  const addProduct = (product) => {
  if (editingProduct) {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === editingProduct.id ? { ...product, id: editingProduct.id } : p
      )
    );
    setEditingProduct(null);
    } 
    else {
      setProducts((prev) => [...prev, product]);
    }
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <Package className="text-blue-500" />
          Products
        </h1>

        <div className="flex gap-3">

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">

          {/* SELECT MODE TOGGLE */}
          <button
            onClick={() => setSelectMode(!selectMode)}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            {selectMode ? "Cancel" : "Select"}
          </button>

          {/* DELETE SELECTED */}
          {selectMode && selected.length > 0 && (
            <button
              onClick={deleteSelected}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              <Trash size={18} />
              Delete Selected
            </button>
          )}

          {/* ADD PRODUCT */}
          <button onClick={() => setShowModal(true)} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <Plus size={18} />
            Add Product
          </button>

        </div>

        </div>
      </div>



      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-gray-600">

            <tr>

              {/* SELECT ALL HEADER */}
              {selectMode && (
                <th className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selected.length === products.length}
                    onChange={toggleSelectAll}
                  />
                </th>
              )}

              <th className="text-left px-6 py-3">Product</th>
              <th className="text-left px-6 py-3">SKU</th>
              <th className="text-left px-6 py-3">Stock</th>
              <th className="text-left px-6 py-3">Price</th>
              <th className="text-left px-6 py-3">Actions</th>

            </tr>

          </thead>


          <tbody>

            {products.map((product) => (

              <tr key={product.id} className="border-t hover:bg-gray-50">

                {selectMode && (
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selected.includes(product.id)}
                      onChange={() => toggleSelect(product.id)}
                    />
                  </td>
                )}

                <td className="px-6 py-4 font-medium">
                  {product.name}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {product.sku}
                </td>

                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                    {product.stock}
                  </span>
                </td>

                <td className="px-6 py-4 font-semibold">
                  ${product.price}
                </td>

                {/* ACTIONS */}
                <td className="px-6 py-4 flex gap-3">

                  {/*Edit Button*/}
                  <button onClick={() => { setEditingProduct(product); setShowModal(true); }}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash size={18} />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {showModal && (
        <AddProductModal
          closeModal={() => {
            setShowModal(false);
            setEditingProduct(null);
          }}
          addProduct={addProduct}
          editingProduct={editingProduct}
        />
      )}
    </div>
  );
}