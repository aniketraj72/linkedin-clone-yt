import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
