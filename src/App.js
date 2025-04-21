import './App.css';
import React from 'react';
import processUserData from './userProfile';
import UserPosts from "./UserPosts";
import createUserProfileHTML from "./UserCard";
import { useEffect, useState } from "react";
import { createStateManager } from "./stateManager";

const users = [
  { id: 1, firstName: "Esther", lastName: "Wangari", email: "wangari@example.com", isActive: true },
  { id: 2, firstName: "Holicent", lastName: "Opar", email: "holicent@example.com", isActive: false },
  { id: 3, firstName: "Calvin", lastName: "Johnson", email: "calvin@example.com", isActive: true },
  { id: 4, firstName: "Sheila", lastName: "Williams", email: "sheila@example.com", isActive: true },
];

const user = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  isActive: true,
  role: "Admin",
};

const userState = createStateManager({ name: "John", online: false });

function App() {
  const processedUsers = processUserData(users);
  const [log, setLog] = useState([]);
  const [currentState, setCurrentState] = useState(userState.getState());

  useEffect(() => {
    // Initial state log
    const initial = userState.getState();
    setLog((prev) => [...prev, `Initial State: ${JSON.stringify(initial)}`]);

    // Subscribe to updates
    userState.subscribe((state) => {
      setCurrentState(state);
      setLog((prev) => [...prev, `State changed: ${JSON.stringify(state)}`]);
    });

    // Simulate updates
    userState.setState({ online: true });
    userState.setState({ lastActive: "2023-05-01" });
  }, []);

  return (
    <div className='app-wrapper min-h-[300px]'>
      <div className='bg-[lightblue] shadow-xl rounded-xl p-6 w-full flex flex-col gap-4'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Part 1: Processed User Data</h1>
        <ul className='space-y-2 bg-blue-100 w-full h-32 rounded-2xl'>
        {processedUsers.map(user => (
            <li key={user.id} className='text-gray-700 pl-4 pt-2'>
              <span className='font-semibold'>{user.fullName}</span> — {user.email}
            </li>
          ))}
        </ul>
      </div>
      <div className='bg-[lightblue] shadow-xl rounded-xl p-6 w-full'>
        <UserPosts />
      </div>
      <div className='bg-[lightblue] shadow-xl rounded-xl p-6 w-full flex'>
      {createUserProfileHTML(user)}
      </div>
      <div className='bg-[lightblue] shadow-xl rounded-xl p-6 w-full flex flex-col'>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Part 4: State Management Helper</h1>
      <div className=" bg-blue-100 p-4 md:p-6 lg:p-10 flex flex-col rounded-lg shadow ">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex md:flex-col lg:flex-col sm:flex-col gap-6">
        {/* Current State */}
        <div className="bg-blue-200 shadow-md rounded-xl p-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Current State</h2>
          <pre className="bg-gray-100 p-3 rounded-md text-sm md:text-base text-gray-800 overflow-auto">
            {JSON.stringify(currentState, null, 2)}
          </pre>
        </div>

        {/* Logs */}
        <div className="bg-blue-200 shadow-md rounded-xl p-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">State Logs</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-gray-700">
            {log.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      </div>
    </div>
  );

  
}




export default App;
