import React, { Component } from "react";
import axios from "axios";
import Global from "../Gobal";
import imageDefault from "../assets/images/default_product_image.png";

class Articles extends Component {
  state = {
    articles: [],
    status: null,
  };

  url = Global.url;

  componentWillMount() {
    this.getArticles();
  }

  getArticles = () => {
    axios.get(this.url + "articles").then((res) => {
      this.setState({
        articles: res.data.articles,
        status: "success",
      });
    });
  };

  render() {
    if (this.state.articles.length >= 1) {
      var listArticles = this.state.articles.map((article) => {
        return (
          <div id="articles">
            <article className="article-item" id="article-template">
              <div className="image-wrap">
                {article.image !== null ? (
                  <img
                    src={this.url + "get-image/" + article.image}
                    alt={article.title}
                  />
                ) : (
                  <img src={imageDefault} alt={article.title} />
                )}
              </div>

              <h2>{article.title}</h2>
              <span className="date">{article.date}</span>
              <a href="#">Leer más</a>

              <div className="clearfix"></div>
            </article>
          </div>
        );
      });
      return <div id="articles">{listArticles}</div>;
    } else if (
      this.state.articles.length === 0 &&
      this.state.status === "success"
    ) {
      return (
        <div id="articles">
          <h2 className="subheader">No hay articulos para mostrar</h2>
        </div>
      );
    } else {
      return (
        <div id="articles">
          <h1>Cargando...</h1>
        </div>
      );
    }
  }
}

export default Articles;
