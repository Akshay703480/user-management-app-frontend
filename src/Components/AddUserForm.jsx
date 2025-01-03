import React, { useState } from "react";

function AddUserForm({ onAddUser, setShowModal }) {
  const [newUser, setNewUser] = useState({ name: "", email: "", company: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserData = {
      id: Date.now(), 
      name: newUser.name,
      email: newUser.email,
      company: newUser.company,
    };
    onAddUser(newUserData); 
    setNewUser({ name: "", email: "", company: "" }); 
    alert("User successfully added!"); 
    setShowModal(false); // Close modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-lg w-96 relative">
        <h2 className="text-2xl font-extrabold text-gray-700 mb-4 text-center">
          Add New User
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-600"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={newUser.company}
              onChange={(e) =>
                setNewUser({ ...newUser, company: e.target.value })
              }
              required
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-200"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 hover:shadow-lg transition duration-200"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUserForm;
