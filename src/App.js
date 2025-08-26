import React, { useState } from "react";
import "./App.css";
import BlogNav from "./components/BlogNav";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import UserList from "./components/UserList";
import Footer from "./components/Footer";
import BlogDetail from "./components/BlogDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const currentUser = "Pradesha";

  const [users, setUsers] = useState([
    { name: "Nelson", following: false },
    { name: "Alex", following: false },
    { name: "Priya", following: false }
  ]);

  const [posts, setPosts] = useState([
    { id: 1, user: "Nelson", title: "JavaScript", content: "JavaScript is the world’s most popular scripting language...", image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg" },
    { id: 2, user: "Alex", title: "Data Structure", content: "Data Structures organize and store data efficiently...", image: "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png" },
    { id: 3, user: "Priya", title: "Algorithm", content: "An Algorithm is a process or set of rules in problem-solving...", image: "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png" },
    { id: 4, user: "Pradesha", title: "Computer Network", content: "Computer networks connect multiple devices for communication...", image: "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png" },
  ]);

  // Follow / Unfollow
  const toggleFollow = (name) => {
    setUsers(users.map(user =>
      user.name === name ? { ...user, following: !user.following } : user
    ));
  };

  // Add new post
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  // Following list
  const followingUsers = users.filter(u => u.following).map(u => u.name);
  const filteredPosts = posts.filter(
    (post) => post.user === currentUser || followingUsers.includes(post.user)
  );

  return (
    <Router>
      <div className="main-container" style={{ backgroundColor: "aliceblue" }}>
        <BlogNav />
        <Routes>
          <Route path="/" element={
            <>
              <UserList users={users} toggleFollow={toggleFollow} />
              <CreatePost addPost={addPost} currentUser={currentUser} />
              <Posts posts={filteredPosts} />
            </>
          } />
          <Route path="/post/:id" element={<BlogDetail posts={posts} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
