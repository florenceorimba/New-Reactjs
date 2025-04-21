import React from "react";

const createUserProfileHTML = (user) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 items-center">
        Part 3: Creating a User Component (Simulated)
      </h1>

    <div
      key={user.id}
      id={`user-${user.id}`}
      className="user-card bg-blue-100 rounded-xl shadow-md p-4 flex gap-4 items-center w-full">
      <img
        src={user.avatar}
        alt={`${user.firstName} ${user.lastName}`}
        className="avatar w-20 h-20 rounded-full object-cover border"
      />
      <div className="user-info flex flex-col">
        <h2 className="text-xl font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-600">Role: {user.role}</p>
        {user.isActive && (
          <span className="badge bg-green-100 text-green-700 px-2 py-1 text-xs rounded-full mt-1 w-fit">
            Active
          </span>
        )}
      </div>
    </div>
    </div>
  );
};

export default createUserProfileHTML;
