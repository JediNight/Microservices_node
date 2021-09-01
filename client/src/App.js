import React from "react"; // import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <PostCreate></PostCreate>
        <hr />
        <h1>Posts</h1>
        <PostList></PostList>
      </div>
    </div>
  );
}

export default App;
