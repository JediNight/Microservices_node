import React, { useState } from "react";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [title, setTitle] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://posts.com/posts/create", { title });
    setTitle("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <h1>Create Post</h1>
        <label htmlFor="">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
