
import { useState } from "react";
import { Pencil, Trash, Check, X } from "lucide-react";

export default function Operations() {

  const STATUS = ["Draft","Waiting","Ready","Done","Cancelled"];

  const LOCATIONS = [
    "Main Warehouse",
    "Warehouse 1",
    "Warehouse 2",
    "Production Rack"
  ];

  const [activeTab,setActiveTab] = useState("receipts");
  const [editingId,setEditingId] = useState(null);
  const [selectMode,setSelectMode] = useState(false);
  const [selected,setSelected] = useState([]);

  const [data,setData] = useState({
    receipts:[
      {id:1,product:"Laptop",qty:20,supplier:"Dell",location:"Main Warehouse",status:"Draft"}
    ],
    deliveries:[
      {id:2,product:"Mouse",qty:10,customer:"Amazon",location:"Main Warehouse",status:"Draft"}
    ],
    adjustments:[
      {id:3,product:"Keyboard",location:"Warehouse 1",actual:48,reason:"Damaged"}
    ]
  });

  const rows = data[activeTab];

  const toggleSelect = (id)=>{
    if(selected.includes(id)){
      setSelected(selected.filter(i=>i!==id));
    } else {
      setSelected([...selected,id]);
    }
  };

  const updateField = (id,field,value)=>{

    if(
      (field==="qty" || field==="actual") &&
      value!=="" &&
      Number(value)<=0
    ){
      return;
    }

    setData({
      ...data,
      [activeTab]: rows.map(r =>
        r.id===id ? {...r,[field]:value} : r
      )
    });
  };

  const validate = (item)=>{

    if(!item.product || item.product.trim()===""){
      alert("Product required");
      return false;
    }

    if(activeTab!=="adjustments"){
      if(!item.qty || Number(item.qty)<=0){
        alert("Quantity must be greater than 0");
        return false;
      }
    }

    if(activeTab==="adjustments"){
      if(!item.actual || Number(item.actual)<=0){
        alert("Actual quantity must be greater than 0");
        return false;
      }

      if(!item.reason || item.reason.trim()===""){
        alert("Reason cannot be empty");
        return false;
      }
    }

    if(activeTab==="receipts"){
      if(!item.supplier || item.supplier.trim()===""){
        alert("Supplier required");
        return false;
      }
    }

    if(activeTab==="deliveries"){
      if(!item.customer || item.customer.trim()===""){
        alert("Customer required");
        return false;
      }
    }

    if(activeTab==="adjustments"){
        if(!item.actual || Number(item.actual)<=0){
            alert("Actual quantity must be greater than 0");
            return false;
        }

        if(!item.reason || item.reason.trim()===""){
            alert("Reason cannot be empty");
            return false;
        }
    }



    if(!item.location){
      alert("Location required");
      return false;
    }

    return true;
  };

  const confirmEdit = (item)=>{
    if(!validate(item)) return;
    setEditingId(null);
  };

  const cancelEdit = ()=>{
    setEditingId(null);
  };

  const deleteRow = (id)=>{
    setData({
      ...data,
      [activeTab]: rows.filter(r=>r.id!==id)
    });
  };

  const addRow = ()=>{

    let row;

    if(activeTab==="receipts"){
      row={id:Date.now(),product:"",qty:"",supplier:"",location:"",status:"Draft"};
    }

    if(activeTab==="deliveries"){
      row={id:Date.now(),product:"",qty:"",customer:"",location:"",status:"Draft"};
    }

    if(activeTab==="adjustments"){
        row={
            id:Date.now(),
            product:"",
            location:"",
            actual:"",
            reason:""
        };
    }
    setData({
      ...data,
      [activeTab]: [...rows,row]
    });

    setEditingId(row.id);
  };

  return (

    <div className="p-8">

      <h1 className="text-2xl font-semibold mb-6">Operations</h1>

      {/* Tabs */}

      <div className="flex gap-3 mb-6">

        <button
          onClick={()=>setActiveTab("receipts")}
          className={`px-4 py-2 rounded ${
            activeTab==="receipts"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Receipts
        </button>

        <button
          onClick={()=>setActiveTab("deliveries")}
          className={`px-4 py-2 rounded ${
            activeTab==="deliveries"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Delivery Orders
        </button>

        <button
          onClick={()=>setActiveTab("adjustments")}
          className={`px-4 py-2 rounded ${
            activeTab==="adjustments"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Inventory Adjustment
        </button>

      </div>

      {/* Controls */}

      <div className="flex justify-end gap-3 mb-4">

        <button
          onClick={()=>setSelectMode(!selectMode)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          {selectMode ? "Cancel" : "Select"}
        </button>

        <button
          onClick={addRow}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          + Add
        </button>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">

        <table className="w-full table-fixed">

          <thead className="bg-gray-50 border-b text-sm">

            <tr>

              {selectMode && <th className="w-12 p-3 text-center"></th>}

              <th className="p-3 text-left w-48">Product</th>

              {activeTab==="adjustments" ? (
                <>
                    <th className="p-3 text-left w-44">Location</th>
                    <th className="p-3 text-center w-32">Actual</th>
                    <th className="p-3 text-left w-44">Reason</th>
                </>
              ) : (
                <>
                  <th className="p-3 text-center w-28">Qty</th>
                  <th className="p-3 text-left w-40">
                    {activeTab==="receipts" ? "Supplier" : "Customer"}
                  </th>
                  <th className="p-3 text-left w-44">Location</th>
                </>
              )}

              <th className="p-3 text-center w-28">Actions</th>

            </tr>

          </thead>

          <tbody className="text-sm">

            {rows.map(item => (

              <tr key={item.id} className="border-b hover:bg-gray-50">

                {selectMode && (
                  <td className="p-3 text-center">
                    <input
                      type="checkbox"
                      checked={selected.includes(item.id)}
                      onChange={()=>toggleSelect(item.id)}
                    />
                  </td>
                )}

                {/* Product */}

                <td className="p-3">

                  {editingId===item.id ? (
                    <input
                      value={item.product}
                      onChange={(e)=>updateField(item.id,"product",e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : item.product}

                </td>

                {activeTab==="adjustments" ? (

                  <>
                    <td className="p-3">

                        {editingId===item.id ? (
                            <input
                            value={item.reason}
                            onChange={(e)=>updateField(item.id,"reason",e.target.value)}
                            className="border rounded px-2 py-1 w-full"
                            />
                        ) : item.reason}

                    </td>

                    <td className="p-3 text-center">

                      {editingId===item.id ? (
                        <input
                          type="number"
                          value={item.actual}
                          onChange={(e)=>updateField(item.id,"actual",e.target.value)}
                          className="border rounded px-2 py-1 w-24 text-center"
                        />
                      ) : item.actual}

                    </td>

                    <td className="p-3">

                      {editingId===item.id ? (
                        <input
                          value={item.reason}
                          onChange={(e)=>updateField(item.id,"reason",e.target.value)}
                          className="border rounded px-2 py-1 w-full"
                        />
                      ) : item.reason}

                    </td>
                  </>

                ) : (

                  <>
                    <td className="p-3 text-center">

                      {editingId===item.id ? (
                        <input
                          type="number"
                          value={item.qty}
                          onChange={(e)=>updateField(item.id,"qty",e.target.value)}
                          className="border rounded px-2 py-1 w-20 text-center"
                        />
                      ) : item.qty}

                    </td>

                    <td className="p-3">

                      {editingId===item.id ? (
                        <input
                          value={
                            activeTab==="receipts"
                              ? item.supplier
                              : item.customer
                          }
                          onChange={(e)=>
                            updateField(
                              item.id,
                              activeTab==="receipts" ? "supplier":"customer",
                              e.target.value
                            )
                          }
                          className="border rounded px-2 py-1 w-full"
                        />
                      ) : (
                        activeTab==="receipts"
                          ? item.supplier
                          : item.customer
                      )}

                    </td>

                    <td className="p-3">

                      {editingId===item.id ? (
                        <select
                          value={item.location}
                          onChange={(e)=>updateField(item.id,"location",e.target.value)}
                          className="border rounded px-2 py-1 w-full"
                        >
                          <option value="">Select</option>
                          {LOCATIONS.map(w=>(
                            <option key={w}>{w}</option>
                          ))}
                        </select>
                      ) : item.location}

                    </td>

                  </>
                )}

                {/* Actions */}

                <td className="p-3 flex justify-center gap-3">

                  {editingId===item.id ? (
                    <>
                      <Check
                        className="text-green-600 cursor-pointer"
                        onClick={()=>confirmEdit(item)}
                      />
                      <X
                        className="text-red-600 cursor-pointer"
                        onClick={cancelEdit}
                      />
                    </>
                  ) : (
                    <>
                      <Pencil
                        size={18}
                        className="text-blue-500 cursor-pointer"
                        onClick={()=>setEditingId(item.id)}
                      />
                      <Trash
                        size={18}
                        className="text-red-500 cursor-pointer"
                        onClick={()=>deleteRow(item.id)}
                      />
                    </>
                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

