import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="write__post">
      <div className="content">
        <input type="text" placeholder="title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b> Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            name="file"
            id="file"
          />
          <label className="file" htmlFor="file">
            {" "}
            Upload Image
          </label>
          <div className="buttons">
            <button>save as draft</button>
            <button>update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            {" "}
            <input type="radio" name="category" value="js" id="js" />
            <label htmlFor="js">Javascript</label>
          </div>
          <div className="cat">
            {" "}
            <input type="radio" name="category" value="html" id="html" />
            <label htmlFor="html">Html</label>
          </div>
          <div className="cat">
            {" "}
            <input type="radio" name="category" value="React" id="React" />
            <label htmlFor="React">ReactJS</label>
          </div>
          <div className="cat">
            {" "}
            <input type="radio" name="category" value="node" id="node" />
            <label htmlFor="node">NodeJS</label>
          </div>
          <div className="cat">
            {" "}
            <input type="radio" name="category" value="css" id="css" />
            <label htmlFor="css">CSS</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
