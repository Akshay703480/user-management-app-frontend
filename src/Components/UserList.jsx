import React, { useState, useEffect } from "react";
import axios from "axios";
import AddUserForm from "./AddUserForm";
import DeleteButton from "./DeleteButton";

function UserList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data); // Initially, show all users
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  // Handle search functionality
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);

    // Filter users based on search query
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.company.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  const handleAddUser = (newUserData) => {
    setUsers([...users, newUserData]);
    setFilteredUsers([...filteredUsers, newUserData]); // Add to filtered users as well
    setShowModal(false);
  };

  // Handle delete functionality
  const handleDelete = (updatedUsers) => {
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers); // Update filtered users after deletion
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-roboto1 text-gray-900 mb-6">User List</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users by name, email, or company"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Loading and Error Messages */}
      {loading && <div className="text-xl text-blue-500">Loading users...</div>}
      {error && <div className="text-red-600 font-semibold">{error}</div>}

      {/* Add User Button */}
      <div className="mb-4 text-right">
        <button
          onClick={() => setShowModal(true)}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-500 rounded-md group-hover:bg-opacity-0">
            Add New User
          </span>
        </button>
      </div>

      {/* User List Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Company: {user.company.name}</p>
            <DeleteButton
              userId={user.id}
              handleDelete={handleDelete}
              users={users}
            />
          </div>
        ))}
      </div>

      {/* Add User Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <AddUserForm onAddUser={handleAddUser} setShowModal={setShowModal} />
        </div>
      )}
    </div>
  );
}

export default UserList;
