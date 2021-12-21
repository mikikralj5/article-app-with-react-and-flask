import React from "react";
import APIService from "./APIService";

export const ArticleList = ({ articles, editArticle, deletedArticle }) => {
  // const editArticle = (article) => {

  // }

  const deleteArticle = (article) => {
    APIService.DeleteArticle(article.id).then(() => deletedArticle(article));
  };

  return (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.date}</p>
            <div className="row">
              <div className="col-md-1">
                <button
                  className="btn btn-primary"
                  onClick={() => editArticle(article)}
                >
                  Update
                </button>
              </div>

              <div className="col">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteArticle(article)}
                >
                  Delete
                </button>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
