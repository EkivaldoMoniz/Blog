import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/Posts/Styles.css";
import UserDetail from "./components/UserDetail/UserDetail";
import UserList from "./components/UserList/UserList";
import PostsPage from "./components/Pages/PostsPage";
import React, { useState } from "react";

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <Router>
      <div>
        <header className="header">
          <h1>My Blog</h1>
          <div>
            <a
              style={{ marginRight: "10px" }}
              href="/posts"
              className="header-link"
            >
              Posts{" "}
            </a>
            <a
              style={{ marginRight: "50px" }}
              href="/users"
              className="header-link"
            >
              Users{" "}
            </a>
          </div>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={<PostsPage onUserClick={handleUserClick} />}
            />
            <Route
              path="/posts"
              element={<PostsPage onUserClick={handleUserClick} />}
            />
            <Route path="/users" element={<UserList />} />
            <Route
              path="/users/:id"
              element={<UserDetail user={selectedUser} />}
            />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2023 My App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
