import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app_body">
        <Sidebar />
      </div>
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
