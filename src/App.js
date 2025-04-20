import './App.css';
import React from 'react';
import processUserData from './userProfile';
import UserPosts from "./UserPosts";


const users = [
  { id: 1, firstName: "Esther", lastName: "Wangari", email: "wangari@example.com", isActive: true },
  { id: 2, firstName: "Holicent", lastName: "Opar", email: "holicent@example.com", isActive: false },
  { id: 3, firstName: "Calvin", lastName: "Johnson", email: "calvin@example.com", isActive: true },
  { id: 4, firstName: "Sheila", lastName: "Williams", email: "sheila@example.com", isActive: true },
];

function App() {
  const processedUsers = processUserData(users);

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
    </div>
  );

  
}




export default App;
