import React, { useState } from "react";

// Part 2: Async Data Fetching
async function fetchUserPosts(userId) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!res.ok) throw new Error("Failed to fetch posts");

    const posts = await res.json();
    return posts.map((post) => post.title);
  } catch (error) {
    throw new Error(error.message);
  }
}

const UserPosts = () => {
  const [titles, setTitles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    setError("");
    try {
      const titles = await fetchUserPosts(1);
      setTitles(titles);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4 items-center">Part 2: Async Data Fetching</h1>
      <p>User Post Title</p>
      <div className="flex flex-col items-center justify-start">
      <button
        onClick={handleFetch}
        className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mb-6 items-center w-[300px]"
      >
        {loading ? "Fetching..." : "Fetch Posts"}
      </button>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      <ul className="bg-blue-100 shadow-md p-4 rounded-lg w-full overflow-y-auto h-[250px]">
        {titles.map((title, index) => (
          <li key={index} className=" border px-2 py-2 border-blue-500 hover:bg-blue-400 transition duration-300">{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
