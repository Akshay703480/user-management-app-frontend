import React from "react";

function DeleteButton({ userId, handleDelete, users }) {
  const handleDeleteUser = () => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    handleDelete(updatedUsers);
  };

  return (
    <button
      onClick={handleDeleteUser}
      className="bg-red-500 text-white px-4 py-1 mt-2 rounded-md"
    >
      Delete
    </button>
  );
}

export default DeleteButton;
