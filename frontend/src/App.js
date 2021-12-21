import "./App.css";
import { useState, useEffect } from "react";
import { ArticleList } from "./components/ArticleList";
import Form from "./components/Form";

function App() {
  const [articles, setArticles] = useState([]);
  const [editedArticle, setEditedArticle] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, []);

  const editArticle = (article) => {
    setEditedArticle(article);
  };

  const updatedData = (article) => {
    const newArticle = articles.map((myArticle) => {
      if (myArticle.id === article.id) return article;
      else return myArticle;
    });

    setArticles(newArticle);
  };

  const openForm = () => {
    setEditedArticle({ title: "", body: "" });
  };

  const insertedArticle = (article) => {
    setArticles([...articles, article]);
  };

  const deletedArticle = (article) => {
    const newArticles = articles.filter((myArr) => {
      if (myArr.id === article.id) return false;
      else return true;
    });

    setArticles(newArticles);
  };
  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Flask and reactJS </h1>
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={openForm}>
            Insert article
          </button>
        </div>
      </div>

      <ArticleList
        articles={articles}
        editArticle={editArticle}
        deletedArticle={deletedArticle}
      />
      {editedArticle ? (
        <Form
          article={editedArticle}
          updatedData={updatedData}
          insertedArticle={insertedArticle}
        />
      ) : null}
    </div>
  );
}

export default App;
