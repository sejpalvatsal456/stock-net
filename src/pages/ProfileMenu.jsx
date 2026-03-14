import { useState } from "react";
import { Pencil, Check, X, LogOut } from "lucide-react";

export default function ProfileMenu() {

  const ROLES = ["Manager","Staff"];

  const [editing,setEditing] = useState(false);

  const [profile,setProfile] = useState({
    name:"Tarun Mashru",
    email:"tarun@email.com",
    phone:"+91 9876543210",
    role:"Manager"
  });

  const [tempProfile,setTempProfile] = useState(profile);

  const updateField = (field,value)=>{
    setTempProfile({
      ...tempProfile,
      [field]:value
    });
  };

  const saveProfile = ()=>{

    if(!tempProfile.name.trim()){
      alert("Name cannot be empty");
      return;
    }

    if(!tempProfile.email.trim()){
      alert("Email cannot be empty");
      return;
    }

    if(!tempProfile.role){
      alert("Role must be selected");
      return;
    }

    setProfile(tempProfile);
    setEditing(false);
  };

  const cancelEdit = ()=>{
    setTempProfile(profile);
    setEditing(false);
  };

  const logout = ()=>{
    alert("Logged out");
  };

  return (

    <div className="p-8">

      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

      <div className="bg-white rounded-xl border shadow-sm p-6 max-w-xl">

        {/* Name */}

        <div className="mb-4">

          <label className="block text-sm font-medium mb-1">
            Name
          </label>

          {editing ? (
            <input
              value={tempProfile.name}
              onChange={(e)=>updateField("name",e.target.value)}
              className="border rounded px-3 py-2 w-full"
            />
          ) : (
            <div className="text-gray-700">{profile.name}</div>
          )}

        </div>

        {/* Email */}

        <div className="mb-4">

          <label className="block text-sm font-medium mb-1">
            Email
          </label>

          {editing ? (
            <input
              value={tempProfile.email}
              onChange={(e)=>updateField("email",e.target.value)}
              className="border rounded px-3 py-2 w-full"
            />
          ) : (
            <div className="text-gray-700">{profile.email}</div>
          )}

        </div>

        {/* Phone */}

        <div className="mb-4">

          <label className="block text-sm font-medium mb-1">
            Phone
          </label>

          {editing ? (
            <input
              value={tempProfile.phone}
              onChange={(e)=>updateField("phone",e.target.value)}
              className="border rounded px-3 py-2 w-full"
            />
          ) : (
            <div className="text-gray-700">{profile.phone}</div>
          )}

        </div>

        {/* Role */}

        <div className="mb-6">

          <label className="block text-sm font-medium mb-1">
            Role
          </label>

          {editing ? (
            <select
              value={tempProfile.role}
              onChange={(e)=>updateField("role",e.target.value)}
              className="border rounded px-3 py-2 w-full"
            >
              {ROLES.map(role=>(
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          ) : (
            <div className="text-gray-700">{profile.role}</div>
          )}

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          {editing ? (
            <>
              <button
                onClick={saveProfile}
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded"
              >
                <Check size={16}/> Save
              </button>

              <button
                onClick={cancelEdit}
                className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded"
              >
                <X size={16}/> Cancel
              </button>
            </>
          ) : (
            <button
              onClick={()=>setEditing(true)}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              <Pencil size={16}/> Edit Profile
            </button>
          )}

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded"
          >
            <LogOut size={16}/> Logout
          </button>

        </div>

      </div>

    </div>

  );

}