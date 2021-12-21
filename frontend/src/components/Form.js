import React from "react";
import APIService from "./APIService";
import { useState, useEffect } from "react";

const Form = ({ article, updatedData, insertedArticle }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    setTitle(article.title);
    setBody(article.body);
  }, [article]);

  const updateArticle = () => {
    APIService.UpdateArticle(article.id, { title, body })
      .then((resp) => updatedData(resp))
      .catch((error) => console.log(error));
  };

  const insertArticle = () => {
    APIService.InsertArticle({ title, body })
      .then((resp) => insertedArticle(resp))
      .cath((error) => console.log(error));
  };

  return (
    <div>
      {article ? (
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="body" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            placeholder="Enter description"
            rows="5"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          {article.id ? (
            <button className="btn btn-success mt-3" onClick={updateArticle}>
              Update
            </button>
          ) : (
            <button className="btn btn-success mt-3" onClick={insertArticle}>
              Insert
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Form;
