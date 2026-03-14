import { useState } from "react";
import { Pencil, Trash, Check, X } from "lucide-react";

export default function Settings() {

  const [editingId,setEditingId] = useState(null);
  const [selectMode,setSelectMode] = useState(false);
  const [selected,setSelected] = useState([]);

  const [warehouses,setWarehouses] = useState([
    {
      id:1,
      name:"Main Warehouse",
      location:"Ahmedabad",
      description:"Central storage facility"
    }
  ]);

  const toggleSelect = (id)=>{
    if(selected.includes(id)){
      setSelected(selected.filter(i=>i!==id));
    } else {
      setSelected([...selected,id]);
    }
  };

  const updateField = (id,field,value)=>{
    setWarehouses(
      warehouses.map(w =>
        w.id===id ? {...w,[field]:value} : w
      )
    );
  };

  const validate = (item)=>{

    if(!item.name || item.name.trim()===""){
      alert("Warehouse name required");
      return false;
    }

    if(!item.location || item.location.trim()===""){
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

  const deleteWarehouse = (id)=>{
    setWarehouses(
      warehouses.filter(w=>w.id!==id)
    );
  };

  const addWarehouse = ()=>{

    const newWarehouse = {
      id:Date.now(),
      name:"",
      location:"",
      description:""
    };

    setWarehouses([...warehouses,newWarehouse]);
    setEditingId(newWarehouse.id);
  };

  return (

    <div className="p-8">

      <h1 className="text-2xl font-semibold mb-6">Warehouse Settings</h1>

      {/* Controls */}

      <div className="flex justify-end gap-3 mb-4">

        <button
          onClick={()=>setSelectMode(!selectMode)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          {selectMode ? "Cancel" : "Select"}
        </button>

        <button
          onClick={addWarehouse}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          + Add Warehouse
        </button>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">

        <table className="w-full table-fixed">

          <thead className="bg-gray-50 border-b text-sm">

            <tr>

              {selectMode && <th className="w-12 p-3 text-center"></th>}

              <th className="p-3 text-left w-48">Name</th>
              <th className="p-3 text-left w-48">Location</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-center w-28">Actions</th>

            </tr>

          </thead>

          <tbody className="text-sm">

            {warehouses.map(item => (

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

                {/* Name */}

                <td className="p-3">

                  {editingId===item.id ? (
                    <input
                      value={item.name}
                      onChange={(e)=>updateField(item.id,"name",e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : item.name}

                </td>

                {/* Location */}

                <td className="p-3">

                  {editingId===item.id ? (
                    <input
                      value={item.location}
                      onChange={(e)=>updateField(item.id,"location",e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : item.location}

                </td>

                {/* Description */}

                <td className="p-3">

                  {editingId===item.id ? (
                    <textarea
                      value={item.description}
                      onChange={(e)=>updateField(item.id,"description",e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                      rows="2"
                    />
                  ) : item.description}

                </td>

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
                        onClick={()=>deleteWarehouse(item.id)}
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