import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function AddProductModal({ closeModal, addProduct, editingProduct }) {

  const [form, setForm] = useState({
  name: "",
  sku: "",
  stock: "",
  price: ""
  });

  useEffect(() => {
  if (editingProduct) {
    setForm({
      name: editingProduct.name,
      sku: editingProduct.sku,
      stock: editingProduct.stock,
      price: editingProduct.price
    });
   }
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    addProduct({
    ...form,
    id: editingProduct ? editingProduct.id : Date.now()
   });
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-[400px] space-y-4">

        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            {editingProduct ? "Edit Product" : "Add Product"}
          </h2>

          <button onClick={closeModal}>
            <X />
          </button>
        </div>

        <input
        name="name"
        value={form.name}
        placeholder="Product Name"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        />

        <input
          name="sku"
          value={form.sku}
          placeholder="SKU"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          />

        <input
          name="stock"
          value={form.stock}
          placeholder="Stock"
          type="number"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          />

        <input
          name="price"
          value={form.price}
          placeholder="Price"
          type="number"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>

      </div>

    </div>
  );
}